import * as THREE from 'three';
import { RNG } from './rng.js';

const S = {
  sphere: new THREE.SphereGeometry(1, 14, 10),
  sphereLow: new THREE.SphereGeometry(1, 10, 8),
  cone: new THREE.ConeGeometry(1, 1, 7),
  cone4: new THREE.ConeGeometry(1, 1, 4),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cylTaper: new THREE.CylinderGeometry(0.6, 1, 1, 7),
  capsule: new THREE.CapsuleGeometry(1, 1.4, 3, 8),
  octa: new THREE.OctahedronGeometry(1, 0),
  box: new THREE.BoxGeometry(1, 1, 1),
  torus: new THREE.TorusGeometry(1, 0.1, 6, 24),
  circle: new THREE.CircleGeometry(1, 24),
  plane: new THREE.PlaneGeometry(1, 1),
};

function makeWingGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.quadraticCurveTo(0.55, 0.5, 1.25, 0.34);
  shape.quadraticCurveTo(0.92, 0.02, 1.02, -0.36);
  shape.quadraticCurveTo(0.48, -0.2, 0, -0.1);
  shape.lineTo(0, 0);
  return new THREE.ShapeGeometry(shape);
}

function makeBoltGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0.05, 0.5);
  shape.lineTo(-0.16, 0.08);
  shape.lineTo(0.02, 0.08);
  shape.lineTo(-0.08, -0.5);
  shape.lineTo(0.2, -0.04);
  shape.lineTo(0.02, -0.04);
  shape.lineTo(0.05, 0.5);
  return new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false });
}

S.wing = makeWingGeometry();
S.bolt = makeBoltGeometry();

let shadowTexture = null;
function getShadowTexture() {
  if (shadowTexture) return shadowTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 2, 64, 64, 62);
  grad.addColorStop(0, 'rgba(0,0,0,0.62)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0.25)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  shadowTexture = new THREE.CanvasTexture(c);
  return shadowTexture;
}

function makeMaterial(color, opts = {}) {
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.62,
    metalness: opts.metalness ?? 0.06,
    flatShading: opts.flatShading ?? true,
    side: opts.side ?? THREE.FrontSide,
    transparent: false,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
  });
  m.userData.baseEmissive = new THREE.Color(opts.emissive ?? 0x000000);
  m.userData.baseIntensity = opts.emissiveIntensity ?? 0;
  return m;
}

function part(ctx, geo, mat, parent, pos = [0, 0, 0], scale = [1, 1, 1], rot = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos[0], pos[1], pos[2]);
  mesh.scale.set(scale[0], scale[1], scale[2]);
  mesh.rotation.set(rot[0], rot[1], rot[2]);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  parent.add(mesh);
  return mesh;
}

function buildMaterials(colors) {
  return {
    primary: makeMaterial(colors.primary),
    secondary: makeMaterial(colors.secondary),
    accent: makeMaterial(colors.accent, { emissive: colors.accent, emissiveIntensity: 0.22, roughness: 0.4 }),
    belly: makeMaterial(colors.belly, { roughness: 0.8 }),
    dark: makeMaterial(colors.dark, { roughness: 0.75 }),
    glow: makeMaterial(colors.glow, { emissive: colors.glow, emissiveIntensity: 1.1, roughness: 0.3 }),
    eyeWhite: makeMaterial('#fffaf0', { flatShading: false, roughness: 0.35 }),
    pupil: makeMaterial('#0a0710', { flatShading: false, roughness: 0.3 }),
    wing: makeMaterial(colors.secondary, { side: THREE.DoubleSide, roughness: 0.7 }),
    wingAccent: makeMaterial(colors.accent, { side: THREE.DoubleSide, emissive: colors.accent, emissiveIntensity: 0.18 }),
  };
}

