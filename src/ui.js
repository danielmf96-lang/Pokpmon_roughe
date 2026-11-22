import { RNG } from './rng.js';
import { GROUPS, GROUP_ORDER, STATUS_INFO, TYPES, TYPE_ORDER, typeRelation } from './data.js';
import { hpColor, hpRatio } from './battle.js';

const artCache = new Map();

function hexA(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function creatureArt(creature) {
  if (artCache.has(creature.id)) return artCache.get(creature.id);
  const rng = new RNG(creature.seed + ':sigil');
  const c = document.createElement('canvas');
  c.width = 720;
  c.height = 300;
  const g = c.getContext('2d');
  const type = TYPES[creature.type];
  const cx = 470;
  const cy = 150;

  const bg = g.createLinearGradient(0, 0, 720, 300);
  bg.addColorStop(0, '#05070c');
  bg.addColorStop(0.55, type.palette.dark);
  bg.addColorStop(1, '#05070c');
  g.fillStyle = bg;
  g.fillRect(0, 0, 720, 300);

  const glow = g.createRadialGradient(cx, cy, 4, cx, cy, 300);
  glow.addColorStop(0, hexA(type.color, 0.55));
  glow.addColorStop(0.28, hexA(type.color, 0.16));
  glow.addColorStop(0.7, hexA(type.deep, 0.08));
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = glow;
  g.fillRect(0, 0, 720, 300);

  // Sweeping rays
  g.save();
  g.translate(cx, cy);
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + rng.float(-0.04, 0.04);
    const spread = 0.025 + rng.float(0, 0.04);
    g.beginPath();
    g.moveTo(0, 0);
    g.arc(0, 0, 340, a, a + spread);
    g.closePath();
    g.fillStyle = hexA(i % 3 === 0 ? type.soft : type.color, rng.float(0.015, 0.055));
    g.fill();
  }
  g.restore();

  // Concentric rings
  for (let i = 0; i < 5; i++) {
    g.strokeStyle = hexA(i % 2 ? type.color : type.soft, 0.28 - i * 0.035);
    g.lineWidth = i === 0 ? 2 : 1;
    g.beginPath();
    g.arc(cx, cy, 44 + i * 24, 0, Math.PI * 2);
    g.stroke();
  }

  // Procedural polygon
  const sides = 3 + (creature.seed % 5);
  const radius = 78 + (creature.seed % 26);
  g.strokeStyle = hexA(type.soft, 0.9);
  g.lineWidth = 2.2;
  g.beginPath();
  for (let i = 0; i <= sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2 + (creature.seed % 10) * 0.02;
    const x = cx + Math.cos(a) * radius;
    const y = cy + Math.sin(a) * radius;
    if (i === 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.stroke();

  g.strokeStyle = hexA(type.color, 0.55);
  g.lineWidth = 1.2;
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 2) / sides) * Math.PI * 2 - Math.PI / 2;
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
    g.lineTo(cx + Math.cos(a2) * radius, cy + Math.sin(a2) * radius);
    g.stroke();
  }

  // Type glyph
  g.save();
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = '600 76px Georgia, serif';
  g.fillStyle = hexA(type.soft, 0.92);
  g.shadowColor = type.color;
  g.shadowBlur = 28;
  g.fillText(type.glyph, cx, cy + 2);
  g.restore();

  // Outer rune ticks
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    const r = 178 + (i % 3) * 8;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    g.save();
    g.translate(x, y);
    g.rotate(a);
    g.strokeStyle = hexA(type.color, rng.float(0.2, 0.55));
    g.lineWidth = 1.3;
    g.beginPath();
    if (i % 3 === 0) {
      g.moveTo(-4, -7);
      g.lineTo(4, 0);
      g.lineTo(-4, 7);
    } else {
      g.moveTo(-5, 0);
      g.lineTo(5, 0);
    }
    g.stroke();
    g.restore();
  }

  // Star specks
  for (let i = 0; i < 46; i++) {
    g.fillStyle = hexA(i % 4 ? type.soft : '#ffffff', rng.float(0.08, 0.55));
    const x = rng.float(20, 700);
    const y = rng.float(10, 290);
    const r = rng.float(0.4, 1.8);
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }

  // Left-edge name plate gradient
  const shade = g.createLinearGradient(0, 0, 420, 0);
  shade.addColorStop(0, 'rgba(5,7,12,0.85)');
  shade.addColorStop(1, 'rgba(5,7,12,0)');
  g.fillStyle = shade;
  g.fillRect(0, 0, 420, 300);

  const url = c.toDataURL('image/jpeg', 0.82);
  artCache.set(creature.id, url);
  return url;
}

