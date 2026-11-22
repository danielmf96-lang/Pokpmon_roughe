export const TYPES = {
  ember: {
    key: 'ember',
    name: 'Ember',
    glyph: '✦',
    color: '#ff7a3d',
    deep: '#8c2b0a',
    soft: '#ffc08a',
    palette: {
      primary: '#d94a1e',
      secondary: '#ffb347',
      accent: '#ff4d2e',
      belly: '#ffd9a0',
      dark: '#3a1008',
      glow: '#ff8a3d',
      eye: '#ffe6b0',
    },
    nouns: ['Drake', 'Lynx', 'Hound', 'Imp', 'Salamander', 'Wisp'],
    syllables: [
      ['cin', 'pyr', 'scor', 'ash', 'ig', 'flar', 'vul', 'char', 'embr', 'cald'],
      ['der', 'rax', 'oth', 'wing', 'maw', 'on', 'ix', 'ark', 'elle', 'oth'],
    ],
    adjectives: ['Cinder', 'Ashen', 'Blazing', 'Scorched', 'Pyre', 'Solar', 'Molten', 'Charred'],
  },
  verdant: {
    key: 'verdant',
    name: 'Verdant',
    glyph: '❧',
    color: '#46e08a',
    deep: '#0b5a3a',
    soft: '#a9ffc9',
    palette: {
      primary: '#2f9e63',
      secondary: '#a3e635',
      accent: '#22c55e',
      belly: '#d9f99d',
      dark: '#0c2a1a',
      glow: '#7cffa0',
      eye: '#eaffd0',
    },
    nouns: ['Sprig', 'Stag', 'Bloom', 'Mantis', 'Tortoise', 'Wisp'],
    syllables: [
      ['ver', 'mos', 'thorn', 'syl', 'bram', 'fern', 'blos', 'sprig', 'lich', 'cora'],
      ['ant', 'oth', 'ling', 'orn', 'ix', 'ara', 'um', 'wyn', 'elle', 'ad'],
    ],
    adjectives: ['Verdant', 'Thorned', 'Blooming', 'Mossy', 'Sylvan', 'Bramble', 'Feral', 'Dewy'],
  },
  tide: {
    key: 'tide',
    name: 'Tide',
    glyph: '≈',
    color: '#38bdf8',
    deep: '#0b3d70',
    soft: '#a5f3fc',
    palette: {
      primary: '#1f7fc4',
      secondary: '#67e8f9',
      accent: '#22d3ee',
      belly: '#cffafe',
      dark: '#071d33',
      glow: '#67e8f9',
      eye: '#e0fbff',
    },
    nouns: ['Ray', 'Eel', 'Otter', 'Serpent', 'Crab', 'Wisp'],
    syllables: [
      ['ti', 'abys', 'rip', 'brine', 'coral', 'pelag', 'aqu', 'mar', 'flu', 'naut'],
      ['tide', 'thal', 'ix', 'ora', 'us', 'een', 'ash', 'urn', 'essa', 'on'],
    ],
    adjectives: ['Tidal', 'Abyssal', 'Riptide', 'Brine', 'Coral', 'Pelagic', 'Frost', 'Deep'],
  },
  volt: {
    key: 'volt',
    name: 'Volt',
    glyph: '⚡',
    color: '#facc15',
    deep: '#7a4d06',
    soft: '#fef08a',
    palette: {
      primary: '#d4a90a',
      secondary: '#fb923c',
      accent: '#fde047',
      belly: '#fff3b0',
      dark: '#2b1d06',
      glow: '#ffe94a',
      eye: '#fff8c4',
    },
    nouns: ['Hare', 'Jackal', 'Moth', 'Raptor', 'Ferret', 'Wisp'],
    syllables: [
      ['vol', 'arc', 'stat', 'galv', 'zap', 'thun', 'spar', 'jolt', 'volt', 'elec'],
      ['tix', 'ara', 'jak', 'orn', 'us', 'ine', 'oth', 'ux', 'elle', 'amp'],
    ],
    adjectives: ['Voltaic', 'Charged', 'Static', 'Galvanic', 'Storm', 'Arc', 'Crackling', 'Live'],
  },
  lumen: {
    key: 'lumen',
    name: 'Lumen',
    glyph: '✧',
    color: '#ffe08a',
    deep: '#7a5a12',
    soft: '#fff7d6',
    palette: {
      primary: '#e8c35a',
      secondary: '#fef3c7',
      accent: '#f59e0b',
      belly: '#fffbeb',
      dark: '#2b220a',
      glow: '#fff1a8',
      eye: '#ffffff',
    },
    nouns: ['Moth', 'Hart', 'Seraph', 'Fox', 'Dove', 'Wisp'],
    syllables: [
      ['lu', 'sol', 'aur', 'pris', 'halo', 'dawn', 'gild', 'sera', 'lumi', 'astra'],
      ['men', 'iel', 'ora', 'ix', 'ael', 'une', 'is', 'ara', 'elle', 'on'],
    ],
    adjectives: ['Radiant', 'Gilded', 'Dawn', 'Prism', 'Halo', 'Solar', 'Aurora', 'Lucent'],
  },
  umbra: {
    key: 'umbra',
    name: 'Umbra',
    glyph: '◈',
    color: '#a78bfa',
    deep: '#3b1d70',
    soft: '#ddd6fe',
    palette: {
      primary: '#5b3a9e',
      secondary: '#a78bfa',
      accent: '#8b5cf6',
      belly: '#c4b5fd',
      dark: '#120a26',
      glow: '#b794ff',
      eye: '#e9d5ff',
    },
    nouns: ['Shade', 'Cat', 'Raven', 'Serpent', 'Wolf', 'Wisp'],
    syllables: [
      ['um', 'noct', 'dusk', 'phan', 'neth', 'vail', 'mor', 'shad', 'ecl', 'gloam'],
      ['bra', 'oth', 'ix', 'urn', 'essa', 'on', 'weave', 'mire', 'elle', 'ux'],
    ],
    adjectives: ['Umbral', 'Hollow', 'Dusk', 'Phantom', 'Nether', 'Veiled', 'Midnight', 'Eclipsed'],
  },
};

