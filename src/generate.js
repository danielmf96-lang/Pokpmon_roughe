import {
  ABILITIES, ARCHETYPES, ROOM_ADJECTIVES, ROOM_NOUNS, ROOM_THEMES, STATUS_INFO,
  TYPES, TYPE_ORDER, GROUP_ORDER,
} from './data.js';
import { RNG } from './rng.js';

const BODY_BY_TYPE = {
  ember: [['quadruped', 4], ['biped', 3], ['serpent', 1]],
  verdant: [['quadruped', 4], ['insect', 2], ['biped', 2]],
  tide: [['serpent', 4], ['floater', 2], ['quadruped', 2]],
  volt: [['biped', 4], ['insect', 3], ['quadruped', 1]],
  lumen: [['floater', 4], ['serpent', 2], ['quadruped', 1]],
  umbra: [['floater', 3], ['biped', 3], ['serpent', 2]],
};

const ABILITY_TYPE_NAMES = {
  ember: 'Cinderheart',
  verdant: 'Photosynth',
  tide: 'Tidecaller',
  volt: 'Overcharge',
  lumen: 'Radiant Core',
  umbra: 'Voidtouch',
};

const STATUS_FOR_TYPE = {
  ember: 'burn',
  verdant: 'poison',
  tide: 'chill',
  volt: 'chill',
  lumen: 'burn',
  umbra: 'poison',
};

const MOVE_WORDS = {
  physical: {
    ember: ['Fang', 'Claw', 'Lash', 'Strike', 'Rush', 'Rend'],
    verdant: ['Vine', 'Thorn', 'Ram', 'Slash', 'Lash', 'Gore'],
    tide: ['Jet', 'Crash', 'Fang', 'Tail', 'Slam', 'Riptide'],
    volt: ['Jolt', 'Kick', 'Bolt', 'Rush', 'Slam', 'Spark'],
    lumen: ['Gore', 'Lance', 'Wing', 'Slash', 'Dive', 'Glimmer'],
    umbra: ['Grasp', 'Fang', 'Rend', 'Shade', 'Claw', 'Lunge'],
  },
  special: {
    ember: ['Burst', 'Storm', 'Nova', 'Wave', 'Bloom', 'Flare'],
    verdant: ['Pulse', 'Bloom', 'Storm', 'Spore', 'Beam', 'Surge'],
    tide: ['Surge', 'Beam', 'Tide', 'Torrent', 'Wave', 'Geyser'],
    volt: ['Bolt', 'Arc', 'Storm', 'Discharge', 'Cascade', 'Spark'],
    lumen: ['Beam', 'Flare', 'Hymn', 'Lance', 'Nova', 'Prism'],
    umbra: ['Rift', 'Echo', 'Hex', 'Veil', 'Pulse', 'Grasp'],
  },
  status: {
    ember: ['Aegis', 'Chant', 'Ember', 'Focus', 'Ward', 'Hymn'],
    verdant: ['Aegis', 'Bloom', 'Chant', 'Root', 'Ward', 'Spore'],
    tide: ['Aegis', 'Veil', 'Chant', 'Focus', 'Ward', 'Tide'],
    volt: ['Aegis', 'Charge', 'Focus', 'Field', 'Ward', 'Arc'],
    lumen: ['Aegis', 'Hymn', 'Blessing', 'Focus', 'Ward', 'Halo'],
    umbra: ['Veil', 'Hex', 'Trance', 'Ward', 'Chant', 'Aegis'],
  },
};

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function statBlock(base) {
  const maxHp = Math.floor(((2 * base.hp + 31) * 50) / 100 + 50 + 10);
  const out = { maxHp };
  for (const key of ['atk', 'def', 'spa', 'spd', 'spe']) {
    out[key] = Math.floor(((2 * base[key] + 31) * 50) / 100 + 5);
  }
  return out;
}