function addEyes(ctx, head, r = 0.42, opts = {}) {
  const { mats, type } = ctx;
  const eyeZ = r * 0.78;
  const eyeX = r * 0.42;
  const glowing = type === 'umbra' || type === 'volt';
  for (const side of [-1, 1]) {
    const eye = part(ctx, S.sphere, glowing ? mats.glow : mats.eyeWhite, head, [side * eyeX, r * 0.14, eyeZ], [0.105, 0.125, 0.08]);
    const pupil = part(ctx, S.sphere, glowing ? mats.dark : mats.pupil, head, [side * eyeX, r * 0.14, eyeZ + 0.055], [0.052, 0.075, 0.035]);
    if (!glowing) {
      part(ctx, S.sphere, mats.eyeWhite, head, [side * eyeX + 0.018, r * 0.19, eyeZ + 0.082], [0.018, 0.022, 0.012]);
    }
    ctx.parts.eyes.push(eye, pupil);
  }
  if (opts.brow) {
    for (const side of [-1, 1]) {
      part(ctx, S.box, mats.dark, head, [side * eyeX, r * 0.35, eyeZ + 0.015], [0.16, 0.035, 0.05], [0, 0, side * -0.25]);
    }
  }
}

function addSnout(ctx, head, r, opts = {}) {
  const { mats } = ctx;
  const snout = part(ctx, S.sphere, mats.secondary, head, [0, -r * 0.18, r * 0.82], [r * 0.55, r * 0.38, r * 0.5]);
  part(ctx, S.sphere, mats.dark, head, [0, -r * 0.3, r * 1.02], [r * 0.3, r * 0.12, r * 0.12]);
  if (opts.fangs) {
    for (const side of [-1, 1]) {
      part(ctx, S.cone, mats.eyeWhite, head, [side * r * 0.2, -r * 0.4, r * 1.0], [r * 0.05, r * 0.16, r * 0.05], [Math.PI, 0, 0]);
    }
  }
  if (opts.nose) {
    part(ctx, S.sphere, mats.dark, head, [0, -r * 0.06, r * 1.16], [r * 0.12, r * 0.08, r * 0.08]);
  }
  return snout;
}

function addHornPair(ctx, head, r, style) {
  const { mats } = ctx;
  for (const side of [-1, 1]) {
    if (style === 'antler') {
      const g = new THREE.Group();
      g.position.set(side * r * 0.38, r * 0.55, -r * 0.08);
      g.rotation.z = side * -0.5;
      g.rotation.x = -0.2;
      head.add(g);
      part(ctx, S.cylTaper, mats.secondary, g, [0, 0.18, 0], [0.035, 0.35, 0.035]);
      part(ctx, S.cylTaper, mats.secondary, g, [side * 0.09, 0.38, 0.02], [0.028, 0.22, 0.028], [0, 0, side * -0.5]);
      part(ctx, S.cylTaper, mats.secondary, g, [side * -0.03, 0.42, -0.06], [0.024, 0.18, 0.024], [0.35, 0, side * 0.2]);
    } else if (style === 'fin') {
      part(ctx, S.cone4, mats.accent, head, [side * r * 0.55, r * 0.25, -r * 0.15], [r * 0.22, r * 0.55, r * 0.06], [0.2, 0, side * -0.8]);
    } else if (style === 'crystal') {
      part(ctx, S.octa, mats.accent, head, [side * r * 0.38, r * 0.55, -r * 0.05], [r * 0.14, r * 0.3, r * 0.14], [0, 0, side * 0.2]);
    } else if (style === 'ear') {
      part(ctx, S.cone, mats.primary, head, [side * r * 0.42, r * 0.52, -r * 0.02], [r * 0.2, r * 0.4, r * 0.12], [0.1, 0, side * -0.3]);
      part(ctx, S.cone, mats.belly, head, [side * r * 0.42, r * 0.5, r * 0.03], [r * 0.1, r * 0.25, r * 0.06], [0.1, 0, side * -0.3]);
    } else {
      part(ctx, S.cone, mats.secondary, head, [side * r * 0.34, r * 0.58, -r * 0.08], [r * 0.13, r * 0.5, r * 0.13], [-0.25, 0, side * -0.32]);
    }
  }
}