function statBar(label, value, max, color) {
  const pct = Math.max(4, Math.min(100, (value / max) * 100));
  return `<div class="tc-stat"><span>${label}</span><div class="tc-bar"><i style="width:${pct}%;--tc:${color}"></i></div><b>${value}</b></div>`;
}

export function teamCardMarkup(creature, index) {
  const type = TYPES[creature.type];
  const movesByGroup = GROUP_ORDER.map((group) => {
    const moves = creature.moves.filter((m) => m.group === group);
    return `<div class="tc-move-row"><span class="dot ${group}"></span><span>${moves.map((m) => m.name).join(' · ')}</span></div>`;
  }).join('');

  return `
    <button class="team-card" data-index="${index}" style="--tc:${type.color}" aria-label="Select ${creature.name}">
      <div class="tc-art">
        <img src="${creatureArt(creature)}" alt="" />
        <span class="tc-type" style="--tc:${type.color}">${type.name}</span>
        <span class="tc-arch">${creature.archetypeLabel}</span>
      </div>
      <div class="tc-body">
        <div class="tc-title"><h3>${creature.name}</h3><span>LV. 50</span></div>
        <div class="tc-species">${creature.species}</div>
        <div class="tc-ability" style="--tc:${type.color}">
          <span>${creature.ability.name}</span>
          <p>${creature.ability.desc}</p>
        </div>
        <div class="tc-stats">
          ${statBar('HP', creature.maxHp, 200, type.color)}
          ${statBar('ATK', creature.stats.atk, 175, type.color)}
          ${statBar('SPA', creature.stats.spa, 175, type.color)}
          ${statBar('SPE', creature.stats.spe, 175, type.color)}
        </div>
        <div class="tc-moves">${movesByGroup}</div>
      </div>
    </button>`;
}

export function panelMarkup(creature, team, activeIndex, isEnemy) {
  const type = TYPES[creature.type];
  const ratio = hpRatio(creature);
  const chips = [];
  if (creature.status) {
    const s = STATUS_INFO[creature.status];
    chips.push(`<span class="chip status" style="--c:${s.color}">${s.icon} ${s.name}</span>`);
  }
  if (creature.barrier > 0) chips.push(`<span class="chip barrier">◈ ${Math.round(creature.barrier)}</span>`);
  for (const stat of ['atk', 'def', 'spa', 'spd', 'spe']) {
    const stage = creature.stages[stat] || 0;
    if (stage !== 0) {
      const arrow = stage > 0 ? '▲' : '▼';
      chips.push(`<span class="chip stage">${stat.toUpperCase()} ${arrow}${Math.abs(stage)}</span>`);
    }
  }
  const pips = team
    .map((c, i) => `<i class="${c.fainted ? 'fainted' : 'alive'}${i === activeIndex ? ' current' : ''}"></i>`)
    .join('');
  const hpPercent = Math.max(0, ratio * 100);
  return `
    <div class="combatant-head">
      <span class="type-chip" style="--t:${type.color}">${type.name}</span>
      <span class="combatant-name">${creature.name}</span>
      <span class="level">LV. 50${isEnemy ? ' · WARDEN' : ''}</span>
    </div>
    <div class="hp-track">
      <div class="hp-ghost" style="width:${hpPercent}%"></div>
      <div class="hp-fill" style="width:${hpPercent}%;--hp:${hpColor(ratio)}"></div>
    </div>
    <div class="hp-meta">
      <span class="hp-text">${Math.max(0, Math.ceil(creature.hp))} / ${creature.maxHp}</span>
      <span class="status-chips">${chips.slice(0, 4).join('')}</span>
    </div>
    <div class="ability-line" title="${creature.ability.desc}">${creature.ability.name} — ${creature.ability.desc}</div>
    <div class="team-pips">${pips}</div>`;
}