function makeAbility(rng, type) {
  const entry = rng.weighted(ABILITIES.map((a) => [a, a.weight]));
  const name = entry.key === 'typeDamage' ? ABILITY_TYPE_NAMES[type] : entry.name;
  return {
    ...entry,
    name,
    desc: entry.desc.replace('{type}', TYPES[type].name),
  };
}

function makeMove(rng, creatureType, group, index, usedNames) {
  const moveType = rng.chance(0.72) ? creatureType : rng.pick(TYPE_ORDER.filter((t) => t !== creatureType));
  const typeData = TYPES[moveType];
  const adjectives = typeData.adjectives;
  const nouns = MOVE_WORDS[group][moveType];
  let name = '';
  for (let attempt = 0; attempt < 24; attempt++) {
    const adj = rng.pick(adjectives);
    const noun = rng.pick(nouns);
    name = rng.chance(0.35) ? `${adj}${noun.toLowerCase()}` : `${adj} ${noun}`;
    if (!usedNames.has(name)) break;
  }
  if (usedNames.has(name)) name = `${name} ${['I', 'II', 'III'][index] || ''}`.trim();
  usedNames.add(name);

  const arche = creatureType === moveType ? 1.08 : 1;

  if (group === 'status') {
    const effects = [];
    const statusKind = STATUS_FOR_TYPE[moveType];
    const primary = rng.weighted([
      ['buff', 30],
      ['inflict', 20],
      ['barrier', 15],
      ['heal', 15],
      ['debuff', 15],
      ['cleanse', 5],
    ]);
    const usedStats = new Set();
    const addBuff = () => {
      const stat = rng.pick(['atk', 'spa', 'def', 'spd', 'spe'].filter((s) => !usedStats.has(s)));
      if (!stat) return;
      usedStats.add(stat);
      effects.push({ kind: 'buff', target: 'self', stat, stages: rng.chance(0.24) ? 2 : 1 });
    };
    const addDebuff = () => {
      const stat = rng.pick(['atk', 'spa', 'def', 'spd', 'spe'].filter((s) => !usedStats.has(s)));
      if (!stat) return;
      usedStats.add(stat);
      effects.push({ kind: 'debuff', target: 'foe', stat, stages: rng.chance(0.2) ? 2 : 1 });
    };
    const addInflict = () => effects.push({ kind: 'status', target: 'foe', status: statusKind, chance: rng.chance(0.4) ? 1 : rng.float(0.72, 0.92) });

    if (primary === 'buff') addBuff();
    else if (primary === 'debuff') addDebuff();
    else if (primary === 'inflict') addInflict();
    else if (primary === 'heal') effects.push({ kind: 'heal', target: 'self', amount: rng.float(0.26, 0.42) });
    else if (primary === 'barrier') effects.push({ kind: 'barrier', target: 'self', amount: rng.float(0.2, 0.34) });
    else effects.push({ kind: 'cleanse', target: 'self' });

    if (rng.chance(0.46)) {
      const extra = rng.pick(['buff', 'debuff', 'inflict', 'cleanse']);
      if (extra === 'buff') addBuff();
      else if (extra === 'debuff') addDebuff();
      else if (extra === 'inflict' && !effects.some((e) => e.kind === 'status')) addInflict();
      else if (extra === 'cleanse' && !effects.some((e) => e.kind === 'cleanse')) effects.push({ kind: 'cleanse', target: 'self' });
    }

    return {
      name,
      group,
      type: moveType,
      power: 0,
      accuracy: effects.some((e) => e.kind === 'status') && rng.chance(0.35) ? 90 : 100,
      maxPp: rng.int(9, 15),
      pp: 0,
      priority: effects.some((e) => e.kind === 'heal' || e.kind === 'barrier') ? 1 : 0,
      effects,
      desc: describeEffects(effects),
      flavor: 'Status',
      id: `${group}-${index}-${moveType}`,
    };
  }

  let power = 48 + rng.float(0, 56);
  const arch = ARCHETYPES[creatureType] || ARCHETYPES.balanced;
  if (group === 'physical') power *= 0.9 + arch.atk * 0.12;
  else power *= 0.9 + arch.spa * 0.12;
  power = Math.round(clamp(power * arche, 42, 124));
  const accuracy = Math.round(clamp(100 - Math.max(0, power - 55) * 0.32 + rng.float(-4, 4), 78, 100));
  const maxPp = Math.round(clamp(14 - (power - 45) / 12 + rng.int(-1, 1), 5, 16));
  const secondary = [];
  if (rng.chance(0.34)) {
    if (rng.chance(0.55)) {
      secondary.push({
        kind: 'debuff', target: 'foe', chance: 0.28,
        stat: rng.pick(['def', 'spd', 'spe', 'atk', 'spa']), stages: 1,
      });
    } else {
      secondary.push({ kind: 'status', target: 'foe', status: STATUS_FOR_TYPE[moveType], chance: 0.18 });
    }
  }

  return {
    name,
    group,
    type: moveType,
    power,
    accuracy,
    maxPp,
    pp: 0,
    priority: 0,
    effects: secondary,
    desc: secondary.length ? `A ${TYPES[moveType].name.toLowerCase()} ${group} attack. ${describeEffects(secondary, true)}` : `A ${TYPES[moveType].name.toLowerCase()} ${group} attack with no extra effect.`,
    flavor: group === 'physical' ? 'Contact' : 'Ranged',
    id: `${group}-${index}-${moveType}`,
  };
}