function addCrest(ctx, head, r) {
  const { mats, type } = ctx;
  if (type === 'lumen') {
    part(ctx, S.torus, mats.glow, head, [0, r * 0.72, 0], [r * 0.62, r * 0.62, r * 0.5], [Math.PI / 2, 0, 0]);
    part(ctx, S.octa, mats.accent, head, [0, r * 0.1, r * 0.72], [r * 0.14, r * 0.24, r * 0.12], [0.2, 0, 0]);
  } else if (type === 'umbra') {
    part(ctx, S.cone, mats.secondary, head, [0, r * 0.52, -r * 0.12], [r * 0.38, r * 0.7, r * 0.28], [-0.5, 0, 0]);
    for (let i = 0; i < 2; i++) {
      part(ctx, S.sphere, mats.glow, head, [(i ? 1 : -1) * r * 0.8, r * 0.15, -r * 0.1], [0.045, 0.045, 0.045]);
    }
  } else if (type === 'tide') {
    part(ctx, S.cone4, mats.accent, head, [0, r * 0.62, -r * 0.05], [r * 0.1, r * 0.52, r * 0.34], [0.1, 0, 0]);
  } else if (type === 'verdant') {
    for (let i = 0; i < 3; i++) {
      const a = (i - 1) * 0.55;
      part(ctx, S.octa, mats.secondary, head, [Math.sin(a) * r * 0.45, r * 0.58, Math.cos(a) * r * 0.1 - r * 0.1], [r * 0.18, r * 0.34, r * 0.08], [0.25, 0, -a * 0.6]);
    }
  } else if (type === 'volt') {
    part(ctx, S.bolt, mats.glow, head, [0, r * 0.56, -r * 0.08], [r * 0.65, r * 0.65, r * 0.65], [0, 0, 0.25]);
  } else {
    part(ctx, S.cone, mats.accent, head, [0, r * 0.62, -r * 0.12], [r * 0.16, r * 0.42, r * 0.16], [-0.2, 0, 0]);
  }
}

function addSpots(ctx, body, dims) {
  const { mats, rng, colors } = ctx;
  const count = rng.int(2, 5);
  for (let i = 0; i < count; i++) {
    const side = rng.chance(0.5) ? 1 : -1;
    const y = rng.float(-dims.y * 0.45, dims.y * 0.55);
    const z = rng.float(-dims.z * 0.7, dims.z * 0.35);
    const x = side * dims.x * (0.7 + rng.float(0, 0.2));
    part(ctx, S.sphere, i % 3 === 0 ? mats.belly : mats.accent, body,
      [x, y, z], [dims.x * 0.18, dims.y * 0.14, dims.z * 0.12]);
  }
}

function addTail(ctx, anchor, opts = {}) {
  const { mats, type } = ctx;
  const group = new THREE.Group();
  group.position.copy(anchor);
  ctx.body.add(group);
  ctx.parts.tails.push(group);
  const segments = opts.segments ?? 4;
  let parent = group;
  for (let i = 0; i < segments; i++) {
    const g = new THREE.Group();
    g.position.set(0, i === 0 ? 0 : -0.02, i === 0 ? 0 : -0.24);
    g.rotation.x = opts.droop ?? 0.1;
    parent.add(g);
    const size = (1 - i / (segments + 1)) * (opts.width ?? 0.16);
    part(ctx, S.sphere, i % 2 ? mats.secondary : mats.primary, g, [0, 0, -0.12], [size, size * 0.9, 0.2]);
    parent = g;
  }
  if (type === 'ember') {
    part(ctx, S.cone, mats.glow, parent, [0, 0.03, -0.3], [0.14, 0.34, 0.14], [-Math.PI / 2, 0, 0]);
  } else if (type === 'tide') {
    part(ctx, S.cone4, mats.accent, parent, [0, 0.03, -0.28], [0.22, 0.5, 0.05], [-Math.PI / 2, 0, 0]);
  } else if (type === 'verdant') {
    part(ctx, S.octa, mats.secondary, parent, [0, 0.02, -0.3], [0.18, 0.3, 0.1], [0.4, 0, 0]);
  } else if (type === 'volt') {
    part(ctx, S.bolt, mats.glow, parent, [0, 0.04, -0.3], [0.5, 0.5, 0.5], [0, 0, 0.3]);
  } else if (type === 'umbra' || type === 'lumen') {
    part(ctx, S.sphere, mats.glow, parent, [0, 0.02, -0.3], [0.09, 0.09, 0.09]);
  }
  return group;
}

