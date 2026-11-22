import * as THREE from 'three';
import './style.css';
import { generateRun, generateShowcase, restoreTeam } from './generate.js';
import { createCreatureModel } from './model.js';
import { createRoom, createSelectStage } from './room.js';
import { Effects } from './effects.js';
import { GameAudio } from './audio.js';
import { RNG, randomSeed } from './rng.js';
import { GROUPS, GROUP_ORDER, TYPES } from './data.js';
import { effectiveSpeed } from './battle.js';
import { battleMethods } from './battle-flow.js';
import {
  codexMarkup, moveCardMarkup, panelMarkup, switchOptionMarkup, teamCardMarkup,
} from './ui.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

const PLAYER_SPOT = new THREE.Vector3(-3.35, 0, 2.55);
const ENEMY_SPOT = new THREE.Vector3(3.35, 0, -2.0);
const PLAYER_ROT = Math.atan2(ENEMY_SPOT.x - PLAYER_SPOT.x, ENEMY_SPOT.z - PLAYER_SPOT.z);
const ENEMY_ROT = Math.atan2(PLAYER_SPOT.x - ENEMY_SPOT.x, PLAYER_SPOT.z - ENEMY_SPOT.z);

export class RiftGame {
  constructor() {
    this.dom = {
      canvas: $('#scene'),
      loading: $('#sceneLoading'),
      flash: $('#flash'),
      titleScreen: $('#titleScreen'),
      selectScreen: $('#selectScreen'),
      endScreen: $('#endScreen'),
      hud: $('#hud'),
      dock: $('#dock'),
      seedInput: $('#seedInput'),
      diceBtn: $('#diceBtn'),
      beginBtn: $('#beginBtn'),
      howBtn: $('#howBtn'),
      showcaseName: $('#showcaseName'),
      showcaseMeta: $('#showcaseMeta'),
      teamCards: $('#teamCards'),
      selectSeed: $('#selectSeed'),
      selectRoom: $('#selectRoom'),
      wardenName: $('#wardenName'),
      wardenSub: $('#wardenSub'),
      deployBtn: $('#deployBtn'),
      enemyPanel: $('#enemyPanel'),
      playerPanel: $('#playerPanel'),
      roundNum: $('#roundNum'),
      duelRoom: $('#duelRoom'),
      battleLog: $('#battleLog'),
      groupTabs: $('#groupTabs'),
      moveGrid: $('#moveGrid'),
      turnLabel: $('#turnLabel'),
      activeSummary: $('#activeSummary'),
      switchBtn: $('#switchBtn'),
      codexBtn: $('#codexBtn'),
      muteBtn: $('#muteBtn'),
      switchModal: $('#switchModal'),
      switchGrid: $('#switchGrid'),
      switchNote: $('#switchNote'),
      switchCancel: $('#switchCancel'),
      codexModal: $('#codexModal'),
      codexBody: $('#codexBody'),
      floaters: $('#floaters'),
      banner: $('#banner'),
      bannerKicker: $('#banner .banner-kicker'),
      bannerTitle: $('#banner .banner-title'),
      bannerSub: $('#banner .banner-sub'),
      toast: $('#toast'),
      hintBar: $('#hintBar'),
      hintText: $('#hintText'),
      hintClose: $('#hintClose'),
      endKicker: $('#endKicker'),
      endTitle: $('#endTitle'),
      endText: $('#endText'),
      endStats: $('#endStats'),
      endSeed: $('#endSeed'),
      rematchBtn: $('#rematchBtn'),
      newRiftBtn: $('#newRiftBtn'),
    };

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.dom.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#05070c');
    this.scene.fog = new THREE.FogExp2('#05070c', 0.018);
    this.camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 140);
    this.camera.position.set(7.1, 4.6, 11.4);
    this.cameraLook = new THREE.Vector3(0.6, 1.75, 0);
    this.camera.lookAt(this.cameraLook);
    this.camRig = { pos: new THREE.Vector3(7.1, 4.6, 11.4), target: new THREE.Vector3(0.6, 1.75, 0) };