export function describeEffects(effects, chanceOnly = false) {
  const statName = (s) => ({ atk: 'Attack', def: 'Defense', spa: 'Spirit', spd: 'Ward', spe: 'Speed' }[s]);
  const parts = effects.map((e) => {
    const prefix = chanceOnly || (e.chance !== undefined && e.chance < 1) ? 'May ' : '';
    if (e.kind === 'buff') return `${prefix}raise the user's ${statName(e.stat)} by ${e.stages} stage${e.stages > 1 ? 's' : ''}`;
    if (e.kind === 'debuff') return `${prefix}lower the target's ${statName(e.stat)} by ${e.stages} stage${e.stages > 1 ? 's' : ''}`;
    if (e.kind === 'heal') return `restore ${Math.round(e.amount * 100)}% of the user's max HP`;
    if (e.kind === 'barrier') return `grant a barrier absorbing ${Math.round(e.amount * 100)}% max HP`;
    if (e.kind === 'status') return `${prefix}${STATUS_INFO[e.status].name.toLowerCase()} the target`;
    if (e.kind === 'cleanse') return `cure the user's status`;
    return '';
  }).filter(Boolean);
  let text = parts.join(' and ');
  return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

function makeCreature(rng, type, usedNames, side, index) {
  const typeData = TYPES[type];
  const archetypeKey = rng.weighted([
    ['striker', 22], ['caster', 22], ['guardian', 20], ['trickster', 18], ['balanced', 18],
  ]);
  const arch = ARCHETYPES[archetypeKey];
  const body = rng.weighted(BODY_BY_TYPE[type]);

  let name = '';
  for (let attempt = 0; attempt < 30; attempt++) {
    const [a, b] = typeData.syllables;
    name = cap(rng.pick(a)) + rng.pick(b);
    if (!usedNames.has(name)) break;
  }
  if (usedNames.has(name)) name = name + ['a', 'or', 'ix', 'en'][index % 4];
  usedNames.add(name);

  const base = {};
  for (const key of ['hp', 'atk', 'def', 'spa', 'spd', 'spe']) {
    const raw = key === 'hp' ? 62 + rng.float(0, 52) : 54 + rng.float(0, 68);
    base[key] = Math.round(clamp(raw * arch[key] * rng.float(0.95, 1.08), 38, 156));
  }
  const stats = statBlock(base);
  const ability = makeAbility(rng, type);
  if (ability.key === 'speed') stats.spe = Math.round(stats.spe * 1.15);
  if (ability.key === 'barrierStart') stats.startBarrier = Math.round(stats.maxHp * 0.18);

  const usedMoveNames = new Set();
  const moves = [];
  for (const group of GROUP_ORDER) {
    for (let i = 0; i < 2; i++) {
      const move = makeMove(rng, type, group, i, usedMoveNames);
      move.pp = move.maxPp;
      moves.push(move);
    }
  }

  return {
    id: `${side}-${index}-${rng.int(1000, 9999)}`,
    side,
    index,
    name,
    species: `${rng.pick(typeData.adjectives)} ${rng.pick(typeData.nouns)}`,
    type,
    archetype: archetypeKey,
    archetypeLabel: arch.label,
    body,
    level: 50,
    stats,
    base,
    hp: stats.maxHp,
    maxHp: stats.maxHp,
    ability,
    moves,
    status: null,
    barrier: stats.startBarrier || 0,
    stages: { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    fainted: false,
    scale: rng.float(0.88, 1.12),
    seed: rng.int(1, 999999),
    colors: typeData.palette,
  };
}

export function generateTeam(rng, side, count = 3, options = {}) {
  const types = rng.shuffle(TYPE_ORDER).slice(0, count);
  const usedNames = new Set();
  return types.map((type, i) => makeCreature(rng, type, usedNames, side, i));
}

export function generateRoom(rng) {
  const themeKey = rng.pick(Object.keys(ROOM_THEMES));
  const theme = ROOM_THEMES[themeKey];
  const [nameA, nameB] = rng.pick(theme.names);
  const useAdjective = rng.chance(0.35);
  const name = useAdjective
    ? `${rng.pick(ROOM_ADJECTIVES)} ${nameB}`
    : `${nameA} ${nameB}`;
  return {
    key: themeKey,
    theme,
    name,
    seed: rng.int(1, 999999),
    pillarCount: rng.pick([6, 8, 8, 10]),
    crystalCount: rng.int(8, 14),
    bannerCount: rng.pick([3, 4, 4, 5]),
    ringCount: rng.int(3, 5),
    motes: rng.int(90, 160),
    fogDensity: rng.float(0.015, 0.024),
    rotation: rng.float(0, Math.PI * 2),
  };
}

export function generateWarden(rng) {
  const first = rng.pick(['Veyra', 'Orin', 'Sable', 'Kael', 'Nyx', 'Aurel', 'Morrow', 'Thane', 'Iri', 'Voss']);
  const titles = ['Rift Warden', 'Arena Sovereign', 'Keeper of the Gate', 'Champion of the Rift', 'The Unbroken'];
  return { name: `Warden ${first}`, title: rng.pick(titles) };
}

export function generateRun(seed) {
  const rng = new RNG(seed);
  const room = generateRoom(rng.child('room'));
  const playerTeam = generateTeam(rng.child('player'), 'player', 3);
  const enemyTeam = generateTeam(rng.child('enemy'), 'enemy', 3);
  const warden = generateWarden(rng.child('warden'));
  return {
    seed,
    room,
    playerTeam,
    enemyTeam,
    warden,
    createdAt: Date.now(),
  };
}

export function generateShowcase(seed) {
  const rng = new RNG(seed + ':showcase');
  const type = rng.pick(TYPE_ORDER);
  const creature = makeCreature(rng, type, new Set(), 'showcase', 0);
  creature.scale = 1.22;
  return creature;
}

export function restoreTeam(team) {
  for (const c of team) {
    c.hp = c.maxHp;
    c.maxHp = c.stats.maxHp;
    c.status = null;
    c.barrier = c.stats.startBarrier || 0;
    c.stages = { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    c.fainted = false;
    for (const m of c.moves) m.pp = m.maxPp;
  }
}