function addWings(ctx, y, z, scale = 1) {
  const { mats, type } = ctx;
  for (const side of [-1, 1]) {
    const group = new THREE.Group();
    group.position.set(side * 0.25, y, z);
    group.rotation.y = side * -0.75;
    group.rotation.z = side * 0.15;
    ctx.body.add(group);
    const mesh = part(ctx, S.wing, mats.wing, group, [0, 0, 0], [scale * side, scale, 1]);
    const mesh2 = part(ctx, S.wing, mats.wingAccent, group, [0.02 * side, -0.02, 0.02], [scale * side * 0.72, scale * 0.72, 1]);
    ctx.parts.wings.push({ group, baseZ: group.rotation.z, side, mesh, mesh2 });
  }
}

function buildBiped(ctx) {
  const { body, mats, rng } = ctx;
  const torsoW = rng.float(0.48, 0.58);
  const torsoH = rng.float(0.62, 0.76);
  const torsoD = rng.float(0.38, 0.46);
  part(ctx, S.sphere, mats.primary, body, [0, 1.18, 0], [torsoW, torsoH, torsoD]);
  part(ctx, S.sphere, mats.belly, body, [0, 1.08, torsoD * 0.72], [torsoW * 0.6, torsoH * 0.72, torsoD * 0.32]);
  addSpots(ctx, body, { x: torsoW, y: torsoH, z: torsoD });

  const headY = 1.18 + torsoH * 0.92;
  const headGroup = new THREE.Group();
  headGroup.position.set(0, headY, torsoD * 0.2);
  body.add(headGroup);
  ctx.parts.head = headGroup;
  const r = rng.float(0.38, 0.45);
  part(ctx, S.sphere, mats.primary, headGroup, [0, 0, 0], [r, r * 0.94, r * 0.9]);
  part(ctx, S.sphere, mats.secondary, headGroup, [0, -r * 0.32, r * 0.32], [r * 0.58, r * 0.36, r * 0.46]);
  addEyes(ctx, headGroup, r, { brow: true });
  addSnout(ctx, headGroup, r, { fangs: ctx.type === 'ember' || ctx.type === 'umbra', nose: true });
  addHornPair(ctx, headGroup, r, ctx.type === 'verdant' || ctx.type === 'lumen' ? 'antler' : ctx.type === 'tide' ? 'fin' : 'ear');
  addCrest(ctx, headGroup, r);
  ctx.headR = r;

  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * (torsoW * 0.94), 1.42, torsoD * 0.1);
    arm.rotation.z = side * 0.28;
    body.add(arm);
    part(ctx, S.capsule, mats.secondary, arm, [0, -0.24, 0], [0.095, 0.15, 0.095]);
    part(ctx, S.sphere, mats.primary, arm, [0, -0.46, 0.02], [0.13, 0.12, 0.13]);
    ctx.parts.arms.push({ group: arm, baseZ: arm.rotation.z, side });
  }

  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * torsoW * 0.48, 0.64, 0);
    body.add(leg);
    part(ctx, S.capsule, mats.secondary, leg, [0, -0.22, 0], [0.13, 0.18, 0.13]);
    part(ctx, S.sphere, mats.primary, leg, [0, -0.5, 0.1], [0.18, 0.11, 0.27]);
    ctx.parts.legs.push({ group: leg, side });
  }

  addTail(ctx, new THREE.Vector3(0, 0.95, -torsoD * 0.9), { segments: 4, width: 0.15, droop: 0.1 });
  if (ctx.type === 'lumen' || ctx.type === 'umbra' || (ctx.type === 'volt' && rng.chance(0.5))) {
    addWings(ctx, 1.48, -torsoD * 0.6, 0.95);
  }
  return { height: headY + r };
}

