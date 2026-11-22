import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RNG } from './rng.js';

let particleTexture = null;
export function getParticleTexture() {
  if (particleTexture) return particleTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.3, 'rgba(255,255,255,0.85)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  particleTexture = new THREE.CanvasTexture(c);
  return particleTexture;
}

function makeFloorTexture(theme, rng) {
  const size = 1024;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.clearRect(0, 0, size, size);
  const cx = size / 2;
  const cy = size / 2;
  const accent = theme.accent;
  const glow = theme.glow;

  const grad = g.createRadialGradient(cx, cy, 0, cx, cy, size / 2);
  grad.addColorStop(0, hexA(glow, 0.28));
  grad.addColorStop(0.28, hexA(accent, 0.1));
  grad.addColorStop(0.7, hexA(accent, 0.03));
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);

  g.strokeStyle = hexA(glow, 0.5);
  g.lineWidth = 3;
  for (let i = 0; i < 5; i++) {
    const r = 120 + i * 82;
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.stroke();
  }

  // Radial spokes
  const spokes = 16;
  for (let i = 0; i < spokes; i++) {
    const a = (i / spokes) * Math.PI * 2;
    const inner = i % 2 === 0 ? 150 : 330;
    const outer = 470;
    g.strokeStyle = hexA(i % 4 === 0 ? glow : accent, 0.35);
    g.lineWidth = i % 4 === 0 ? 4 : 2;
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
    g.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
    g.stroke();
    // tick
    g.beginPath();
    g.arc(cx, cy, 460, a - 0.02, a + 0.02);
    g.lineWidth = 8;
    g.strokeStyle = hexA(accent, 0.4);
    g.stroke();
  }

  // Outer glyph ring
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const r = 420;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    g.save();
    g.translate(x, y);
    g.rotate(a + Math.PI / 2);
    g.strokeStyle = hexA(glow, 0.55);
    g.lineWidth = 2.5;
    g.beginPath();
    const kind = i % 4;
    if (kind === 0) { g.moveTo(-9, -12); g.lineTo(9, -12); g.lineTo(0, 12); g.closePath(); }
    else if (kind === 1) { g.moveTo(-8, 8); g.lineTo(0, -12); g.lineTo(8, 8); }
    else if (kind === 2) { g.arc(0, 0, 9, 0, Math.PI * 2); }
    else { g.moveTo(-10, 0); g.lineTo(10, 0); g.moveTo(0, -10); g.lineTo(0, 10); }
    g.stroke();
    g.restore();
  }

  // Center sigil: procedural polygon + inner rune
  const sides = rng.int(3, 6);
  const radius = 150;
  g.strokeStyle = hexA(glow, 0.85);
  g.lineWidth = 5;
  g.beginPath();
  for (let i = 0; i <= sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * radius;
    const y = cy + Math.sin(a) * radius;
    if (i === 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.stroke();
  g.strokeStyle = hexA(accent, 0.75);
  g.lineWidth = 3;
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 2) / sides) * Math.PI * 2 - Math.PI / 2;
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
    g.lineTo(cx + Math.cos(a2) * radius, cy + Math.sin(a2) * radius);
    g.stroke();
  }
  g.beginPath();
  g.arc(cx, cy, 62, 0, Math.PI * 2);
  g.strokeStyle = hexA(glow, 0.9);
  g.lineWidth = 4;
  g.stroke();
  g.beginPath();
  g.arc(cx, cy, 22, 0, Math.PI * 2);
  g.fillStyle = hexA(glow, 0.18);
  g.fill();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function hexA(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function makeBannerTexture(theme, rng, index) {
  const w = 256;
  const h = 512;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, theme.stoneDark);
  grad.addColorStop(0.5, theme.stone);
  grad.addColorStop(1, theme.stoneDark);
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);

  g.strokeStyle = hexA(theme.accent, 0.55);
  g.lineWidth = 6;
  g.strokeRect(14, 14, w - 28, h - 28);
  g.lineWidth = 2;
  g.strokeRect(26, 26, w - 52, h - 52);

  g.strokeStyle = hexA(theme.glow, 0.8);
  g.lineWidth = 4;
  g.beginPath();
  g.arc(w / 2, 160, 72, 0, Math.PI * 2);
  g.stroke();

  const sides = rng.int(3, 6);
  g.beginPath();
  for (let i = 0; i <= sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
    const x = w / 2 + Math.cos(a) * 58;
    const y = 160 + Math.sin(a) * 58;
    if (i === 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.strokeStyle = hexA(theme.accent, 0.9);
  g.lineWidth = 3;
  g.stroke();

  g.fillStyle = hexA(theme.glow, 0.9);
  g.beginPath();
  g.arc(w / 2, 160, 14, 0, Math.PI * 2);
  g.fill();

  for (let i = 0; i < 5; i++) {
    const y = 285 + i * 34;
    g.strokeStyle = hexA(theme.accent, 0.45 - i * 0.05);
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(50, y);
    g.lineTo(w - 50, y);
    g.stroke();
    g.beginPath();
    g.moveTo(50, y - 6);
    g.lineTo(50, y + 6);
    g.moveTo(w - 50, y - 6);
    g.lineTo(w - 50, y + 6);
    g.stroke();
  }

  for (let i = 0; i < 7; i++) {
    const x = 32 + i * 32;
    g.strokeStyle = hexA(theme.glow, 0.4);
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(x, h - 60);
    g.lineTo(x + 8, h - 24);
    g.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makePortalTexture(theme, rng) {
  const size = 512;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const cx = size / 2;
  const cy = size / 2;
  const grad = g.createRadialGradient(cx, cy, 10, cx, cy, 250);
  grad.addColorStop(0, hexA(theme.glow, 0.95));
  grad.addColorStop(0.22, hexA(theme.accent, 0.6));
  grad.addColorStop(0.5, hexA(theme.accent, 0.18));
  grad.addColorStop(0.8, hexA(theme.stoneDark, 0.05));
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);

  for (let i = 0; i < 9; i++) {
    const r = 30 + i * 23;
    g.strokeStyle = hexA(i % 2 ? theme.glow : theme.accent, 0.5 - i * 0.03);
    g.lineWidth = 1.5 + (i % 3);
    g.beginPath();
    const start = rng.float(0, Math.PI * 2);
    g.arc(cx, cy, r, start, start + rng.float(1.6, 4.6));
    g.stroke();
  }
  for (let i = 0; i < 22; i++) {
    const a = rng.float(0, Math.PI * 2);
    const r = rng.float(50, 235);
    g.fillStyle = hexA(theme.glow, rng.float(0.25, 0.8));
    g.beginPath();
    g.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, rng.float(1, 3.5), 0, Math.PI * 2);
    g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeStarTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 15);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}

function makeStoneMat(color, roughness = 0.85) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.08, flatShading: true });
}

