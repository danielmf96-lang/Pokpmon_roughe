import * as THREE from 'three';
import { getParticleTexture } from './room.js';

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

export class Effects {
  constructor(scene, camera, floaterLayer) {
    this.scene = scene;
    this.camera = camera;
    this.floaterLayer = floaterLayer;
    this.bursts = [];
    this.rings = [];
    this.beams = [];
    this.projectiles = [];
    this.slashes = [];
    this.trailTimer = 0;
  }

  burst(position, color, opts = {}) {
    const count = opts.count ?? 26;
    const speed = opts.speed ?? 3.2;
    const life = opts.life ?? 0.8;
    const size = opts.size ?? 0.14;
    const gravity = opts.gravity ?? 3.2;
    const spread = opts.spread ?? 1;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const v = speed * (0.35 + Math.random() * 0.9);
      velocities[i * 3] = Math.sin(phi) * Math.cos(theta) * v * spread;
      velocities[i * 3 + 1] = Math.cos(phi) * v * 0.75 + (opts.up ?? 1.2);
      velocities[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * v * spread;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      map: getParticleTexture(), color, size, transparent: true, opacity: 1,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);
    points.position.copy(position);
    this.scene.add(points);
    this.bursts.push({ points, velocities, life, age: 0, gravity, baseSize: size });
  }