function buildQuadruped(ctx) {
  const { body, mats, rng } = ctx;
  const w = rng.float(0.5, 0.62);
  const h = rng.float(0.46, 0.56);
  const d = rng.float(0.9, 1.08);
  part(ctx, S.sphere, mats.primary, body, [0, 1.02, 0], [w, h, d]);
  part(ctx, S.sphere, mats.belly, body, [0, 0.86, 0.05], [w * 0.72, h * 0.55, d * 0.72]);
  addSpots(ctx, body, { x: w, y: h, z: d });

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.28, d * 0.78);
  body.add(headGroup);
  ctx.parts.head = headGroup;
  const r = rng.float(0.36, 0.44);
  part(ctx, S.sphere, mats.primary, headGroup, [0, 0, 0], [r, r * 0.92, r * 0.88]);
  addEyes(ctx, headGroup, r, { brow: true });
  addSnout(ctx, headGroup, r, { fangs: ctx.type === 'ember' || ctx.type === 'umbra', nose: true });
  addHornPair(ctx, headGroup, r, ctx.type === 'verdant' || ctx.type === 'lumen' ? 'antler' : ctx.type === 'tide' ? 'fin' : 'ear');
  addCrest(ctx, headGroup, r);
  ctx.headR = r;

  for (const side of [-1, 1]) {
    for (const z of [0.48, -0.48]) {
      const leg = new THREE.Group();
      leg.position.set(side * w * 0.62, 0.62, z * d);
      body.add(leg);
      part(ctx, S.capsule, mats.secondary, leg, [0, -0.22, 0], [0.105, 0.16, 0.105]);
      part(ctx, S.sphere, mats.primary, leg, [0, -0.5, 0.06], [0.14, 0.09, 0.2]);
      ctx.parts.legs.push({ group: leg, side });
    }
  }

  // Back spikes / fin
  const spikeCount = rng.int(2, 4);
  for (let i = 0; i < spikeCount; i++) {
    const z = d * 0.4 - i * (d * 0.3);
    if (ctx.type === 'verdant') {
      part(ctx, S.octa, mats.secondary, body, [0, 1.45, z], [0.12, 0.3, 0.08], [0.2, 0, 0]);
    } else if (ctx.type === 'tide') {
      part(ctx, S.cone4, mats.accent, body, [0, 1.46, z], [0.05, 0.32, 0.26], [0.15, 0, 0]);
    } else {
      part(ctx, S.cone, mats.secondary, body, [0, 1.42, z], [0.1, 0.28, 0.1], [-0.15, 0, 0]);
    }
  }

  addTail(ctx, new THREE.Vector3(0, 1.05, -d * 0.9), { segments: 4, width: 0.16, droop: 0.15 });
  if (ctx.type === 'lumen' || ctx.type === 'umbra' || ctx.type === 'verdant') {
    addWings(ctx, 1.36, -d * 0.3, 0.75);
  }
  return { height: 1.7 };
}

function buildSerpent(ctx) {
  const { body, mats, rng } = ctx;
  const group = new THREE.Group();
  body.add(group);
  ctx.parts.serpent = group;
  const count = rng.int(6, 8);
  let parent = group;
  const segs = [];
  for (let i = 0; i < count; i++) {
    const g = new THREE.Group();
    g.position.set(0, i === 0 ? 0.34 : 0.28, i === 0 ? 0 : 0.05);
    g.rotation.z = Math.sin(i * 0.9) * 0.16;
    g.rotation.x = i * 0.1;
    parent.add(g);
    const t = i / count;
    const size = 0.26 + Math.sin(t * Math.PI) * 0.18;
    part(ctx, S.sphere, i % 2 ? mats.secondary : mats.primary, g, [Math.sin(i * 1.1) * 0.12, 0, 0], [size, size * 0.92, size * 0.95]);
    segs.push(g);
    parent = g;
  }
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.32, 0.06);
  parent.add(headGroup);
  ctx.parts.head = headGroup;
  const r = rng.float(0.34, 0.42);
  part(ctx, S.sphere, mats.primary, headGroup, [0, 0, 0], [r, r * 0.92, r * 0.9]);
  part(ctx, S.sphere, mats.secondary, headGroup, [0, -r * 0.24, r * 0.45], [r * 0.55, r * 0.32, r * 0.55]);
  addEyes(ctx, headGroup, r, { brow: false });
  addSnout(ctx, headGroup, r, { fangs: ctx.type === 'umbra' || ctx.type === 'tide', nose: true });
  addHornPair(ctx, headGroup, r, ctx.type === 'tide' ? 'fin' : 'crystal');
  addCrest(ctx, headGroup, r);
  ctx.headR = r;

  for (const side of [-1, 1]) {
    const fin = part(ctx, S.cone4, mats.accent, headGroup, [side * r * 0.72, r * 0.1, -r * 0.1], [r * 0.28, r * 0.55, r * 0.05], [0, 0, side * -1.1]);
    ctx.parts.ears = ctx.parts.ears || [];
    ctx.parts.ears.push(fin);
  }
  for (let i = 0; i < 3; i++) {
    part(ctx, S.octa, mats.accent, body, [0, 0.4 + i * 0.5, -0.1 - i * 0.06], [0.06, 0.18, 0.06], [0.2, 0, 0]);
  }
  return { height: 2.3 };
}