export function createRoom(scene, config) {
  const rng = new RNG(config.seed + ':geometry');
  const theme = config.theme;
  const group = new THREE.Group();
  group.name = 'rift-room';
  scene.add(group);

  const stoneMat = makeStoneMat(theme.stone);
  const stoneDarkMat = makeStoneMat(theme.stoneDark, 0.92);
  const accentMat = new THREE.MeshStandardMaterial({
    color: theme.accent, emissive: theme.accent, emissiveIntensity: 0.7, roughness: 0.4, metalness: 0.3,
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: theme.glow, emissive: theme.glow, emissiveIntensity: 1.4, roughness: 0.3,
  });
  const metalMat = new THREE.MeshStandardMaterial({
    color: theme.secondary, roughness: 0.35, metalness: 0.65,
  });

  // Lighting
  const hemi = new THREE.HemisphereLight(theme.light, theme.stoneDark, 0.85);
  group.add(hemi);
  const key = new THREE.DirectionalLight(theme.light, theme.lightIntensity);
  key.position.set(7, 15, 9);
  group.add(key);
  const rim = new THREE.DirectionalLight(theme.accent, 1.1);
  rim.position.set(-9, 7, -11);
  group.add(rim);
  const portalLight = new THREE.PointLight(theme.accent, 90, 34, 2);
  portalLight.position.set(0, 4.8, -8.6);
  group.add(portalLight);
  const stageFill = new THREE.PointLight(theme.light, 55, 30, 2);
  stageFill.position.set(0, 5.6, 7.2);
  group.add(stageFill);

  // Dome & backdrop
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(23, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: theme.sky, roughness: 1, side: THREE.BackSide }),
  );
  dome.position.y = -0.4;
  group.add(dome);

  // Floor
  const floor = new THREE.Mesh(new THREE.CylinderGeometry(9.6, 10.1, 0.8, 48), stoneMat);
  floor.position.y = -0.4;
  group.add(floor);
  const floorTop = new THREE.Mesh(new THREE.CircleGeometry(9.55, 64), stoneDarkMat);
  floorTop.rotation.x = -Math.PI / 2;
  floorTop.position.y = 0.005;
  group.add(floorTop);

  const floorTex = makeFloorTexture(theme, rng);
  const runeDisc = new THREE.Mesh(
    new THREE.CircleGeometry(9.4, 64),
    new THREE.MeshBasicMaterial({ map: floorTex, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  runeDisc.rotation.x = -Math.PI / 2;
  runeDisc.position.y = 0.018;
  group.add(runeDisc);

  const rimRing = new THREE.Mesh(new THREE.TorusGeometry(9.55, 0.14, 8, 64), accentMat);
  rimRing.rotation.x = -Math.PI / 2;
  rimRing.position.y = 0.14;
  group.add(rimRing);

  const walkway = new THREE.Mesh(new THREE.RingGeometry(9.6, 14.6, 64), stoneDarkMat);
  walkway.rotation.x = -Math.PI / 2;
  walkway.position.y = -0.12;
  group.add(walkway);

  // Outer wall
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(15.1, 15.1, 13, 48, 1, true),
    new THREE.MeshStandardMaterial({ color: theme.stoneDark, roughness: 0.96, side: THREE.BackSide, flatShading: true }),
  );
  wall.position.y = 6.4;
  group.add(wall);

  const wallRibs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.45, 12, 0.9), stoneMat, 24);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const x = Math.cos(a) * 14.7;
    const z = Math.sin(a) * 14.7;
    q.setFromEuler(new THREE.Euler(0, -a + Math.PI / 2, 0));
    m4.compose(new THREE.Vector3(x, 6, z), q, new THREE.Vector3(1, 1, 1));
    wallRibs.setMatrixAt(i, m4);
  }
  group.add(wallRibs);

  const upperRing = new THREE.Mesh(new THREE.TorusGeometry(14.5, 0.22, 8, 64), metalMat);
  upperRing.rotation.x = -Math.PI / 2;
  upperRing.position.y = 7.8;
  group.add(upperRing);
  const midRing = new THREE.Mesh(new THREE.TorusGeometry(14.8, 0.12, 6, 64), accentMat);
  midRing.rotation.x = -Math.PI / 2;
  midRing.position.y = 4.2;
  group.add(midRing);

  // Pillars (merged stone geometry)
  const pillarGeos = [];
  const pillarPositions = [];
  const count = config.pillarCount;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + 0.15;
    const r = 11.9;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    pillarPositions.push({ x, z, a });
    const base = new THREE.BoxGeometry(1.6, 0.5, 1.6);
    base.translate(x, 0.25, z);
    pillarGeos.push(base);
    const column = new THREE.CylinderGeometry(0.34, 0.44, 6.4, 8);
    column.translate(x, 3.45, z);
    pillarGeos.push(column);
    const cap = new THREE.BoxGeometry(1.25, 0.38, 1.25);
    cap.translate(x, 6.75, z);
    pillarGeos.push(cap);
    const cap2 = new THREE.BoxGeometry(0.9, 0.3, 0.9);
    cap2.translate(x, 7.06, z);
    pillarGeos.push(cap2);
  }
  const pillarMesh = new THREE.Mesh(mergeGeometries(pillarGeos), stoneMat);
  group.add(pillarMesh);

  const orbGeo = new THREE.SphereGeometry(0.24, 10, 8);
  const orbs = new THREE.InstancedMesh(orbGeo, glowMat, count);
  for (let i = 0; i < count; i++) {
    const p = pillarPositions[i];
    m4.makeTranslation(p.x, 7.4, p.z);
    orbs.setMatrixAt(i, m4);
  }
  group.add(orbs);

  const torchPositions = [];
  for (let i = 0; i < count; i += 2) {
    const p = pillarPositions[i];
    torchPositions.push(p);
  }

  // Banners
  const banners = [];
  const bannerCount = Math.min(config.bannerCount, count);
  for (let i = 0; i < bannerCount; i++) {
    const p = pillarPositions[(i * 2 + 1) % count];
    const tex = makeBannerTexture(theme, rng, i);
    const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true, opacity: 0.96 });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 5.2, 1, 4), mat);
    const a = p.a + (Math.PI / count);
    banner.position.set(Math.cos(a) * 14.25, 4.9, Math.sin(a) * 14.25);
    banner.rotation.y = -a + Math.PI / 2;
    banner.userData.phase = rng.float(0, 6);
    banner.userData.baseRot = banner.rotation.y;
    group.add(banner);
    banners.push(banner);
  }

  // Portal
  const portal = new THREE.Group();
  portal.position.set(0, 4.7, -10.8);
  group.add(portal);
  const portalRing = new THREE.Mesh(new THREE.TorusGeometry(3.15, 0.3, 10, 48), accentMat);
  portal.add(portalRing);
  const portalRing2 = new THREE.Mesh(new THREE.TorusGeometry(3.65, 0.1, 6, 48), metalMat);
  portal.add(portalRing2);
  const portalTex = makePortalTexture(theme, rng);
  const portalDisc = new THREE.Mesh(
    new THREE.CircleGeometry(2.98, 48),
    new THREE.MeshBasicMaterial({ map: portalTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9 }),
  );
  portal.add(portalDisc);
  const portalRunes = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const rune = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), glowMat);
    rune.position.set(Math.cos(a) * 3.9, Math.sin(a) * 3.9, 0.1);
    rune.userData.a = a;
    portal.add(rune);
    portalRunes.push(rune);
  }

  // Floating crystals
  const crystals = [];
  const crystalMats = [accentMat, glowMat, metalMat];
  for (let i = 0; i < config.crystalCount; i++) {
    const a = rng.float(0, Math.PI * 2);
    const r = rng.float(4.6, 12.6);
    const geo = rng.chance(0.5) ? new THREE.OctahedronGeometry(rng.float(0.18, 0.5), 0) : new THREE.ConeGeometry(rng.float(0.15, 0.3), rng.float(0.5, 1.2), 5);
    const crystal = new THREE.Mesh(geo, crystalMats[i % 3]);
    crystal.position.set(Math.cos(a) * r, rng.float(1.4, 8.6), Math.sin(a) * r);
    crystal.rotation.set(rng.float(0, 3), rng.float(0, 3), rng.float(0, 3));
    crystal.userData.baseY = crystal.position.y;
    crystal.userData.phase = rng.float(0, 6.28);
    crystal.userData.spin = rng.float(0.15, 0.5);
    group.add(crystal);
    crystals.push(crystal);
  }

  // Braziers with flame + light
  const flames = [];
  const torchLights = [];
  for (let i = 0; i < Math.min(4, torchPositions.length); i++) {
    const p = torchPositions[i];
    const a = Math.atan2(p.z, p.x);
    const x = Math.cos(a) * 9.0;
    const z = Math.sin(a) * 9.0;
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 1.3, 6), metalMat);
    stand.position.set(x, 0.65, z);
    group.add(stand);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.3, 0.35, 8), stoneMat);
    bowl.position.set(x, 1.36, z);
    group.add(bowl);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.85, 6), glowMat);
    flame.position.set(x, 1.95, z);
    group.add(flame);
    flame.userData.phase = rng.float(0, 6.28);
    flames.push(flame);
    if (i < 2) {
      const light = new THREE.PointLight(theme.accent, 26, 14, 2);
      light.position.set(x, 2.3, z);
      light.userData.base = 26;
      light.userData.phase = rng.float(0, 6.28);
      group.add(light);
      torchLights.push(light);
    }
  }

  // Stars
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 260; i++) {
    const a = rng.float(0, Math.PI * 2);
    const r = rng.float(12, 21);
    const y = rng.float(8, 20);
    starPos.push(Math.cos(a) * r, y, Math.sin(a) * r);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    size: 0.18, map: makeStarTexture(), transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false, color: theme.glow, sizeAttenuation: true,
  });
  const stars = new THREE.Points(starGeo, starMat);
  group.add(stars);

  // Dust motes
  const moteGeo = new THREE.BufferGeometry();
  const motePos = [];
  for (let i = 0; i < config.motes; i++) {
    const a = rng.float(0, Math.PI * 2);
    const r = rng.float(2, 13);
    motePos.push(Math.cos(a) * r, rng.float(0.4, 10), Math.sin(a) * r);
  }
  moteGeo.setAttribute('position', new THREE.Float32BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({
    size: 0.09, map: getParticleTexture(), transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, depthWrite: false, color: theme.glow, sizeAttenuation: true,
  });
  const motes = new THREE.Points(moteGeo, moteMat);
  group.add(motes);

  const textures = [floorTex, portalTex, starMat.map, moteMat.map];

  function update(t, dt) {
    portalDisc.rotation.z += dt * 0.16;
    portalRing.rotation.z -= dt * 0.05;
    portalDisc.scale.setScalar(1 + Math.sin(t * 0.8) * 0.015);
    for (const rune of portalRunes) {
      const a = rune.userData.a + t * 0.12;
      rune.position.set(Math.cos(a) * 3.9, Math.sin(a) * 3.9, 0.1);
      rune.rotation.y = t * 0.5;
    }
    for (const crystal of crystals) {
      crystal.position.y = crystal.userData.baseY + Math.sin(t * 0.8 + crystal.userData.phase) * 0.25;
      crystal.rotation.y += dt * crystal.userData.spin;
      crystal.rotation.x += dt * crystal.userData.spin * 0.4;
    }
    for (const flame of flames) {
      const s = 1 + Math.sin(t * 7 + flame.userData.phase) * 0.16;
      flame.scale.set(s, s * (1 + Math.sin(t * 9) * 0.1), s);
      flame.rotation.y = t * 0.7;
    }
    for (const light of torchLights) {
      light.intensity = light.userData.base * (0.86 + Math.sin(t * 7.5 + light.userData.phase) * 0.16);
    }
    for (const banner of banners) {
      banner.rotation.y = banner.userData.baseRot + Math.sin(t * 0.7 + banner.userData.phase) * 0.012;
    }
    motes.rotation.y = t * 0.012;
    stars.rotation.y = t * 0.004;
    runeDisc.material.opacity = 0.85 + Math.sin(t * 1.2) * 0.08;
    rimRing.material.emissiveIntensity = 0.55 + Math.sin(t * 1.6) * 0.18;
  }

  function dispose() {
    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of mats) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    for (const tex of textures) tex.dispose();
  }

  return { group, update, dispose, theme, portal, crystals };
}

