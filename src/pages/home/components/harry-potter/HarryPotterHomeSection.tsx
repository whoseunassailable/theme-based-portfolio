import React from 'react';
import { Candle, WaxSeal, Icon } from './HarryPotterAtoms';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const HarryPotterHomeSection: React.FC = () => (
  <section className="stage page" id="potter-home-section">
    {/* Floating candles */}
    <Candle style={{ top: 80, left: '8%' }} />
    <Candle style={{ top: 40, right: '12%', transform: 'scale(.85)' }} />
    <Candle style={{ bottom: 120, left: '14%', transform: 'scale(.7)' }} />

    <div className="home-card">
      <span className="corner-line tl" />
      <span className="corner-line tr" />
      <span className="corner-line bl" />
      <span className="corner-line br" />

      <h1 className="display home-name">Rohan Bhande</h1>
      <div className="home-tag">Full‑Stack Wizard</div>
      <p className="home-sub">
        Blending Flutter, Data Science, and Software Engineering
        into thoughtful digital experiences.
      </p>

      <div className="home-cta">
        <button className="btn btn-with-seal" onClick={() => scrollToSection('potter-work-section')}>
          View My Work
          <span className="seal"><WaxSeal size={42} label="✦" /></span>
        </button>
        <button className="btn-ghost" onClick={() => scrollToSection('potter-projects-section')}>
          <Icon name="book" size={16} /> &nbsp; Open the Grimoire
        </button>
      </div>
    </div>

    <div
      className="scroll-hint"
      onClick={() => scrollToSection('potter-work-section')}
    >
      <svg className="compass" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="15" cy="15" r="13" />
        <path d="M15 6 L17 15 L15 24 L13 15 Z" fill="currentColor" />
      </svg>
      Scroll to explore
      <div style={{ marginTop: 6 }}>▼</div>
    </div>
  </section>
);