// Strong-against ring: ember > verdant > tide > volt > lumen > umbra > ember
export const TYPE_RING = ['ember', 'verdant', 'tide', 'volt', 'lumen', 'umbra'];
export const TYPE_ORDER = ['ember', 'tide', 'verdant', 'volt', 'umbra', 'lumen'];

export function typeMultiplier(moveType, defenderType) {
  const i = TYPE_RING.indexOf(moveType);
  const j = TYPE_RING.indexOf(defenderType);
  if (i < 0 || j < 0) return 1;
  if ((i + 1) % 6 === j) return 1.6;
  if ((j + 1) % 6 === i) return 0.625;
  return 1;
}

export function typeRelation(type) {
  const i = TYPE_RING.indexOf(type);
  return {
    strong: TYPE_RING[(i + 1) % 6],
    weak: TYPE_RING[(i + 5) % 6],
  };
}

export const GROUPS = {
  physical: {
    key: 'physical',
    label: 'Physical',
    icon: '⚔',
    color: '#ff9a62',
    blurb: 'Claws, fangs and momentum. Scales with Attack and Defense.',
  },
  special: {
    key: 'special',
    label: 'Special',
    icon: '✹',
    color: '#b98cff',
    blurb: 'Elemental force. Scales with Spirit and Ward.',
  },
  status: {
    key: 'status',
    label: 'Status',
    icon: '◉',
    color: '#56e0c0',
    blurb: 'Buffs, barriers and afflictions. No direct damage.',
  },
};

export const GROUP_ORDER = ['physical', 'special', 'status'];

export const STATUS_INFO = {
  burn: { name: 'Burn', icon: '🔥', color: '#ff7a3d', desc: 'Loses 1/16 max HP each round. Physical damage is halved.' },
  poison: { name: 'Poison', icon: '☠', color: '#b58cff', desc: 'Loses 1/10 max HP each round.' },
  chill: { name: 'Chill', icon: '❄', color: '#7dd3fc', desc: 'Speed is halved. 20% chance to lose the action.' },
  regen: { name: 'Regen', icon: '✚', color: '#6ee7a8', desc: 'Restores 1/8 max HP each round.' },
};

export const STAT_LABELS = {
  hp: 'HP',
  atk: 'Attack',
  def: 'Defense',
  spa: 'Spirit',
  spd: 'Ward',
  spe: 'Speed',
};