  aura(position, color, opts = {}) {
    const count = opts.count ?? 22;
    const life = opts.life ?? 1.2;
    const radius = opts.radius ?? 0.8;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = radius * (0.4 + Math.random() * 0.6);
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = Math.random() * 0.4;
      positions[i * 3 + 2] = Math.sin(a) * r;
      velocities[i * 3] = Math.cos(a) * 0.2;
      velocities[i * 3 + 1] = 0.9 + Math.random() * 1.5;
      velocities[i * 3 + 2] = Math.sin(a) * 0.2;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      map: getParticleTexture(), color, size: opts.size ?? 0.1, transparent: true, opacity: 1,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);
    points.position.copy(position);
    this.scene.add(points);
    this.bursts.push({ points, velocities, life, age: 0, gravity: -0.2, baseSize: opts.size ?? 0.1, phases, spiral: true });
  }

  ring(position, color, opts = {}) {
    const life = opts.life ?? 0.6;
    const radius = opts.radius ?? 1.2;
    const mat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.72, 1, 48), mat);
    mesh.position.copy(position);
    if (opts.flat) {
      mesh.rotation.x = -Math.PI / 2;
    } else {
      mesh.quaternion.copy(this.camera.quaternion);
    }
    mesh.scale.setScalar(0.2);
    this.scene.add(mesh);
    this.rings.push({ mesh, life, age: 0, radius, flat: !!opts.flat });
  }

  beam(from, to, color, opts = {}) {
    const start = from.clone();
    const end = to.clone();
    const dir = end.clone().sub(start);
    const len = dir.length();
    const mat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(opts.width ?? 0.12, opts.width ?? 0.12, 1, 6, 1, true), mat);
    mesh.position.copy(start).add(end).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    mesh.scale.set(1, len, 1);
    this.scene.add(mesh);
    this.beams.push({ mesh, life: opts.life ?? 0.32, age: 0 });
    this.burst(start, color, { count: 10, speed: 2, size: 0.1, life: 0.4, up: 0.5 });
    this.burst(end, color, { count: 18, speed: 3, size: 0.12, life: 0.5 });
  }

  slash(position, color, dir = 1) {
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide, depthWrite: false,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.12), mat);
      mesh.position.copy(position);
      mesh.position.y += (i - 1) * 0.22;
      mesh.position.z += 0.15;
      mesh.rotation.z = (0.7 + i * 0.22) * dir;
      mesh.quaternion.copy(this.camera.quaternion).multiply(mesh.quaternion);
      mesh.scale.set(0.2, 1, 1);
      this.scene.add(mesh);
      this.slashes.push({ mesh, life: 0.3, age: 0, delay: i * 0.035 });
    }
    this.burst(position, color, { count: 16, speed: 4, size: 0.1, life: 0.4 });
  }

  projectile(from, to, color, opts = {}) {
    const duration = opts.duration ?? 0.5;
    const size = opts.size ?? 0.18;
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 10, 8), mat);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(size * 2.1, 10, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    mesh.add(glow);
    mesh.position.copy(from);
    this.scene.add(mesh);
    return new Promise((resolve) => {
      this.projectiles.push({
        mesh, from: from.clone(), to: to.clone(), color, duration, age: 0, resolve,
        arc: opts.arc ?? 1.6, trail: 0,
      });
    });
  }

  floater(worldPos, text, className = '', color = '') {
    const v = worldPos.clone().project(this.camera);
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    const el = document.createElement('div');
    el.className = `floater ${className}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    if (color) el.style.color = color;
    this.floaterLayer.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  update(dt) {
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      b.age += dt;
      const p = b.age / b.life;
      if (p >= 1) {
        this.scene.remove(b.points);
        b.points.geometry.dispose();
        b.points.material.dispose();
        this.bursts.splice(i, 1);
        continue;
      }
      const arr = b.points.geometry.attributes.position.array;
      for (let j = 0; j < arr.length / 3; j++) {
        arr[j * 3] += b.velocities[j * 3] * dt;
        arr[j * 3 + 1] += b.velocities[j * 3 + 1] * dt;
        arr[j * 3 + 2] += b.velocities[j * 3 + 2] * dt;
        if (b.spiral) {
          const a = b.phases[j] + b.age * 2.2;
          arr[j * 3] += Math.cos(a) * dt * 0.4;
          arr[j * 3 + 2] += Math.sin(a) * dt * 0.4;
        }
        b.velocities[j * 3 + 1] -= b.gravity * dt;
      }
      b.points.geometry.attributes.position.needsUpdate = true;
      b.points.material.opacity = Math.pow(1 - p, 1.4);
      b.points.material.size = b.baseSize * (1 - p * 0.4);
    }

    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.age += dt;
      const p = r.age / r.life;
      if (p >= 1) {
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.rings.splice(i, 1);
        continue;
      }
      r.mesh.scale.setScalar(0.2 + p * r.radius * 2.4);
      r.mesh.material.opacity = (1 - p) * 0.9;
    }

    for (let i = this.beams.length - 1; i >= 0; i--) {
      const b = this.beams[i];
      b.age += dt;
      const p = b.age / b.life;
      if (p >= 1) {
        this.scene.remove(b.mesh);
        b.mesh.geometry.dispose();
        b.mesh.material.dispose();
        this.beams.splice(i, 1);
        continue;
      }
      b.mesh.material.opacity = (1 - p) * 0.95;
      b.mesh.scale.x = 1 + Math.sin(p * Math.PI) * 0.8;
      b.mesh.scale.z = 1 + Math.sin(p * Math.PI) * 0.8;
    }

    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const s = this.slashes[i];
      s.age += dt;
      const local = s.age - s.delay;
      if (local < 0) continue;
      const p = local / s.life;
      if (p >= 1) {
        this.scene.remove(s.mesh);
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
        this.slashes.splice(i, 1);
        continue;
      }
      s.mesh.scale.x = 0.2 + p * 1.1;
      s.mesh.material.opacity = (1 - p) * 0.9;
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.age += dt;
      const t = Math.min(1, p.age / p.duration);
      const ease = t * t * (3 - 2 * t);
      const mid = p.from.clone().add(p.to).multiplyScalar(0.5);
      mid.y += p.arc;
      const a = p.from.clone().lerp(mid, ease);
      const b = mid.clone().lerp(p.to, ease);
      p.mesh.position.copy(a.lerp(b, ease));
      p.trail += dt;
      if (p.trail > 0.035) {
        p.trail = 0;
        this.burst(p.mesh.position, p.color, { count: 3, speed: 0.7, size: 0.1, life: 0.32, up: 0, gravity: 0, spread: 0.4 });
      }
      if (t >= 1) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        p.mesh.children.forEach((c) => { c.geometry.dispose(); c.material.dispose(); });
        this.projectiles.splice(i, 1);
        p.resolve();
      }
    }
  }

  clear() {
    for (const list of [this.bursts, this.rings, this.beams, this.slashes, this.projectiles]) {
      for (const item of list) {
        const obj = item.points || item.mesh;
        if (obj) {
          this.scene.remove(obj);
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material?.dispose();
        }
        item.resolve?.();
      }
      list.length = 0;
    }
    this.floaterLayer.innerHTML = '';
  }
}
