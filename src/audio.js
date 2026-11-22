const TYPE_PITCH = {
  ember: 180, verdant: 240, tide: 320, volt: 420, lumen: 520, umbra: 140,
};

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.ambient = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.32;
    this.master.connect(this.ctx.destination);
    this.startAmbient();
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.32, this.ctx.currentTime, 0.05);
  }

  tone({ freq = 440, dur = 0.18, type = 'sine', gain = 0.2, slide = 0, delay = 0, filter = 0 }) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = osc;
    if (filter) {
      const f = this.ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      osc.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  noise({ dur = 0.2, gain = 0.2, delay = 0, lowpass = 1400, highpass = 0 }) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const len = Math.max(1, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = lowpass;
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = highpass;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(hp);
    hp.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  click() {
    this.tone({ freq: 620, dur: 0.06, type: 'triangle', gain: 0.09, slide: -120 });
  }

  hover() {
    this.tone({ freq: 880, dur: 0.035, type: 'sine', gain: 0.03 });
  }

  select() {
    this.tone({ freq: 420, dur: 0.09, type: 'triangle', gain: 0.11 });
    this.tone({ freq: 630, dur: 0.12, type: 'triangle', gain: 0.09, delay: 0.06 });
  }

  confirm() {
    [392, 523, 659].forEach((f, i) => this.tone({ freq: f, dur: 0.22, type: 'triangle', gain: 0.1, delay: i * 0.07 }));
  }

  cry(type, seed = 1) {
    if (!this.ctx || this.muted) return;
    const base = (TYPE_PITCH[type] || 260) * (0.9 + ((seed % 17) / 17) * 0.3);
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    osc.type = type === 'volt' ? 'square' : type === 'umbra' ? 'sawtooth' : 'triangle';
    osc2.type = 'sine';
    osc.frequency.setValueAtTime(base * 1.6, t);
    osc.frequency.exponentialRampToValueAtTime(base * 0.7, t + 0.32);
    osc2.frequency.setValueAtTime(base * 0.8, t);
    osc2.frequency.exponentialRampToValueAtTime(base * 1.15, t + 0.35);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(2400, t);
    f.frequency.exponentialRampToValueAtTime(500, t + 0.4);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.14, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    osc.connect(f);
    osc2.connect(f);
    f.connect(g);
    g.connect(this.master);
    osc.start(t); osc2.start(t);
    osc.stop(t + 0.48); osc2.stop(t + 0.48);
    this.noise({ dur: 0.18, gain: 0.04, lowpass: 900, delay: 0.02 });
  }

  attack(group, type) {
    if (group === 'physical') {
      this.noise({ dur: 0.22, gain: 0.16, lowpass: 900, highpass: 120 });
      this.tone({ freq: 110, dur: 0.2, type: 'square', gain: 0.1, slide: -50, filter: 500 });
    } else if (group === 'special') {
      this.tone({ freq: TYPE_PITCH[type] || 300, dur: 0.3, type: 'sawtooth', gain: 0.09, slide: 500, filter: 2200 });
      this.noise({ dur: 0.3, gain: 0.07, lowpass: 3000, highpass: 600 });
    } else {
      [523, 659, 784].forEach((f, i) => this.tone({ freq: f, dur: 0.28, type: 'sine', gain: 0.06, delay: i * 0.05 }));
    }
  }

  hit(mult = 1) {
    const m = Math.min(1.6, Math.max(0.7, mult));
    this.noise({ dur: 0.26, gain: 0.2 * m, lowpass: 1200, highpass: 60 });
    this.tone({ freq: 90, dur: 0.24, type: 'square', gain: 0.12 * m, slide: -40, filter: 600 });
    if (mult > 1.2) this.tone({ freq: 780, dur: 0.18, type: 'triangle', gain: 0.07, delay: 0.02 });
  }

  miss() {
    this.tone({ freq: 330, dur: 0.18, type: 'sine', gain: 0.06, slide: -120 });
  }

  heal() {
    [523, 659, 784, 1047].forEach((f, i) => this.tone({ freq: f, dur: 0.3, type: 'sine', gain: 0.06, delay: i * 0.055 }));
  }

  buff() {
    [392, 523, 659, 784].forEach((f, i) => this.tone({ freq: f, dur: 0.26, type: 'triangle', gain: 0.05, delay: i * 0.05 }));
  }

  debuff() {
    [440, 370, 311, 262].forEach((f, i) => this.tone({ freq: f, dur: 0.22, type: 'triangle', gain: 0.045, delay: i * 0.05 }));
  }

  faint() {
    this.tone({ freq: 300, dur: 0.7, type: 'sawtooth', gain: 0.1, slide: -240, filter: 900 });
    this.noise({ dur: 0.5, gain: 0.06, lowpass: 500 });
  }

  sendOut() {
    this.tone({ freq: 220, dur: 0.3, type: 'triangle', gain: 0.1, slide: 440 });
    this.noise({ dur: 0.25, gain: 0.05, lowpass: 2000 });
  }

  victory() {
    [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone({ freq: f, dur: 0.6, type: 'triangle', gain: 0.09, delay: i * 0.13 }));
    this.tone({ freq: 262, dur: 1.6, type: 'sine', gain: 0.08, delay: 0.1 });
  }

  defeat() {
    [330, 294, 262, 196].forEach((f, i) => this.tone({ freq: f, dur: 0.8, type: 'sawtooth', gain: 0.07, delay: i * 0.18, filter: 700 }));
  }

  startAmbient() {
    if (!this.ctx || this.ambient) return;
    const t = this.ctx.currentTime;
    const g = this.ctx.createGain();
    g.gain.value = 0.018;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 420;
    const oscs = [55, 82.4, 110.5].map((freq) => {
      const o = this.ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      o.connect(f);
      o.start(t);
      return o;
    });
    const lfo = this.ctx.createOscillator();
    const lg = this.ctx.createGain();
    lfo.frequency.value = 0.07;
    lg.gain.value = 120;
    lfo.connect(lg);
    lg.connect(f.frequency);
    lfo.start(t);
    f.connect(g);
    g.connect(this.master);
    this.ambient = { oscs, lfo, g };
  }
}