    this.effects = new Effects(this.scene, this.camera, this.dom.floaters);
    this.audio = new GameAudio();
    this.timer = new THREE.Timer();
    this.timer.connect(document);

    this.models = new Map();
    this.homes = new Map();
    this.playerModels = [];
    this.enemyModels = [];
    this.tweens = [];
    this.state = 'boot';
    this.busy = false;
    this.modalOpen = false;
    this.switchForced = false;
    this.currentGroup = 'physical';
    this.selectedLead = null;
    this.run = null;
    this.room = null;
    this.stage = null;
    this.battle = null;
    this.showcaseModel = null;
    this.seed = '';
    this.time = 0;
    this.shake = 0;
    this.bannerTimer = null;
    this.toastTimer = null;
    this.hintTimer = null;
    this.endTimer = null;

    this.PLAYER_SPOT = PLAYER_SPOT;
    this.ENEMY_SPOT = ENEMY_SPOT;
    this.PLAYER_ROT = PLAYER_ROT;
    this.ENEMY_ROT = ENEMY_ROT;

    this.bindEvents();
    this.resize();
    const params = new URLSearchParams(window.location.search);
    const initialSeed = this.normalizeSeed(params.get('seed') || randomSeed());
    this.dom.seedInput.value = initialSeed;
    this.loadTitle(initialSeed);
    this.animate();
    setTimeout(() => {
      this.dom.loading.classList.add('fade');
      setTimeout(() => this.dom.loading.classList.add('hidden'), 700);
    }, 500);
  }

  normalizeSeed(raw) {
    const cleaned = String(raw || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 16);
    return cleaned || randomSeed();
  }

  sleep(ms) {
    return sleep(ms);
  }

  tween(duration, fn) {
    return new Promise((resolve) => {
      this.tweens.push({ age: 0, duration: Math.max(0.001, duration), fn, resolve });
    });
  }

  updateTweens(dt) {
    const list = this.tweens;
    this.tweens = [];
    for (const tw of list) {
      tw.age += dt;
      const raw = Math.min(1, tw.age / tw.duration);
      tw.fn(easeOutCubic(raw), raw);
      if (raw < 1) this.tweens.push(tw);
      else tw.resolve();
    }
  }

  /* ══════════════ SCENE / TITLE ══════════════ */
  loadTitle(seed) {
    this.state = 'title';
    this.busy = false;
    this.modalOpen = false;
    this.cleanupScene();
    this.seed = this.normalizeSeed(seed);
    this.titleSeed = this.seed;
    this.dom.seedInput.value = this.seed;
    this.dom.titleScreen.classList.remove('hidden');
    this.dom.selectScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.hud.classList.add('hidden');
    this.dom.dock.classList.add('hidden');
    this.dom.battleLog.innerHTML = '';

    const roomConfig = generateRun(this.seed).room;
    this.room = createRoom(this.scene, roomConfig);
    this.scene.fog = new THREE.FogExp2(roomConfig.theme.fog, roomConfig.fogDensity);
    this.scene.background = new THREE.Color(roomConfig.theme.bg);

    const showcase = generateShowcase(this.seed);
    const model = createCreatureModel(showcase);
    model.root.position.set(3.7, 0.02, -2.2);
    model.root.rotation.y = -0.42;
    model.root.scale.setScalar(1.42);
    this.scene.add(model.root);
    this.showcaseModel = model;
    this.models.set(showcase.id, model);

    this.dom.showcaseName.textContent = showcase.name;
    this.dom.showcaseMeta.textContent = `${TYPES[showcase.type].name} · ${showcase.species} · ${showcase.archetypeLabel}`;

    this.camera.position.set(7.1, 4.6, 11.4);
    this.cameraLook.set(0.6, 1.75, 0);
    this.camRig.pos.copy(this.camera.position);
    this.camRig.target.copy(this.cameraLook);
    this.camera.lookAt(this.cameraLook);
    this.audio.setMuted(this.audio.muted);
  }

  cleanupScene() {
    clearTimeout(this.endTimer);
    clearTimeout(this.hintTimer);
    this.tweens = [];
    this.effects.clear();
    for (const model of this.models.values()) {
      model.dispose();
      model.root.removeFromParent();
    }
    this.models.clear();
    this.homes.clear();
    this.playerModels = [];
    this.enemyModels = [];
    this.showcaseModel = null;
    if (this.room) {
      this.room.dispose();
      this.room = null;
    }
    if (this.stage) {
      this.stage.dispose();
      this.stage = null;
    }
    this.battle = null;
    this.busy = false;
    this.modalOpen = false;
    this.switchForced = false;
  }

  enterRift(rawSeed) {
    if (!['title', 'end'].includes(this.state)) return;
    this.audio.init();
    this.audio.confirm();
    const seed = this.normalizeSeed(rawSeed || this.dom.seedInput.value);
    this.cleanupScene();
    this.seed = seed;
    this.dom.seedInput.value = seed;
    this.run = generateRun(seed);

    this.scene.fog = new THREE.FogExp2(this.run.room.theme.fog, this.run.room.fogDensity);
    this.scene.background = new THREE.Color(this.run.room.theme.bg);
    this.room = createRoom(this.scene, this.run.room);
    this.stage = createSelectStage(this.scene, this.run.room);

    this.playerModels = this.run.playerTeam.map((creature, index) => {
      const model = createCreatureModel(creature);
      const pedestal = this.stage.pedestals[index];
      model.root.position.set(pedestal.group.position.x, 0.79, pedestal.group.position.z);
      model.root.rotation.y = -0.38 + (index - 1) * 0.1;
      model.root.scale.setScalar(creature.scale);
      this.scene.add(model.root);
      this.models.set(creature.id, model);
      this.homes.set(creature.id, model.root.position.clone());
      return model;
    });

    this.selectedLead = null;
    this.busy = false;
    this.modalOpen = false;
    this.state = 'select';
    this.currentGroup = 'physical';
    this.dom.titleScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.selectScreen.classList.remove('hidden');
    this.dom.hud.classList.add('hidden');
    this.dom.dock.classList.add('hidden');
    this.dom.deployBtn.disabled = true;
    this.buildSelectUI();
    this.updateCameraRig();
    window.history.replaceState(null, '', `?seed=${encodeURIComponent(seed)}`);
  }

  buildSelectUI() {
    this.dom.selectSeed.textContent = this.run.seed;
    this.dom.selectRoom.textContent = this.run.room.name;
    this.dom.wardenName.textContent = this.run.warden.name;
    this.dom.wardenSub.textContent = this.run.warden.title;
    this.dom.teamCards.innerHTML = this.run.playerTeam.map((c, i) => teamCardMarkup(c, i)).join('');
    for (const card of $$('.team-card', this.dom.teamCards)) {
      card.addEventListener('click', () => this.selectLead(Number(card.dataset.index)));
    }
    for (const pedestal of this.stage.pedestals) pedestal.selected = false;
  }

  selectLead(index) {
    if (this.state !== 'select') return;
    this.selectedLead = index;
    this.audio.init();
    this.audio.select();
    for (const card of $$('.team-card', this.dom.teamCards)) {
      card.classList.toggle('selected', Number(card.dataset.index) === index);
    }
    this.dom.deployBtn.disabled = false;
    this.playerModels.forEach((model, i) => {
      const creature = this.run.playerTeam[i];
      const target = creature.scale * (i === index ? 1.16 : 1);
      this.tween(0.35, (p) => {
        const current = model.root.scale.x;
        model.root.scale.setScalar(current + (target - current) * Math.min(1, p * 0.22));
      });
      if (this.stage) this.stage.pedestals[i].selected = i === index;
    });
  }

  deploy() {
    if (this.state !== 'select' || this.selectedLead === null) return;
    this.audio.init();
    this.audio.confirm();
    const lead = this.selectedLead;
    this.dom.selectScreen.classList.add('hidden');
    this.dom.hud.classList.remove('hidden');
    this.dom.dock.classList.remove('hidden');
    this.dom.battleLog.innerHTML = '';
    this.dom.roundNum.textContent = '1';
    this.dom.duelRoom.textContent = this.run.room.name;
    this.state = 'battle';
    this.busy = false;
    this.currentGroup = 'physical';

    this.battle = {
      playerTeam: this.run.playerTeam,
      enemyTeam: this.run.enemyTeam,
      playerActive: lead,
      enemyActive: 0,
      round: 1,
      damageDealt: 0,
      damageTaken: 0,
      startedAt: Date.now(),
    };

    this.buildEnemyModels();
    if (this.stage) {
      this.stage.dispose();
      this.stage = null;
    }

    this.playerModels.forEach((model, index) => {
      if (index === lead) {
        this.placeModel(model, this.PLAYER_SPOT, this.PLAYER_ROT, true);
      } else {
        model.root.visible = false;
      }
    });
    this.placeModel(this.enemyModels[0], this.ENEMY_SPOT, this.ENEMY_ROT, true);
    this.updateCameraRig();
    this.updateUI();
    this.log(`${this.run.warden.name} accepts your challenge.`, 'enemy');
    this.log(`Go, ${this.pActive.name}!`, 'player');
    this.showBanner('RIFT DUEL', this.run.room.name, this.run.warden.title, 2400);
    this.showHint('<b>Pick a move group</b>, then a move. <b>Q/E</b> cycles groups · <b>B</b> swaps creatures · <b>C</b> opens the codex.');
    this.sendOutAnim(this.playerModels[lead], this.pActive);
    setTimeout(() => {
      if (this.state !== 'battle') return;
      this.sendOutAnim(this.enemyModels[0], this.eActive);
      this.log(`${this.run.warden.name} sent out ${this.eActive.name}!`, 'enemy');
    }, 450);
    setTimeout(() => {
      if (this.state !== 'battle') return;
      this.setTurn('YOUR MOVE');
      this.updateUI();
    }, 1500);
    this.setTurn('DEPLOYING');
  }

  buildEnemyModels() {
    this.enemyModels = this.run.enemyTeam.map((creature) => {
      const model = createCreatureModel(creature);
      model.root.visible = false;
      this.scene.add(model.root);
      this.models.set(creature.id, model);
      return model;
    });
  }

  placeModel(model, position, rotation, visible = true) {
    if (!model) return;
    model.root.position.copy(position);
    model.root.rotation.set(0, rotation, 0);
    model.root.scale.setScalar(model.creature.scale);
    model.root.visible = visible;
    model.setOpacity(1);
    this.homes.set(model.creature.id, position.clone());
  }

  resetModel(model, creature, position, rotation, visible) {
    if (!model) return;
    model.root.position.copy(position);
    model.root.rotation.set(0, rotation, 0);
    model.root.scale.setScalar(creature.scale);
    model.root.visible = visible;
    model.setOpacity(1);
    this.homes.set(creature.id, position.clone());
  }

  /* ══════════════ UI ══════════════ */
  updateUI() {
    if (!this.battle || !['battle', 'end'].includes(this.state)) return;
    this.renderCombatant(this.dom.enemyPanel, this.eActive, this.battle.enemyTeam, this.battle.enemyActive, true);
    this.renderCombatant(this.dom.playerPanel, this.pActive, this.battle.playerTeam, this.battle.playerActive, false);
    this.dom.roundNum.textContent = String(this.battle.round);
    this.renderMoves();
    const bench = this.battle.playerTeam.filter((c, i) => !c.fainted && i !== this.battle.playerActive).length;
    this.dom.switchBtn.disabled = this.busy || bench === 0;
    const active = this.pActive;
    this.dom.activeSummary.textContent = active ? `${active.name} · ${active.ability.name}` : '';
  }

  renderCombatant(panel, creature, team, activeIndex, isEnemy) {
    if (!panel || !creature) return;
    const type = TYPES[creature.type];
    panel.style.setProperty('--t', type.color);
    const ratio = Math.max(0, creature.hp / creature.maxHp);
    const previous = panel.dataset.hp ? Number(panel.dataset.hp) : ratio;
    panel.innerHTML = panelMarkup(creature, team, activeIndex, isEnemy);
    panel.dataset.hp = String(ratio);
    const fill = $('.hp-fill', panel);
    const ghost = $('.hp-ghost', panel);
    if (fill) fill.style.width = `${Math.max(0, previous) * 100}%`;
    if (ghost) ghost.style.width = `${Math.max(0, previous) * 100}%`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (fill) fill.style.width = `${ratio * 100}%`;
        if (ghost) ghost.style.width = `${ratio * 100}%`;
      });
    });
  }

  renderMoves() {
    if (!this.battle) return;
    const active = this.pActive;
    if (!active) return;
    for (const tab of $$('.group-tab', this.dom.groupTabs)) {
      const group = tab.dataset.group;
      tab.classList.toggle('active', group === this.currentGroup);
      const usable = active.moves.filter((m) => m.group === group && m.pp > 0).length;
      const count = $(`[data-count="${group}"]`, this.dom.groupTabs);
      if (count) count.textContent = String(usable);
      tab.style.opacity = usable === 0 ? '0.45' : '';
    }
    const moves = active.moves
      .map((move, index) => ({ move, index }))
      .filter(({ move }) => move.group === this.currentGroup);
    const disabled = this.busy || this.state !== 'battle';
    if (!moves.length) {
      this.dom.moveGrid.innerHTML = '<div style="padding:20px;color:var(--muted-dim);font-size:10px;letter-spacing:.1em">No moves in this group.</div>';
    } else {
      this.dom.moveGrid.innerHTML = moves
        .map(({ move, index }) => moveCardMarkup(move, index, disabled || move.pp <= 0))
        .join('');
    }
  }

  setTurn(text) {
    this.dom.turnLabel.textContent = text;
  }

  log(text, kind = 'system') {
    if (!this.dom.battleLog) return;
    const line = document.createElement('div');
    line.className = `log-line ${kind}`;
    line.textContent = text;
    this.dom.battleLog.appendChild(line);
    while (this.dom.battleLog.children.length > 7) this.dom.battleLog.firstElementChild.remove();
  }

  showBanner(kicker, title, sub, duration = 2100) {
    clearTimeout(this.bannerTimer);
    this.dom.bannerKicker.textContent = kicker;
    this.dom.bannerTitle.textContent = title;
    this.dom.bannerSub.textContent = sub || '';
    this.dom.banner.classList.remove('hidden');
    this.bannerTimer = setTimeout(() => this.dom.banner.classList.add('hidden'), duration);
  }

  showToast(text, kind = '') {
    clearTimeout(this.toastTimer);
    this.dom.toast.textContent = text;
    this.dom.toast.className = kind;
    this.dom.toast.classList.remove('hidden');
    void this.dom.toast.offsetWidth;
    this.toastTimer = setTimeout(() => this.dom.toast.classList.add('hidden'), 1800);
  }

  showHint(html) {
    clearTimeout(this.hintTimer);
    this.dom.hintText.innerHTML = html;
    this.dom.hintBar.classList.remove('hidden');
    this.hintTimer = setTimeout(() => this.dom.hintBar.classList.add('hidden'), 12000);
  }

  hideHint() {
    clearTimeout(this.hintTimer);
    this.dom.hintBar.classList.add('hidden');
  }

  statName(stat) {
    return { atk: 'Attack', def: 'Defense', spa: 'Spirit', spd: 'Ward', spe: 'Speed' }[stat] || stat;
  }

  /* ══════════════ CAMERA / LOOP ══════════════ */
  updateCameraRig() {
    if (this.state === 'title') {
      this.camRig.pos.set(
        7.1 + Math.sin(this.time * 0.09) * 0.5,
        4.6 + Math.sin(this.time * 0.13) * 0.1,
        11.4 + Math.cos(this.time * 0.07) * 0.22,
      );
      this.camRig.target.set(0.6, 1.78, 0);
    } else if (this.state === 'select') {
      this.camRig.pos.set(Math.sin(this.time * 0.18) * 0.1, 3.85, 9.9);
      this.camRig.target.set(0, 1.38, -2.0);
    } else if (this.state === 'battle') {
      this.camRig.pos.set(0.7 + Math.sin(this.time * 0.24) * 0.13, 5.2 + Math.sin(this.time * 0.31) * 0.05, 13.4);
      this.camRig.target.set(0, 1.78, -0.4);
    } else if (this.state === 'end') {
      this.camRig.pos.set(1.2, 4.8, 14.2);
      this.camRig.target.set(0, 1.9, 0);
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.timer.update();
    const dt = Math.min(this.timer.getDelta(), 0.05);
    this.time += dt;
    this.updateTweens(dt);
    if (this.room) this.room.update(this.time, dt);
    if (this.stage) this.stage.update(this.time);
    for (const model of this.models.values()) {
      if (model.root.visible) model.update(this.time, dt);
    }
    this.effects.update(dt);
    this.updateCameraRig();
    const lerp = 1 - Math.exp(-dt * 3.4);
    this.camera.position.lerp(this.camRig.pos, lerp);
    this.cameraLook.lerp(this.camRig.target, lerp);
    this.shake *= Math.exp(-dt * 8);
    const shakeX = Math.sin(this.time * 91) * this.shake * 0.07;
    const shakeY = Math.cos(this.time * 77) * this.shake * 0.05;
    this.camera.position.x += shakeX;
    this.camera.position.y += shakeY;
    this.camera.lookAt(this.cameraLook);
    this.renderer.render(this.scene, this.camera);
  };

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  /* ══════════════ EVENTS ══════════════ */
  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    this.dom.beginBtn.addEventListener('click', () => this.enterRift());
    this.dom.diceBtn.addEventListener('click', () => {
      if (this.state !== 'title') return;
      this.audio.init();
      this.audio.click();
      const seed = randomSeed();
      this.loadTitle(seed);
    });
    this.dom.seedInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if (this.state === 'title') this.enterRift();
      }
    });
    this.dom.seedInput.addEventListener('input', () => {
      this.dom.seedInput.value = this.dom.seedInput.value.toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 16);
    });
    this.dom.howBtn.addEventListener('click', () => this.openCodex());
    this.dom.deployBtn.addEventListener('click', () => this.deploy());

    this.dom.groupTabs.addEventListener('click', (event) => {
      const tab = event.target.closest('.group-tab');
      if (!tab || this.state !== 'battle' || this.busy) return;
      this.currentGroup = tab.dataset.group;
      this.audio.init();
      this.audio.click();
      this.renderMoves();
    });

    this.dom.moveGrid.addEventListener('click', (event) => {
      const card = event.target.closest('.move-card');
      if (!card || card.disabled) return;
      this.audio.init();
      this.audio.click();
      this.resolveTurn(Number(card.dataset.move));
    });

    this.dom.switchBtn.addEventListener('click', () => this.openSwitch(false));
    this.dom.codexBtn.addEventListener('click', () => this.openCodex());
    this.dom.muteBtn.addEventListener('click', () => this.toggleMute());
    this.dom.hintClose.addEventListener('click', () => this.hideHint());
    this.dom.switchCancel.addEventListener('click', () => this.closeSwitch());
    this.dom.switchGrid.addEventListener('click', (event) => {
      const option = event.target.closest('.switch-option');
      if (!option) return;
      this.switchTo(Number(option.dataset.index));
    });

    for (const btn of $$('[data-close]')) {
      btn.addEventListener('click', () => {
        if (btn.dataset.close === 'switch') this.closeSwitch();
        else this.closeCodex();
      });
    }

    this.dom.endScreen.addEventListener('click', (event) => {
      if (event.target.closest('#rematchBtn')) this.rematch();
      if (event.target.closest('#newRiftBtn')) this.newRift();
    });

    this.dom.canvas.addEventListener('click', (event) => this.onCanvasClick(event));

    window.addEventListener('keydown', (event) => this.onKeyDown(event));
  }

  onCanvasClick(event) {
    if (this.state !== 'select') return;
    const rect = this.dom.canvas.getBoundingClientRect();
    const pointer = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, this.camera);
    const roots = this.playerModels.map((m) => m.root);
    const hits = raycaster.intersectObjects(roots, true);
    if (!hits.length) return;
    let node = hits[0].object;
    while (node && !roots.includes(node)) node = node.parent;
    if (!node) return;
    const index = this.playerModels.findIndex((m) => m.root === node);
    if (index >= 0) this.selectLead(index);
  }

  onKeyDown(event) {
    if (event.target.tagName === 'INPUT') return;
    if (event.key === 'Escape') {
      if (!this.dom.codexModal.classList.contains('hidden')) this.closeCodex();
      else if (!this.dom.switchModal.classList.contains('hidden') && !this.switchForced) this.closeSwitch();
      return;
    }
    if (this.modalOpen) return;
    if (event.key === 'm' || event.key === 'M') {
      this.toggleMute();
      return;
    }
    if (this.state === 'title') {
      if (event.key === 'Enter') this.enterRift();
      return;
    }
    if (this.state === 'select') {
      if (['1', '2', '3'].includes(event.key)) this.selectLead(Number(event.key) - 1);
      if (event.key === 'Enter' && !this.dom.deployBtn.disabled) this.deploy();
      return;
    }
    if (this.state === 'end') {
      if (event.key === 'Enter') this.newRift();
      return;
    }
    if (this.state !== 'battle' || this.busy) return;

    if (event.key === 'q' || event.key === 'Q') {
      this.cycleGroup(-1);
    } else if (event.key === 'e' || event.key === 'E') {
      this.cycleGroup(1);
    } else if (event.key === 'b' || event.key === 'B') {
      this.openSwitch(false);
    } else if (event.key === 'c' || event.key === 'C') {
      this.openCodex();
    } else if (event.key === '1' || event.key === '2') {
      const moves = this.pActive.moves
        .map((move, index) => ({ move, index }))
        .filter(({ move }) => move.group === this.currentGroup && move.pp > 0);
      const slot = Number(event.key) - 1;
      if (moves[slot]) {
        this.audio.init();
        this.resolveTurn(moves[slot].index);
      }
    }
  }

  cycleGroup(direction) {
    if (this.state !== 'battle' || this.busy) return;
    const index = GROUP_ORDER.indexOf(this.currentGroup);
    this.currentGroup = GROUP_ORDER[(index + direction + GROUP_ORDER.length) % GROUP_ORDER.length];
    this.audio.init();
    this.audio.click();
    this.renderMoves();
  }

  toggleMute() {
    this.audio.init();
    this.audio.setMuted(!this.audio.muted);
    this.dom.muteBtn.classList.toggle('muted', this.audio.muted);
    this.dom.muteBtn.title = this.audio.muted ? 'Unmute (M)' : 'Mute (M)';
    if (!this.audio.muted) this.audio.click();
  }

  /* ══════════════ CODEX ══════════════ */
  openCodex() {
    if (this.modalOpen) return;
    this.audio.init();
    this.audio.click();
    this.dom.codexBody.innerHTML = codexMarkup(this.run);
    this.dom.codexModal.classList.remove('hidden');
    this.modalOpen = true;
  }

  closeCodex() {
    this.dom.codexModal.classList.add('hidden');
    this.modalOpen = false;
    this.audio.click();
  }

  /* ══════════════ END / REMATCH ══════════════ */
  showEndScreen(victory) {
    if (this.state !== 'end') return;
    this.dom.endScreen.classList.remove('hidden');
    this.dom.hud.classList.add('hidden');
    this.dom.dock.classList.add('hidden');
    this.dom.hintBar.classList.add('hidden');
    const survivors = this.battle.playerTeam.filter((c) => !c.fainted).length;
    const felled = this.battle.enemyTeam.filter((c) => c.fainted).length;
    this.dom.endKicker.textContent = victory ? 'RIFT CLEARED' : 'RIFT LOST';
    this.dom.endTitle.textContent = victory ? 'CHAMPION OF THE RIFT' : 'THE RIFT CLAIMS YOU';
    this.dom.endText.textContent = victory
      ? `${this.run.warden.name} falls. Your procedural trio carves its names into the arena — and the next seed is already waiting.`
      : `${this.run.warden.name} holds the arena. The seed is not spent: rematch with the same trio, or forge an entirely new rift.`;
    this.dom.endStats.innerHTML = [
      ['ROUNDS', this.battle.round],
      ['DAMAGE DEALT', Math.round(this.battle.damageDealt)],
      ['DAMAGE TAKEN', Math.round(this.battle.damageTaken)],
      ['SURVIVORS', `${survivors} / 3`],
      ['FOES FELLED', `${felled} / 3`],
      ['SEED', this.run.seed],
    ].map(([label, value]) => `<div class="end-stat"><span>${label}</span><b>${value}</b></div>`).join('');
    this.dom.endSeed.textContent = this.run.seed;
    this.dom.rematchBtn.classList.remove('hidden');
    this.audio.setMuted(this.audio.muted);
  }

  rematch() {
    if (this.state !== 'end') return;
    this.audio.init();
    this.audio.confirm();
    clearTimeout(this.endTimer);
    restoreTeam(this.run.playerTeam);
    restoreTeam(this.run.enemyTeam);
    this.battle = {
      playerTeam: this.run.playerTeam,
      enemyTeam: this.run.enemyTeam,
      playerActive: 0,
      enemyActive: 0,
      round: 1,
      damageDealt: 0,
      damageTaken: 0,
      startedAt: Date.now(),
    };
    this.playerModels.forEach((model, index) => {
      this.resetModel(model, this.run.playerTeam[index], this.PLAYER_SPOT, this.PLAYER_ROT, index === 0);
    });
    this.enemyModels.forEach((model, index) => {
      this.resetModel(model, this.run.enemyTeam[index], this.ENEMY_SPOT, this.ENEMY_ROT, index === 0);
    });
    this.dom.endScreen.classList.add('hidden');
    this.dom.hud.classList.remove('hidden');
    this.dom.dock.classList.remove('hidden');
    this.dom.battleLog.innerHTML = '';
    this.state = 'battle';
    this.busy = false;
    this.currentGroup = 'physical';
    this.modalOpen = false;
    this.dom.roundNum.textContent = '1';
    this.dom.duelRoom.textContent = this.run.room.name;
    this.updateUI();
    this.setTurn('YOUR MOVE');
    this.log('The rift resets. A rematch begins.', 'system');
    this.showBanner('REMATCH', this.run.room.name, this.run.warden.name, 2000);
    this.audio.cry(this.pActive.type, this.pActive.seed);
    setTimeout(() => this.audio.cry(this.eActive.type, this.eActive.seed), 350);
    this.updateCameraRig();
  }

  newRift() {
    if (this.state !== 'end') return;
    clearTimeout(this.endTimer);
    const seed = randomSeed();
    this.dom.endScreen.classList.add('hidden');
    this.dom.seedInput.value = seed;
    this.enterRift(seed);
  }
}

// Copy descriptors, not values: Object.assign would invoke the pActive/eActive
// getters on battleMethods and freeze their null results onto the prototype.
for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(battleMethods))) {
  Object.defineProperty(RiftGame.prototype, key, descriptor);
}
