import React, { useState, useEffect, useRef } from 'react';
import { useThemeController } from '../../../../theme/ThemeProviderWrapper';
import { themeOptions } from '../../../../constants/themeOptions';

const NAV = [
  { id: 'potter-home-section',    label: 'Home' },
  { id: 'potter-about-section',   label: 'About' },
  { id: 'potter-work-section',    label: 'Experience' },
  { id: 'potter-projects-section',label: 'Projects' },
  { id: 'potter-contact-section', label: 'Contact' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const HarryPotterTopNav: React.FC = () => {
  const [active, setActive] = useState('potter-home-section');
  const [themeOpen, setThemeOpen] = useState(false);
  const { themeName, setThemeName } = useThemeController();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    if (themeOpen) document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, [themeOpen]);

  return (
    <nav className="hp-nav" aria-label="Primary">
      <div className="rod">
        <span className="rod-cap left" />
        <span className="rod-cap right" />
      </div>

      <ul className="plaques">
        {NAV.map((n, i) => (
          <li
            key={n.id}
            className={`plaque-wrap ${active === n.id ? 'active' : ''}`}
            style={{ '--i': i } as React.CSSProperties}
          >
            <svg className="chain left" viewBox="0 0 4 28" width="4" height="28">
              <line x1="2" y1="0" x2="2" y2="28" stroke="#a07530" strokeWidth="1.4" strokeDasharray="3 2" />
            </svg>
            <svg className="chain right" viewBox="0 0 4 28" width="4" height="28">
              <line x1="2" y1="0" x2="2" y2="28" stroke="#a07530" strokeWidth="1.4" strokeDasharray="3 2" />
            </svg>
            <button className="plaque" onClick={() => scrollToSection(n.id)}>
              <span className="plaque-glow" />
              <span className="plaque-label">{n.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Theme switcher beside nav */}
      <div className="hp-theme-toggle" ref={dropdownRef}>
        <button
          className={`hp-theme-btn${themeOpen ? ' open' : ''}`}
          onClick={() => setThemeOpen((o) => !o)}
          aria-label="Switch theme"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" width="14" height="14">
            <circle cx="10" cy="10" r="4" />
            <line x1="10" y1="1" x2="10" y2="4" /><line x1="10" y1="16" x2="10" y2="19" />
            <line x1="1" y1="10" x2="4" y2="10" /><line x1="16" y1="10" x2="19" y2="10" />
            <line x1="3.5" y1="3.5" x2="5.6" y2="5.6" /><line x1="14.4" y1="14.4" x2="16.5" y2="16.5" />
            <line x1="16.5" y1="3.5" x2="14.4" y2="5.6" /><line x1="5.6" y1="14.4" x2="3.5" y2="16.5" />
          </svg>
          {themeName}
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="10" height="6" style={{ transition: 'transform .2s', transform: themeOpen ? 'rotate(180deg)' : 'none' }}>
            <polyline points="1,1 5,5 9,1" />
          </svg>
        </button>
        {themeOpen && (
          <div className="hp-theme-dropdown">
            {themeOptions.map((t) => (
              <button
                key={t.value}
                className={`hp-theme-option${themeName === t.value ? ' current' : ''}`}
                onClick={() => { setThemeName(t.value); setThemeOpen(false); }}
              >
                {themeName === t.value && <span className="hp-theme-check">✦</span>}
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