export const ROOM_THEMES = {
  ember: {
    type: 'ember',
    names: [
      ['Cinder', 'Vault'], ['Molten', 'Reliquary'], ['Ashen', 'Colosseum'], ['Pyre', 'Sanctum'],
    ],
    bg: '#150806', fog: '#2a0d08', stone: '#2c1a16', stoneDark: '#1a0d0b',
    accent: '#ff7a3d', glow: '#ffb15c', secondary: '#ffcf9a',
    sky: '#1a0805', light: '#ffc38a', lightIntensity: 2.4,
  },
  verdant: {
    type: 'verdant',
    names: [
      ['Verdant', 'Reliquary'], ['Moss', 'Arena'], ['Thorn', 'Colosseum'], ['Sylvan', 'Vault'],
    ],
    bg: '#04120c', fog: '#0a2418', stone: '#16261e', stoneDark: '#0b1712',
    accent: '#46e08a', glow: '#9bffbe', secondary: '#d6ff8a',
    sky: '#03140c', light: '#c8ffd9', lightIntensity: 2.2,
  },
  tide: {
    type: 'tide',
    names: [
      ['Abyssal', 'Sanctum'], ['Tidal', 'Vault'], ['Brine', 'Colosseum'], ['Coral', 'Reliquary'],
    ],
    bg: '#030c17', fog: '#071d33', stone: '#122232', stoneDark: '#091420',
    accent: '#38bdf8', glow: '#7dd3fc', secondary: '#a5f3fc',
    sky: '#020b16', light: '#bae6fd', lightIntensity: 2.3,
  },
  volt: {
    type: 'volt',
    names: [
      ['Voltaic', 'Spire'], ['Storm', 'Arena'], ['Arc', 'Sanctum'], ['Static', 'Colosseum'],
    ],
    bg: '#100d03', fog: '#241d06', stone: '#2a2414', stoneDark: '#171306',
    accent: '#facc15', glow: '#fde047', secondary: '#fb923c',
    sky: '#120e03', light: '#fff3a8', lightIntensity: 2.5,
  },
  lumen: {
    type: 'lumen',
    names: [
      ['Aurora', 'Basilica'], ['Gilded', 'Arena'], ['Prism', 'Sanctum'], ['Dawn', 'Reliquary'],
    ],
    bg: '#0d0914', fog: '#241a33', stone: '#2a2133', stoneDark: '#171120',
    accent: '#ffe08a', glow: '#fff1a8', secondary: '#c084fc',
    sky: '#100a18', light: '#fff4cf', lightIntensity: 2.6,
  },
  umbra: {
    type: 'umbra',
    names: [
      ['Umbral', 'Crypt'], ['Eclipsed', 'Colosseum'], ['Nether', 'Vault'], ['Veiled', 'Sanctum'],
    ],
    bg: '#070412', fog: '#140c2a', stone: '#1c1530', stoneDark: '#100a1e',
    accent: '#a78bfa', glow: '#c4b5fd', secondary: '#7c3aed',
    sky: '#06030f', light: '#d8c8ff', lightIntensity: 2.2,
  },
};

export const ROOM_ADJECTIVES = ['Forgotten', 'Shattered', 'Radiant', 'Whispering', 'Eternal', 'Hollow', 'Gilded', 'Stormwrought'];
export const ROOM_NOUNS = ['Arena', 'Sanctum', 'Reliquary', 'Vault', 'Colosseum', 'Spire', 'Crypt', 'Basilica'];

export const ARCHETYPES = {
  striker: { label: 'Striker', hp: 0.82, atk: 1.28, def: 0.9, spa: 0.72, spd: 0.86, spe: 1.12 },
  caster: { label: 'Caster', hp: 0.82, atk: 0.7, def: 0.85, spa: 1.32, spd: 1.12, spe: 0.95 },
  guardian: { label: 'Guardian', hp: 1.32, atk: 0.95, def: 1.28, spa: 0.86, spd: 1.2, spe: 0.62 },
  trickster: { label: 'Trickster', hp: 0.9, atk: 0.92, def: 0.8, spa: 0.96, spd: 0.92, spe: 1.35 },
  balanced: { label: 'Balanced', hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 },
};

export const ABILITIES = [
  { key: 'typeDamage', name: 'Elemental Affinity', desc: '+20% damage with {type} moves.', weight: 3 },
  { key: 'heal', name: 'Rift Bloom', desc: 'Restores 6% max HP at the end of each round.', weight: 2 },
  { key: 'reduce', name: 'Stonehide', desc: 'Takes 12% less damage from all attacks.', weight: 2 },
  { key: 'crit', name: 'Keen Edge', desc: '+10% critical hit chance.', weight: 2 },
  { key: 'speed', name: 'Swiftfoot', desc: '+15% Speed.', weight: 2 },
  { key: 'barrierStart', name: 'Aegis Core', desc: 'Enters battle with a barrier worth 18% max HP.', weight: 2 },
  { key: 'statusCure', name: 'Purity', desc: '30% chance to cure its status at the end of each round.', weight: 1 },
  { key: 'lowHpDamage', name: 'Predator', desc: '+25% damage against targets below half HP.', weight: 2 },
  { key: 'boostSpeed', name: 'Momentum', desc: 'Stat-raising moves also raise Speed by 1 stage.', weight: 1 },
  { key: 'lifesteal', name: 'Siphon', desc: 'Heals for 15% of damage dealt.', weight: 1 },
];