function buildFloater(ctx) {
  const { body, mats, rng } = ctx;
  const r = rng.float(0.48, 0.58);
  const coreY = 1.25;
  part(ctx, S.sphere, mats.primary, body, [0, coreY, 0], [r, r * 0.95, r]);
  part(ctx, S.sphere, mats.belly, body, [0, coreY - r * 0.2, r * 0.55], [r * 0.62, r * 0.55, r * 0.3]);
  addSpots(ctx, body, { x: r, y: r, z: r });

  const headGroup = new THREE.Group();
  headGroup.position.set(0, coreY + r * 0.92, 0);
  body.add(headGroup);
  ctx.parts.head = headGroup;
  const hr = rng.float(0.36, 0.42);
  part(ctx, S.sphere, mats.primary, headGroup, [0, 0, 0], [hr, hr * 0.95, hr * 0.9]);
  addEyes(ctx, headGroup, hr, { brow: false });
  addSnout(ctx, headGroup, hr * 0.85, { fangs: ctx.type === 'umbra', nose: true });
  addCrest(ctx, headGroup, hr);
  addHornPair(ctx, headGroup, hr, ctx.type === 'lumen' ? 'crystal' : 'fin');
  ctx.headR = hr;

  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * r * 0.9, coreY + r * 0.1, 0.05);
    body.add(arm);
    part(ctx, S.capsule, mats.secondary, arm, [0, -0.18, 0], [0.08, 0.12, 0.08], [0, 0, side * 0.5]);
    part(ctx, S.sphere, mats.accent, arm, [side * 0.04, -0.34, 0], [0.09, 0.09, 0.09]);
    ctx.parts.arms.push({ group: arm, baseZ: 0, side });
  }

  // Wispy tail / lower body
  const tailGroup = new THREE.Group();
  tailGroup.position.set(0, coreY - r * 0.8, -0.05);
  body.add(tailGroup);
  ctx.parts.tails.push(tailGroup);
  for (let i = 0; i < 4; i++) {
    part(ctx, S.cone, i % 2 ? mats.secondary : mats.primary, tailGroup, [Math.sin(i * 1.2) * 0.1, -i * 0.24, -i * 0.03], [0.17 - i * 0.025, 0.26, 0.17 - i * 0.025], [Math.PI, 0, Math.sin(i) * 0.2]);
  }
  if (ctx.type === 'umbra' || ctx.type === 'lumen') addWings(ctx, coreY + 0.2, -r * 0.55, 0.95);

  // Orbiting motes
  const aura = new THREE.Group();
  aura.position.set(0, coreY, 0);
  body.add(aura);
  ctx.parts.aura = aura;
  const motes = rng.int(3, 5);
  for (let i = 0; i < motes; i++) {
    const a = (i / motes) * Math.PI * 2;
    const mote = part(ctx, S.sphere, mats.glow, aura, [Math.cos(a) * (r + 0.4), Math.sin(a * 2) * 0.4, Math.sin(a) * (r + 0.4)], [0.05, 0.05, 0.05]);
    mote.userData.orbit = a;
    mote.userData.radius = r + 0.35 + rng.float(0, 0.2);
    mote.userData.speed = rng.float(0.5, 1.2);
  }
  return { height: coreY + r + 0.9, float: true };
}