export function moveCardMarkup(move, index, disabled) {
  const type = TYPES[move.type];
  const power = move.group === 'status' ? 'STATUS' : `PWR ${move.power}`;
  return `
    <button class="move-card ${move.group}" data-move="${index}" style="--t:${type.color}" ${disabled ? 'disabled' : ''}>
      <div class="mc-top">
        <span class="type-pill" style="--t:${type.color}">${type.name}</span>
        <span class="mc-pp">PP ${move.pp}/${move.maxPp}</span>
      </div>
      <div class="mc-name">${move.name}</div>
      <div class="mc-meta">
        <span class="power">${power}</span>
        <span>ACC ${move.accuracy}</span>
        <span>${move.priority > 0 ? '+PRIORITY' : move.flavor}</span>
      </div>
      <p class="mc-desc">${move.desc}</p>
    </button>`;
}

export function switchOptionMarkup(creature, index) {
  const type = TYPES[creature.type];
  const ratio = hpRatio(creature);
  return `
    <button class="switch-option" data-index="${index}" style="--t:${type.color};--hp:${hpColor(ratio)}">
      <div class="so-top">
        <span class="so-name">${creature.name}</span>
        <span class="so-type">${type.name}</span>
      </div>
      <div class="so-species">${creature.species} · ${creature.archetypeLabel}</div>
      <div class="so-hp"><i style="width:${ratio * 100}%"></i></div>
      <div class="so-meta"><span>${Math.ceil(creature.hp)} / ${creature.maxHp} HP</span><span>${creature.status ? STATUS_INFO[creature.status].name : 'READY'}</span></div>
      <div class="so-ability">${creature.ability.name} — ${creature.ability.desc}</div>
    </button>`;
}

export function codexMarkup(run) {
  const typeRows = TYPE_ORDER.map((key) => {
    const t = TYPES[key];
    const rel = typeRelation(key);
    return `<div class="type-row" style="--c:${t.color}">
      <b>${t.glyph} ${t.name}</b>
      <span>strong vs <em>${TYPES[rel.strong].name}</em> · weak vs <s>${TYPES[rel.weak].name}</s></span>
    </div>`;
  }).join('');

  const roster = run
    ? run.playerTeam.map((c) => {
        const type = TYPES[c.type];
        const moves = GROUP_ORDER.map((group) => {
          const list = c.moves.filter((m) => m.group === group).map((m) => m.name).join(' · ');
          return `<b style="color:${GROUPS[group].color}">${GROUPS[group].label}</b> ${list}`;
        }).join('<br>');
        return `<div class="roster-item" style="--t:${type.color}">
          <div class="ri-top"><b>${c.name}</b><span>${type.name} · ${c.archetypeLabel}</span></div>
          <div class="ri-moves">${moves}</div>
        </div>`;
      }).join('')
    : '<p>Enter a seed to forge a trio and their full move sets.</p>';

  return `
    <div class="codex-section">
      <h4>The Type Ring</h4>
      <p>Six elements form a closed ring. Each type deals 1.6× to the next type and 0.625× to the one before it. Same-type moves are neutral.</p>
      <div class="type-wheel">${typeRows}</div>
      <h4 style="margin-top:16px">Afflictions</h4>
      ${Object.values(STATUS_INFO).map((s) => `<p style="margin-bottom:5px"><b style="color:${s.color}">${s.icon} ${s.name}</b> — ${s.desc}</p>`).join('')}
    </div>
    <div class="codex-section">
      <h4>How to Duel</h4>
      <div class="controls-grid">
        <b>1 / 2</b><span>Use the first or second move in the selected group</span>
        <b>Q / E</b><span>Cycle Physical, Special and Status move groups</span>
        <b>B</b><span>Open the swap menu (costs your action)</span>
        <b>C</b><span>Open this codex</span>
        <b>M</b><span>Toggle sound</span>
      </div>
      <p>Physical moves scale with Attack and Defense. Special moves scale with Spirit and Ward. Status moves apply buffs, barriers, healing or afflictions. A creature may only carry one affliction at a time.</p>
      <p>Defeat all three of the Warden's creatures to clear the rift. Fainted creatures stay down until the run ends.</p>
      <h4 style="margin-top:16px">Your Trio</h4>
      <div class="roster-list">${roster}</div>
    </div>`;
}
