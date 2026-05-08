import { useState, useEffect } from 'react';
import { HarryPotterTopNav } from '../components/harry-potter/HarryPotterTopNav';
import { HarryPotterHomeSection } from '../components/harry-potter/HarryPotterHomeSection';
import { HarryPotterSpellCaster } from '../components/harry-potter/HarryPotterSpellCaster';
import { HarryPotterWorkExperience } from '../../work-experience/variants/HarryPotterWorkExperience';
import { PotterProjects } from '../../projects/variants/PotterProjects';
import { HarryPotterAboutMe } from '../../about-me/variants/HarryPotterAboutMe';
import { HarryPotterContactMe } from '../../contact-me/variants/HarryPotterContactMe';
import { useThemeController } from '../../../theme/ThemeProviderWrapper';
import '../../../styles/harry-potter-portfolio.css';

export const HarryPotterHome = () => {
  const [flashKey, setFlashKey] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showGhibli, setShowGhibli] = useState(false);
  const { setThemeName } = useThemeController();

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById('potter-contact-section');
    if (!contact) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowGhibli(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(contact);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hp-portfolio">
      {/* Ambient starfield background */}
      <div className="hp-sky" aria-hidden="true">
        <div className="hp-stars" />
        <div className="hp-stars hp-stars-2" />
        <div className="hp-vignette" />
      </div>

      {/* Heraldic plaque navbar */}
      <HarryPotterTopNav />

      {/* Portfolio sections */}
      <HarryPotterHomeSection />
      <HarryPotterWorkExperience />
      <PotterProjects />
      <HarryPotterAboutMe />
      <HarryPotterContactMe />

      {/* Floating spell caster widget */}
      <HarryPotterSpellCaster onCast={() => setFlashKey((k) => k + 1)} />

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          className="hp-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="4,13 10,7 16,13" />
          </svg>
        </button>
      )}

      {/* Switch to Ghibli — appears at the bottom */}
      {showGhibli && (
        <button
          className="hp-ghibli-btn"
          onClick={() => setThemeName('Studio Ghibli')}
        >
          ✦ Switch to Studio Ghibli
        </button>
      )}

      {/* Full-screen casting flash */}
      {flashKey > 0 && (
        <div className="casting-flash" key={flashKey} aria-hidden="true" />
      )}
    </div>
  );
};