function buildInsect(ctx) {
  const { body, mats, rng } = ctx;
  const thoraxY = 1.12;
  part(ctx, S.sphere, mats.primary, body, [0, thoraxY, 0], [0.4, 0.42, 0.55]);
  part(ctx, S.sphere, mats.secondary, body, [0, thoraxY + 0.02, -0.62], [0.34, 0.3, 0.5]);
  part(ctx, S.sphere, mats.belly, body, [0, thoraxY - 0.24, 0.08], [0.28, 0.2, 0.42]);
  addSpots(ctx, body, { x: 0.4, y: 0.42, z: 0.55 });

  const headGroup = new THREE.Group();
  headGroup.position.set(0, thoraxY + 0.38, 0.5);
  body.add(headGroup);
  ctx.parts.head = headGroup;
  const r = rng.float(0.3, 0.36);
  part(ctx, S.sphere, mats.primary, headGroup, [0, 0, 0], [r, r, r * 0.92]);
  addEyes(ctx, headGroup, r, { brow: false });
  addSnout(ctx, headGroup, r * 0.9, { fangs: true, nose: true });
  addCrest(ctx, headGroup, r);
  ctx.headR = r;

  for (const side of [-1, 1]) {
    const antenna = new THREE.Group();
    antenna.position.set(side * r * 0.4, r * 0.6, 0);
    antenna.rotation.z = side * -0.4;
    headGroup.add(antenna);
    part(ctx, S.cylTaper, mats.secondary, antenna, [0, 0.22, 0], [0.025, 0.45, 0.025]);
    part(ctx, S.sphere, mats.glow, antenna, [0, 0.48, 0], [0.06, 0.06, 0.06]);
  }

  for (const side of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.3, thoraxY - 0.2, i === 0 ? 0.2 : -0.18);
      leg.rotation.z = side * 0.55;
      body.add(leg);
      part(ctx, S.capsule, mats.secondary, leg, [0, -0.2, 0], [0.05, 0.15, 0.05]);
      part(ctx, S.sphere, mats.primary, leg, [0, -0.38, 0.04], [0.07, 0.06, 0.12]);
      ctx.parts.legs.push({ group: leg, side });
    }
  }
  addWings(ctx, thoraxY + 0.3, -0.35, 1.05);
  addTail(ctx, new THREE.Vector3(0, thoraxY - 0.05, -0.9), { segments: 3, width: 0.14, droop: 0.12 });
  return { height: 1.85, float: true };
}

function decorate(ctx, bodyInfo) {
  const { body, mats, type, rng } = ctx;
  if (type === 'ember') {
    part(ctx, S.octa, mats.glow, body, [0, bodyInfo.height * 0.48, -0.15], [0.08, 0.16, 0.08]);
  } else if (type === 'verdant') {
    for (let i = 0; i < 2; i++) {
      part(ctx, S.octa, mats.secondary, body, [(i ? 1 : -1) * 0.38, bodyInfo.height * 0.52, -0.2], [0.14, 0.28, 0.07], [0.3, 0, (i ? 1 : -1) * 0.6]);
    }
  } else if (type === 'tide') {
    for (let i = 0; i < 3; i++) {
      part(ctx, S.box, mats.dark, body, [0.22, bodyInfo.height * 0.42 + i * 0.09, 0.22], [0.02, 0.015, 0.12]);
    }
  } else if (type === 'volt') {
    part(ctx, S.bolt, mats.glow, body, [-0.36, bodyInfo.height * 0.5, 0.1], [0.45, 0.45, 0.45], [0, 0, 0.3]);
  } else if (type === 'lumen') {
    part(ctx, S.torus, mats.glow, body, [0, bodyInfo.height * 0.3, -0.1], [0.36, 0.36, 0.3], [Math.PI / 2, 0, 0]);
  } else if (type === 'umbra') {
    for (let i = 0; i < 3; i++) {
      part(ctx, S.sphere, mats.glow, body, [rng.float(-0.4, 0.4), bodyInfo.height * rng.float(0.3, 0.6), -0.2], [0.035, 0.035, 0.035]);
    }
  }
}

