import * as THREE from 'three';
import { GROUPS, STATUS_INFO, TYPES } from './data.js';
import {
  applyStageChange, calcDamage, chooseAiMove, effectiveSpeed,
} from './battle.js';
import { switchOptionMarkup } from './ui.js';

const ZERO_STAGES = () => ({ atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });

export const battleMethods = {
  get pActive() {
    return this.battle ? this.battle.playerTeam[this.battle.playerActive] : null;
  },

  get eActive() {
    return this.battle ? this.battle.enemyTeam[this.battle.enemyActive] : null;
  },

  getModel(creature) {
    return this.models.get(creature.id);
  },

  homePos(creature) {
    const home = this.homes.get(creature.id);
    if (home) return home.clone();
    const model = this.getModel(creature);
    return model ? model.root.position.clone() : new THREE.Vector3();
  },

  headPos(creature) {
    const model = this.getModel(creature);
    const home = this.homePos(creature);
    if (!model) return home;
    const scale = model.root.scale.y || 1;
    return home.add(new THREE.Vector3(0, model.height * scale * 0.92, 0));
  },

  chestPos(creature) {
    const model = this.getModel(creature);
    const home = this.homePos(creature);
    if (!model) return home;
    const scale = model.root.scale.y || 1;
    return home.add(new THREE.Vector3(0, model.height * scale * 0.52, 0));
  },

  async resolveTurn(moveIndex) {
    if (this.state !== 'battle' || this.busy || this.modalOpen) return;
    const player = this.pActive;
    const enemy = this.eActive;
    if (!player || !enemy || player.fainted || enemy.fainted) return;
    const playerMove = player.moves[moveIndex];
    if (!playerMove || playerMove.pp <= 0) return;
    const enemyMove = chooseAiMove(enemy, player);
    this.busy = true;
    this.setTurn('RESOLVING');
    this.updateUI();

    const actions = [
      { side: 'player', creature: player, target: enemy, move: playerMove },
      { side: 'enemy', creature: enemy, target: player, move: enemyMove },
    ].filter((a) => a.move);

    actions.sort((a, b) => {
      const pri = (b.move.priority || 0) - (a.move.priority || 0);
      if (pri !== 0) return pri;
      const sa = effectiveSpeed(a.creature);
      const sb = effectiveSpeed(b.creature);
      if (sa !== sb) return sb - sa;
      return Math.random() - 0.5;
    });

    for (const action of actions) {
      if (this.state !== 'battle') return;
      if (action.creature.fainted || action.target.fainted) continue;
      await this.executeAction(action);
      if (this.state !== 'battle') return;
      if (action.target.fainted) break;
    }
    if (this.state !== 'battle') return;
    await this.afterActions();
  },

  async executeAction({ side, creature, target, move }) {
    if (!move || creature.fainted || target.fainted) return;
    if (creature.status === 'chill' && Math.random() < 0.2) {
      this.log(`${creature.name} is too chilled to move!`, 'bad');
      this.effects.aura(this.chestPos(creature), '#7dd3fc', { count: 14, radius: 0.8 });
      this.audio.miss();
      await this.sleep(700);
      return;
    }
    if (move.pp <= 0) {
      this.log(`${creature.name} has no power left for ${move.name}!`, 'bad');
      return;
    }
    move.pp -= 1;
    this.updateUI();
    this.log(`${creature.name} used ${move.name}!`, side);
    this.showToast(move.name);
    this.audio.attack(move.group, move.type);

    if (move.group === 'status') {
      await this.animateStatus(creature, target, move, side);
      if (Math.random() * 100 > move.accuracy) {
        this.effects.floater(this.headPos(target), 'MISS', 'miss');
        this.log(`${creature.name}'s ${move.name} missed!`, 'bad');
        this.audio.miss();
        await this.sleep(450);
        return;
      }
      let applied = false;
      for (const effect of move.effects) {
        if (effect.chance !== undefined && Math.random() > effect.chance) continue;
        const ok = await this.applyEffect(creature, target, effect, side);
        applied = applied || ok;
      }
      if (!applied) {
        this.log('But nothing happened!', 'system');
        this.showToast('NO EFFECT', 'bad');
      }
      this.updateUI();
      await this.sleep(420);
      return;
    }

    const result = calcDamage(creature, target, move);
    await this.animateAttack(creature, target, move, side);

    if (result.missed) {
      this.effects.floater(this.headPos(target), 'MISS', 'miss');
      this.log(`${creature.name}'s attack missed!`, 'bad');
      this.audio.miss();
      this.updateUI();
      await this.sleep(420);
      return;
    }

    await this.applyDamage(creature, target, move, result, side);

    if (!target.fainted && move.effects && move.effects.length) {
      for (const effect of move.effects) {
        if (effect.chance !== undefined && Math.random() > effect.chance) continue;
        await this.applyEffect(creature, target, effect, side);
      }
    }
    this.updateUI();
    await this.sleep(380);
  },

  async animateAttack(attacker, target, move, side) {
    const model = this.getModel(attacker);
    if (!model) return;
    const home = this.homePos(attacker);
    const targetHome = this.homePos(target);
    const dir = targetHome.clone().sub(home).setY(0).normalize();
    const baseScale = this.creatureScale(attacker);
    const sign = side === 'player' ? 1 : -1;
    const color = TYPES[move.type].color;

    if (move.group === 'physical') {
      await this.tween(0.11, (p) => {
        model.root.position.copy(home).addScaledVector(dir, -0.22 * p);
        model.root.rotation.z = -sign * 0.06 * p;
      });
      await this.tween(0.13, (p) => {
        model.root.position.copy(home).addScaledVector(dir, 0.95 * p);
        model.root.rotation.z = sign * 0.12 * p;
      });
      this.effects.slash(this.chestPos(target), color, sign);
      this.shake = Math.max(this.shake, 0.5);
      await this.sleep(100);
      await this.tween(0.24, (p) => {
        model.root.position.copy(home).addScaledVector(dir, 0.95 * (1 - p));
        model.root.rotation.z = sign * 0.12 * (1 - p);
      });
    } else {
      await this.tween(0.16, (p) => {
        model.root.position.copy(home).add(new THREE.Vector3(0, 0.18 * p, 0));
        model.root.scale.setScalar(baseScale * (1 + 0.05 * p));
      });
      const from = this.chestPos(attacker);
      const to = this.chestPos(target);
      await this.effects.projectile(from, to, color, { duration: 0.52, size: 0.2, arc: 1.4 });
      this.effects.burst(to, color, { count: 36, speed: 4.6, size: 0.16, life: 0.7 });
      this.effects.ring(to, color, { radius: 1.5, life: 0.5 });
      this.shake = Math.max(this.shake, 0.65);
      await this.tween(0.18, (p) => {
        model.root.position.copy(home).add(new THREE.Vector3(0, 0.18 * (1 - p), 0));
        model.root.scale.setScalar(baseScale * (1.05 - 0.05 * p));
      });
    }
    model.root.position.copy(home);
    model.root.rotation.set(0, model.root.rotation.y, 0);
    model.root.scale.setScalar(baseScale);
  },

  async animateStatus(creature, target, move, side) {
    const model = this.getModel(creature);
    if (!model) return;
    const home = this.homePos(creature);
    const baseScale = this.creatureScale(creature);
    const type = TYPES[move.type];
    const targetEffects = move.effects.filter((e) => e.target === 'foe');
    const color = targetEffects.length ? TYPES[move.type].color : '#7ff0b0';
    this.effects.aura(this.chestPos(creature), type.color, { count: 24, radius: 1.0, life: 1.2 });
    this.effects.ring(home.clone().add(new THREE.Vector3(0, 0.03, 0)), type.color, { flat: true, radius: 1.5, life: 0.8 });
    if (targetEffects.length) {
      this.effects.aura(this.chestPos(target), color, { count: 16, radius: 0.7, life: 0.9 });
    }
    await this.tween(0.38, (p) => {
      model.root.scale.setScalar(baseScale * (1 + Math.sin(p * Math.PI) * 0.07));
    });
    model.root.scale.setScalar(baseScale);
    await this.sleep(260);
  },

  async applyEffect(user, target, effect, side) {
    const targetCreature = effect.target === 'foe' ? target : user;
    const model = this.getModel(targetCreature);
    if (!model || targetCreature.fainted) return false;
    const typeColor = TYPES[user.type].color;
    const head = this.headPos(targetCreature);

    if (effect.kind === 'buff') {
      const changed = applyStageChange(user, effect.stat, effect.stages);
      if (!changed) return false;
      this.effects.aura(this.chestPos(user), '#ffe08a', { count: 18, radius: 0.8 });
      this.effects.floater(head, `${effect.stat.toUpperCase()} ▲${effect.stages}`, 'status', '#ffe08a');
      this.log(`${user.name}'s ${this.statName(effect.stat)} rose!`, 'good');
      if (user.ability.key === 'boostSpeed' && effect.stat !== 'spe') {
        const extra = applyStageChange(user, 'spe', 1);
        if (extra) {
          this.effects.floater(head.clone().add(new THREE.Vector3(0, 0.35, 0)), 'SPE ▲1', 'status', '#ffe08a');
          this.log(`${user.ability.name} also raised Speed!`, 'good');
        }
      }
      this.audio.buff();
      this.updateUI();
      await this.sleep(220);
      return true;
    }

    if (effect.kind === 'debuff') {
      const changed = applyStageChange(target, effect.stat, -effect.stages);
      if (!changed) return false;
      this.effects.aura(this.chestPos(target), '#a78bfa', { count: 16, radius: 0.8 });
      this.effects.floater(head, `${effect.stat.toUpperCase()} ▼${effect.stages}`, 'status', '#c4b5fd');
      this.log(`${target.name}'s ${this.statName(effect.stat)} fell!`, 'good');
      this.audio.debuff();
      this.updateUI();
      await this.sleep(220);
      return true;
    }

    if (effect.kind === 'heal') {
      const before = targetCreature.hp;
      const amount = Math.max(1, Math.round(targetCreature.maxHp * effect.amount));
      targetCreature.hp = Math.min(targetCreature.maxHp, targetCreature.hp + amount);
      const healed = targetCreature.hp - before;
      if (healed <= 0) return false;
      this.effects.aura(this.chestPos(targetCreature), '#7ff0b0', { count: 24, radius: 0.9, life: 1.3 });
      this.effects.floater(head, `+${healed}`, 'heal');
      this.log(`${targetCreature.name} restored ${healed} HP.`, 'good');
      this.audio.heal();
      this.updateUI();
      await this.sleep(320);
      return true;
    }

    if (effect.kind === 'barrier') {
      const amount = Math.round(targetCreature.maxHp * effect.amount);
      const before = targetCreature.barrier;
      targetCreature.barrier = Math.max(targetCreature.barrier, amount);
      if (targetCreature.barrier <= before) return false;
      this.effects.aura(this.chestPos(targetCreature), '#7dd3fc', { count: 20, radius: 1.0 });
      this.effects.ring(this.homePos(targetCreature), '#7dd3fc', { flat: true, radius: 1.2, life: 0.7 });
      this.effects.floater(head, `BARRIER ${targetCreature.barrier}`, 'status', '#7dd3fc');
      this.log(`${targetCreature.name} raised a barrier!`, 'good');
      this.audio.buff();
      this.updateUI();
      await this.sleep(280);
      return true;
    }

    if (effect.kind === 'status') {
      if (targetCreature.status) {
        this.log(`${targetCreature.name} already has an affliction.`, 'system');
        return false;
      }
      targetCreature.status = effect.status;
      const info = STATUS_INFO[effect.status];
      this.effects.aura(this.chestPos(targetCreature), info.color, { count: 22, radius: 0.9, life: 1.1 });
      this.effects.floater(head, `${info.icon} ${info.name.toUpperCase()}`, 'status', info.color);
      this.log(`${targetCreature.name} is ${info.name.toLowerCase()}ed!`, 'good');
      this.audio.debuff();
      this.updateUI();
      await this.sleep(320);
      return true;
    }

    if (effect.kind === 'cleanse') {
      if (!targetCreature.status) return false;
      targetCreature.status = null;
      this.effects.aura(this.chestPos(targetCreature), '#e8f7ff', { count: 20, radius: 0.9 });
      this.effects.floater(head, 'CURED', 'status', '#e8f7ff');
      this.log(`${targetCreature.name} was cured.`, 'good');
      this.audio.heal();
      this.updateUI();
      await this.sleep(250);
      return true;
    }
    return false;
  },

  async applyDamage(attacker, defender, move, result, side) {
    let damage = result.damage;
    let absorbed = 0;
    if (defender.barrier > 0) {
      absorbed = Math.min(defender.barrier, Math.round(damage * 0.55));
      defender.barrier -= absorbed;
      damage -= absorbed;
    }
    defender.hp = Math.max(0, defender.hp - damage);
    if (side === 'player') this.battle.damageDealt += damage;
    else this.battle.damageTaken += damage;

    const head = this.headPos(defender);
    const typeColor = TYPES[move.type].color;
    if (damage > 0) {
      this.effects.floater(head, `-${damage}`, result.crit ? 'crit' : '', typeColor);
    }
    if (absorbed > 0) {
      this.effects.floater(head.clone().add(new THREE.Vector3(0, 0.42, 0)), `BLOCKED ${absorbed}`, 'small', '#7dd3fc');
      this.log(`The barrier absorbed ${absorbed} damage.`, 'system');
    }
    if (result.crit) {
      this.effects.floater(head.clone().add(new THREE.Vector3(0, 0.85, 0)), 'CRITICAL', 'small', '#ffe08a');
      this.log('A critical hit!', 'good');
    }
    if (result.typeMult > 1.2) {
      this.log("It's super effective!", 'good');
      this.showToast('SUPER EFFECTIVE', 'good');
    } else if (result.typeMult < 0.9) {
      this.log("It's not very effective...", 'bad');
    }

    const model = this.getModel(defender);
    if (model) {
      model.flash('#ffffff', 0.95);
      this.hitShake(defender);
    }
    this.effects.burst(this.chestPos(defender), typeColor, { count: 20, speed: 3.2, size: 0.12, life: 0.5 });
    this.effects.ring(this.chestPos(defender), typeColor, { radius: 1.1, life: 0.4 });
    this.shake = Math.max(this.shake, 0.7);
    this.audio.hit(result.typeMult);
    this.updateUI();

    if (attacker.ability.key === 'lifesteal' && damage > 0 && !attacker.fainted) {
      const heal = Math.max(1, Math.round(damage * 0.15));
      const before = attacker.hp;
      attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
      if (attacker.hp > before) {
        this.effects.floater(this.headPos(attacker), `+${attacker.hp - before}`, 'heal');
        this.log(`${attacker.ability.name} restored ${attacker.hp - before} HP.`, 'good');
        this.updateUI();
      }
    }

    if (defender.hp <= 0) await this.knockOut(defender);
  },

  hitShake(creature) {
    const model = this.getModel(creature);
    if (!model) return;
    const home = this.homePos(creature);
    this.tween(0.32, (p) => {
      const amp = Math.sin(p * Math.PI * 9) * 0.14 * (1 - p);
      model.root.position.copy(home).add(new THREE.Vector3(amp, 0, amp * 0.45));
    }).then(() => {
      if (!creature.fainted) model.root.position.copy(home);
    });
  },

  async knockOut(creature) {
    if (creature.fainted) return;
    creature.fainted = true;
    creature.hp = 0;
    creature.barrier = 0;
    creature.status = null;
    this.log(`${creature.name} fainted!`, 'bad');
    this.audio.faint();
    this.updateUI();
    const model = this.getModel(creature);
    if (model) {
      const home = this.homePos(creature);
      const dir = creature.side === 'player' ? 1 : -1;
      await this.tween(0.8, (p) => {
        model.root.rotation.z = dir * 1.32 * p;
        model.root.position.copy(home).add(new THREE.Vector3(0, -p * 0.25, 0));
        model.setOpacity(1 - p * 0.82);
      });
      model.root.visible = false;
      model.root.rotation.set(0, model.root.rotation.y, 0);
      model.root.position.copy(home);
      model.setOpacity(1);
    }
    this.updateUI();
    await this.sleep(350);
  },

  async endOfTurnEffects() {
    const actives = [this.pActive, this.eActive].filter(Boolean);
    for (const creature of actives) {
      if (this.state !== 'battle') return;
      if (creature.fainted) continue;
      const model = this.getModel(creature);
      if (!model) continue;

      if (creature.ability.key === 'heal' && creature.hp < creature.maxHp) {
        const amount = Math.max(1, Math.round(creature.maxHp * 0.06));
        const before = creature.hp;
        creature.hp = Math.min(creature.maxHp, creature.hp + amount);
        if (creature.hp > before) {
          this.effects.aura(this.chestPos(creature), '#7ff0b0', { count: 14, radius: 0.8 });
          this.effects.floater(this.headPos(creature), `+${creature.hp - before}`, 'heal');
          this.log(`${creature.ability.name} restored ${creature.hp - before} HP.`, 'good');
          this.updateUI();
          await this.sleep(240);
        }
      }

      if (creature.status === 'regen' && creature.hp < creature.maxHp) {
        const amount = Math.max(1, Math.round(creature.maxHp / 8));
        const before = creature.hp;
        creature.hp = Math.min(creature.maxHp, creature.hp + amount);
        if (creature.hp > before) {
          this.effects.aura(this.chestPos(creature), '#7ff0b0', { count: 16, radius: 0.9 });
          this.effects.floater(this.headPos(creature), `+${creature.hp - before}`, 'heal');
          this.log(`Regen restored ${creature.hp - before} HP to ${creature.name}.`, 'good');
          this.updateUI();
          await this.sleep(240);
        }
      }

      if (creature.status === 'burn' || creature.status === 'poison') {
        const info = STATUS_INFO[creature.status];
        const amount = creature.status === 'burn'
          ? Math.max(1, Math.round(creature.maxHp / 16))
          : Math.max(1, Math.round(creature.maxHp / 10));
        creature.hp = Math.max(0, creature.hp - amount);
        this.effects.aura(this.chestPos(creature), info.color, { count: 12, radius: 0.8 });
        this.effects.floater(this.headPos(creature), `-${amount}`, '', info.color);
        this.log(`${creature.name} is hurt by ${info.name.toLowerCase()}!`, 'bad');
        model.flash(info.color, 0.6);
        this.audio.hit(0.65);
        this.updateUI();
        await this.sleep(360);
        if (creature.hp <= 0) await this.knockOut(creature);
      }

      if (creature.ability.key === 'statusCure' && creature.status && !creature.fainted) {
        if (Math.random() < 0.3) {
          creature.status = null;
          this.effects.aura(this.chestPos(creature), '#e8f7ff', { count: 16, radius: 0.8 });
          this.effects.floater(this.headPos(creature), 'CURED', 'status', '#e8f7ff');
          this.log(`${creature.ability.name} cured ${creature.name}.`, 'good');
          this.updateUI();
          await this.sleep(220);
        }
      }
    }
  },

  async afterActions() {
    if (this.state !== 'battle') return;
    if (this.battle.playerTeam.every((c) => c.fainted)) {
      await this.endBattle(false);
      return;
    }
    if (this.battle.enemyTeam.every((c) => c.fainted)) {
      await this.endBattle(true);
      return;
    }

    await this.endOfTurnEffects();
    if (this.state !== 'battle') return;

    if (this.battle.playerTeam.every((c) => c.fainted)) {
      await this.endBattle(false);
      return;
    }
    if (this.battle.enemyTeam.every((c) => c.fainted)) {
      await this.endBattle(true);
      return;
    }

    const playerFainted = this.pActive.fainted;
    const enemyFainted = this.eActive.fainted;
    if (enemyFainted) await this.sendNextEnemy();
    if (playerFainted) {
      this.openSwitch(true);
      return;
    }

    this.battle.round += 1;
    this.busy = false;
    this.updateUI();
    this.setTurn('YOUR MOVE');
    this.log(`— Round ${this.battle.round} —`, 'system');
  },

  async sendNextEnemy() {
    // The warden sends creatures in a fixed order: two initiates, then the ace.
    const index = this.battle.enemyTeam.findIndex((c) => !c.fainted);
    if (index < 0) return false;
    const next = this.battle.enemyTeam[index];
    this.battle.enemyActive = index;
    next.stages = ZERO_STAGES();
    const model = this.enemyModels[index];
    if (!model) return false;
    this.placeModel(model, this.ENEMY_SPOT, this.ENEMY_ROT, true);
    this.log(`${this.run.warden.name} sent out ${next.name}!`, 'enemy');
    this.updateUI();
    await this.sendOutAnim(model, next);
    await this.sleep(420);
    return true;
  },

  async sendOutAnim(model, creature) {
    const home = this.homePos(creature);
    const baseScale = this.creatureScale(creature);
    model.root.visible = true;
    model.setOpacity(0);
    model.root.scale.setScalar(baseScale * 0.2);
    this.effects.ring(home.clone().add(new THREE.Vector3(0, 0.04, 0)), TYPES[creature.type].color, { flat: true, radius: 1.4, life: 0.7 });
    this.effects.aura(this.chestPos(creature), TYPES[creature.type].color, { count: 18, radius: 0.8, life: 0.8 });
    this.audio.sendOut();
    this.audio.cry(creature.type, creature.seed);
    await this.tween(0.42, (p) => {
      model.root.scale.setScalar(baseScale * (0.2 + p * 0.8));
      model.setOpacity(Math.min(1, p * 1.5));
    });
    model.root.scale.setScalar(baseScale);
    model.setOpacity(1);
  },

  async recallAnim(model) {
    if (!model) return;
    const baseScale = model.root.scale.y || 1;
    await this.tween(0.28, (p) => {
      model.root.scale.setScalar(baseScale * (1 - p * 0.8));
      model.setOpacity(1 - p);
    });
    model.root.visible = false;
    model.root.scale.setScalar(baseScale);
    model.setOpacity(1);
  },

  openSwitch(forced = false) {
    if (this.state !== 'battle' || this.modalOpen) return;
    if (!forced && this.busy) return;
    const team = this.battle.playerTeam;
    const options = team
      .map((c, index) => ({ c, index }))
      .filter(({ c, index }) => !c.fainted && index !== this.battle.playerActive);
    if (!options.length) {
      if (forced) this.endBattle(false);
      return;
    }
    this.switchForced = forced;
    this.busy = true;
    this.modalOpen = true;
    this.dom.switchGrid.innerHTML = options.map(({ c, index }) => switchOptionMarkup(c, index)).join('');
    this.dom.switchNote.textContent = forced
      ? 'Your creature fainted. Choose the next one to enter the rift.'
      : 'Switching uses your action for the round. The Warden will attack.';
    this.dom.switchCancel.classList.toggle('hidden', forced);
    this.dom.switchModal.classList.remove('hidden');
    this.audio.click();
    this.updateUI();
  },

  closeSwitch() {
    if (this.switchForced) return;
    this.dom.switchModal.classList.add('hidden');
    this.modalOpen = false;
    this.busy = false;
    this.switchForced = false;
    this.updateUI();
    this.audio.click();
  },

  async switchTo(index) {
    if (this.state !== 'battle') return;
    const team = this.battle.playerTeam;
    const target = team[index];
    if (!target || target.fainted || index === this.battle.playerActive) return;
    const forced = this.switchForced;
    this.dom.switchModal.classList.add('hidden');
    this.modalOpen = false;
    this.switchForced = false;
    this.audio.click();

    if (forced) {
      this.busy = true;
      this.battle.playerActive = index;
      target.stages = ZERO_STAGES();
      const model = this.playerModels[index];
      this.placeModel(model, this.PLAYER_SPOT, this.PLAYER_ROT, true);
      this.log(`Go, ${target.name}!`, 'player');
      this.updateUI();
      await this.sendOutAnim(model, target);
      this.battle.round += 1;
      this.busy = false;
      this.updateUI();
      this.setTurn('YOUR MOVE');
      this.log(`— Round ${this.battle.round} —`, 'system');
      return;
    }

    this.busy = true;
    this.updateUI();
    const old = this.pActive;
    const oldModel = this.getModel(old);
    if (oldModel && !old.fainted) {
      this.log(`You recalled ${old.name}.`, 'player');
      await this.recallAnim(oldModel);
    }
    this.battle.playerActive = index;
    target.stages = ZERO_STAGES();
    const model = this.playerModels[index];
    this.placeModel(model, this.PLAYER_SPOT, this.PLAYER_ROT, true);
    this.log(`Go, ${target.name}!`, 'player');
    this.updateUI();
    await this.sendOutAnim(model, target);

    const enemy = this.eActive;
    const enemyMove = enemy && !enemy.fainted ? chooseAiMove(enemy, target) : null;
    if (enemyMove) {
      await this.executeAction({ side: 'enemy', creature: enemy, target, move: enemyMove });
    }
    if (this.state === 'battle') await this.afterActions();
  },

  async endBattle(victory) {
    if (this.state === 'end') return;
    this.state = 'end';
    this.busy = true;
    this.modalOpen = false;
    this.dom.switchModal.classList.add('hidden');
    this.dom.codexModal.classList.add('hidden');
    this.dom.hintBar.classList.add('hidden');
    this.updateUI();
    this.setTurn('DUEL OVER');
    this.log(victory ? `${this.run.warden.name} has been defeated!` : 'Your trio has fallen...', victory ? 'good' : 'bad');
    this.showBanner(
      victory ? 'RIFT CLEARED' : 'RIFT CLAIMED',
      victory ? 'CHAMPION' : 'DEFEAT',
      victory ? this.run.room.name : this.run.warden.name,
      2400,
    );
    if (victory) {
      this.audio.victory();
      const model = this.getModel(this.pActive);
      if (model) {
        const base = this.creatureScale(this.pActive);
        this.tween(1.2, (p) => {
          const bounce = Math.abs(Math.sin(p * Math.PI * 3)) * (1 - p) * 0.35;
          model.root.position.y = this.homePos(this.pActive).y + bounce;
          model.root.scale.setScalar(base * (1 + Math.sin(p * Math.PI) * 0.05));
        });
      }
    } else {
      this.audio.defeat();
    }
    clearTimeout(this.endTimer);
    this.endTimer = setTimeout(() => this.showEndScreen(victory), 1900);
  },
};