export function createSelectStage(scene, config) {
  const theme = config.theme;
  const group = new THREE.Group();
  scene.add(group);
  const stoneMat = makeStoneMat(theme.stone);
  const darkMat = makeStoneMat(theme.stoneDark);
  const accentMat = new THREE.MeshStandardMaterial({
    color: theme.accent, emissive: theme.accent, emissiveIntensity: 0.9, roughness: 0.4,
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: theme.glow, emissive: theme.glow, emissiveIntensity: 1.5, roughness: 0.3,
  });
  const pedestals = [];
  const positions = [-4.6, 0, 4.6];
  for (let i = 0; i < 3; i++) {
    const g = new THREE.Group();
    g.position.set(positions[i], 0, -1.6);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.35, 0.5, 8), stoneMat);
    base.position.y = 0.25;
    g.add(base);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.1, 0.25, 8), darkMat);
    top.position.y = 0.62;
    g.add(top);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.88, 0.05, 6, 32), accentMat.clone());
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.76;
    g.add(ring);
    const glow = new THREE.Mesh(new THREE.CircleGeometry(0.72, 24), new THREE.MeshBasicMaterial({
      color: theme.glow, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.755;
    g.add(glow);
    group.add(g);
    pedestals.push({ group: g, ring, glow, baseY: 0.75, selected: false });
  }

  function update(t) {
    for (const p of pedestals) {
      const pulse = p.selected ? 1.4 + Math.sin(t * 4) * 0.5 : 0.7 + Math.sin(t * 1.6) * 0.2;
      p.ring.material.emissiveIntensity = pulse;
      p.glow.material.opacity = p.selected ? 0.5 + Math.sin(t * 3) * 0.15 : 0.2;
    }
  }

  function dispose() {
    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
  }

  return { group, pedestals, update, dispose };
}