export function createCreatureModel(creature) {
  const rng = new RNG(creature.seed + ':' + creature.id);
  const mats = buildMaterials(creature.colors);
  const root = new THREE.Group();
  root.name = `creature-${creature.name}`;
  const body = new THREE.Group();
  root.add(body);

  const ctx = {
    rng,
    mats,
    body,
    type: creature.type,
    parts: { arms: [], legs: [], tails: [], wings: [], eyes: [], aura: null },
    creature,
  };

  let info;
  switch (creature.body) {
    case 'quadruped': info = buildQuadruped(ctx); break;
    case 'serpent': info = buildSerpent(ctx); break;
    case 'floater': info = buildFloater(ctx); break;
    case 'insect': info = buildInsect(ctx); break;
    default: info = buildBiped(ctx);
  }
  decorate(ctx, info);

  const shadowMat = new THREE.MeshBasicMaterial({
    map: getShadowTexture(), transparent: true, opacity: 0.75, depthWrite: false,
  });
  const shadow = new THREE.Mesh(S.circle, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  shadow.scale.setScalar(0.95);
  root.add(shadow);

  root.scale.setScalar(creature.scale || 1);

  const parts = ctx.parts;
  const phase = (creature.seed % 100) / 12;
  const baseBodyY = 0;
  const float = info.float;
  const hoverBase = float ? 0.06 : 0;

  const materials = Object.values(mats);

  function update(t, dt) {
    const bob = Math.sin(t * 1.7 + phase) * (float ? 0.06 : 0.035);
    body.position.y = hoverBase + bob;
    body.rotation.z = Math.sin(t * 1.05 + phase) * 0.018;
    if (parts.head) {
      parts.head.rotation.y = Math.sin(t * 0.75 + phase) * 0.09;
      parts.head.rotation.x = Math.sin(t * 1.25 + phase * 1.3) * 0.03;
    }
    for (const tail of parts.tails) {
      tail.rotation.y = Math.sin(t * 1.5 + phase) * 0.28;
      tail.rotation.z = Math.sin(t * 1.1 + phase * 0.7) * 0.08;
    }
    for (const arm of parts.arms) {
      arm.group.rotation.x = Math.sin(t * 1.5 + phase + arm.side) * 0.12;
      arm.group.rotation.z = arm.baseZ + Math.sin(t * 1.2 + phase) * 0.05;
    }
    for (const leg of parts.legs) {
      leg.group.rotation.x = Math.sin(t * 1.5 + phase + leg.side * 1.2) * 0.04;
    }
    for (const wing of parts.wings) {
      wing.group.rotation.z = wing.baseZ + Math.sin(t * 2.3 + phase) * 0.16 * wing.side;
      wing.group.rotation.y = wing.side * -0.75 + Math.sin(t * 1.7 + phase) * 0.08;
    }
    if (parts.serpent) {
      parts.serpent.rotation.y = Math.sin(t * 0.9 + phase) * 0.08;
      parts.serpent.rotation.z = Math.sin(t * 0.7 + phase) * 0.03;
    }
    if (parts.aura) {
      for (const mote of parts.aura.children) {
        const a = mote.userData.orbit + t * mote.userData.speed;
        const rr = mote.userData.radius;
        mote.position.set(Math.cos(a) * rr, Math.sin(a * 2 + phase) * 0.35, Math.sin(a) * rr);
      }
      parts.aura.rotation.y = t * 0.35;
    }
    const blink = (t + phase * 2.7) % 4.6;
    const eyeScale = blink > 4.45 ? 0.12 : 1;
    for (const eye of parts.eyes) {
      eye.scale.y = (eye.userData.baseScaleY ?? (eye.userData.baseScaleY = eye.scale.y)) * eyeScale;
    }
    const pulse = 0.92 + Math.sin(t * 2 + phase) * 0.18;
    for (const mat of [mats.accent, mats.glow]) {
      mat.emissiveIntensity = (mat.userData.baseIntensity || 0.5) * pulse;
    }
  }

  function setOpacity(o) {
    for (const m of materials) {
      if (!m.transparent) {
        m.transparent = true;
        m.depthWrite = o > 0.9;
      }
      m.opacity = o;
    }
  }

  function flash(color = '#ffffff', intensity = 0.9) {
    for (const m of materials) {
      m.emissive.set(color);
      m.emissiveIntensity = intensity;
    }
    setTimeout(() => {
      for (const m of materials) {
        m.emissive.copy(m.userData.baseEmissive);
        m.emissiveIntensity = m.userData.baseIntensity;
      }
    }, 130);
  }

  function dispose() {
    for (const m of materials) m.dispose();
    shadowMat.dispose();
  }

  return {
    creature,
    root,
    body,
    parts,
    materials,
    height: info.height,
    float: !!float,
    update,
    setOpacity,
    flash,
    dispose,
  };
}

export function disposeCreatureModel(model) {
  model.dispose();
  model.root.removeFromParent();
}
