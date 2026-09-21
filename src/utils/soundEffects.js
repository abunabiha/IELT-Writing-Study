// Web Audio API Sound Synthesizer (No external assets required)

class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  setMuted(val) {
    this.muted = !!val;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playClick() {
    this.playTone(600, 'triangle', 0.05, 0.05);
  }

  playCorrect() {
    if (this.muted) return;
    // Harmonic pleasant chime (C5 -> E5 -> G5)
    this.playTone(523.25, 'sine', 0.12, 0.12, 0);
    this.playTone(659.25, 'sine', 0.15, 0.12, 0.08);
    this.playTone(783.99, 'sine', 0.25, 0.15, 0.16);
  }

  playWrong() {
    if (this.muted) return;
    // Low, soft, non-punishing thud
    this.playTone(220, 'sawtooth', 0.15, 0.08, 0);
    this.playTone(196, 'sawtooth', 0.2, 0.08, 0.08);
  }

  playStreak() {
    if (this.muted) return;
    // Ascending power sparkle
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.15, 0.1, idx * 0.06);
    });
  }

  playLevelUp() {
    if (this.muted) return;
    // Triumphant arpeggio
    const fanfare = [523.25, 659.25, 783.99, 1046.5];
    fanfare.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.3, 0.15, idx * 0.1);
    });
    // Final sustained chord
    setTimeout(() => {
      this.playTone(1046.5, 'sine', 0.6, 0.15, 0);
      this.playTone(1318.5, 'sine', 0.6, 0.12, 0);
    }, 450);
  }
}

export const soundFx = new SoundController();
