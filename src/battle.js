import { typeMultiplier } from './data.js';

export function stageMult(stage) {
  return stage >= 0 ? (2 + stage) / 2 : 2 / (2 - stage);
}

export function effectiveStat(creature, stat) {
  let value = creature.stats[stat] * stageMult(creature.stages[stat] || 0);
  if (stat === 'spe' && creature.status === 'chill') value *= 0.5;
  return Math.max(1, value);
}

export function effectiveSpeed(creature) {
  return effectiveStat(creature, 'spe');
}

export function critChance(creature) {
  return 1 / 16 + (creature.ability.key === 'crit' ? 0.1 : 0);
}

export function calcDamage(attacker, defender, move, rng = Math.random) {
  if (!move.power) return { damage: 0, typeMult: 1, crit: false, missed: false };
  const acc = move.accuracy;
  if (rng() * 100 > acc) return { damage: 0, typeMult: 1, crit: false, missed: true };
  const physical = move.group === 'physical';
  const atk = effectiveStat(attacker, physical ? 'atk' : 'spa');
  const def = effectiveStat(defender, physical ? 'def' : 'spd');
  let base = (((2 * 50) / 5 + 2) * move.power * (atk / def)) / 50 + 2;
  const mult = typeMultiplier(move.type, defender.type);
  base *= mult;
  if (physical && attacker.status === 'burn') base *= 0.5;
  if (attacker.ability.key === 'typeDamage' && move.type === attacker.type) base *= 1.2;
  if (attacker.ability.key === 'lowHpDamage' && defender.hp < defender.maxHp * 0.5) base *= 1.25;
  if (defender.ability.key === 'reduce') base *= 0.88;
  const crit = rng() < critChance(attacker);
  if (crit) base *= 1.5;
  base *= 0.88 + rng() * 0.12;
  return {
    damage: Math.max(1, Math.round(base)),
    typeMult: mult,
    crit,
    missed: false,
  };
}

export function estimateDamage(attacker, defender, move) {
  if (!move.power) return 0;
  const physical = move.group === 'physical';
  const atk = effectiveStat(attacker, physical ? 'atk' : 'spa');
  const def = effectiveStat(defender, physical ? 'def' : 'spd');
  let base = (((2 * 50) / 5 + 2) * move.power * (atk / def)) / 50 + 2;
  base *= typeMultiplier(move.type, defender.type);
  if (physical && attacker.status === 'burn') base *= 0.5;
  if (attacker.ability.key === 'typeDamage' && move.type === attacker.type) base *= 1.2;
  if (defender.ability.key === 'reduce') base *= 0.88;
  return base * 0.94;
}

function statusMoveScore(attacker, defender, move) {
  let score = 0;
  for (const e of move.effects) {
    if (e.kind === 'heal') {
      const missing = 1 - attacker.hp / attacker.maxHp;
      score += missing > 0.25 ? 30 + missing * 80 : -15;
    } else if (e.kind === 'barrier') {
      score += attacker.barrier > 0 ? 2 : 26;
    } else if (e.kind === 'buff') {
      const stage = attacker.stages[e.stat] || 0;
      score += stage >= 4 ? -6 : 12 + (e.stages || 1) * 6 - stage * 3;
    } else if (e.kind === 'debuff') {
      const stage = defender.stages[e.stat] || 0;
      score += stage <= -4 ? -6 : 10 + (e.stages || 1) * 4;
    } else if (e.kind === 'status') {
      score += defender.status ? -22 : 22 + (1 - defender.hp / defender.maxHp) * 14;
    } else if (e.kind === 'cleanse') {
      score += attacker.status ? 26 : -12;
    }
  }
  return score;
}

export function chooseAiMove(attacker, defender, rng = Math.random) {
  const usable = attacker.moves.filter((m) => m.pp > 0);
  if (!usable.length) return null;
  let best = usable[0];
  let bestScore = -Infinity;
  for (const move of usable) {
    let score = 0;
    if (move.group === 'status') {
      score = statusMoveScore(attacker, defender, move) * 0.9;
      // Don't waste a turn on setup when the target is nearly dead and we can KO.
      const bestDamage = usable.filter((m) => m.power).map((m) => estimateDamage(attacker, defender, m));
      if (bestDamage.length && Math.max(...bestDamage) >= defender.hp && move.group === 'status') score -= 35;
    } else {
      const dmg = estimateDamage(attacker, defender, move);
      const pct = dmg / defender.hp;
      score = Math.min(120, pct * 100) * 0.95;
      if (dmg >= defender.hp) score += 70;
      score *= 0.72 + typeMultiplier(move.type, defender.type) * 0.34;
      score *= move.accuracy / 100;
      if (attacker.ability.key === 'typeDamage' && move.type === attacker.type) score *= 1.08;
    }
    score *= 0.86 + rng() * 0.28;
    if (score > bestScore) {
      bestScore = score;
      best = move;
    }
  }
  return best;
}

export function chooseAiSwitch(team, opponent) {
  const alive = team.filter((c) => !c.fainted);
  if (!alive.length) return null;
  let best = alive[0];
  let bestScore = -Infinity;
  for (const c of alive) {
    let score = 0;
    score += typeMultiplier(c.type, opponent.type) * 18;
    score += (1 / typeMultiplier(opponent.type, c.type)) * 8;
    score += c.hp / c.maxHp * 14;
    score += Math.random() * 4;
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }
  return best;
}

export function applyStageChange(creature, stat, stages) {
  const before = creature.stages[stat] || 0;
  creature.stages[stat] = Math.max(-6, Math.min(6, before + stages));
  return creature.stages[stat] - before;
}

export function hpRatio(creature) {
  return Math.max(0, creature.hp / creature.maxHp);
}

export function hpColor(ratio) {
  if (ratio > 0.5) return '#5ee08a';
  if (ratio > 0.22) return '#f5c451';
  return '#ff5d5d';
}
