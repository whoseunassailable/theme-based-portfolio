import React from 'react';
import { GoldFrame, PageTitle, Icon, Potion } from '../../home/components/harry-potter/HarryPotterAtoms';
import { HarryPotterConstants } from '../../../constants/HarryPotterConstants';

export const HarryPotterAboutMe: React.FC = () => {
  const potions = HarryPotterConstants.POTIONS;
  const journey = HarryPotterConstants.JOURNEY;

  return (
    <section className="stage page" id="potter-about-section">
      <div className="parchment torn">
        <GoldFrame />
        <PageTitle subtitle="">About Me</PageTitle>

        <div className="about-grid">
          <div className="about-intro">
            <h2>
              <Icon name="quill" size={32} /> Hi, I'm Rohan Bhande
            </h2>
            <p className="lead">
              Full‑Stack Wizard blending Flutter, Data Science, and Software Engineering
              into thoughtful digital experiences.
            </p>
            <div className="divider-ink" />
            <p>
              I'm pursuing my Master's in Applied AI &amp; Data Science at the Illinois
              Institute of Technology, sharpening my craft and building user‑facing
              applications that solve real problems.
            </p>
            <p>
              I love turning ideas into scalable, elegant solutions and crafting intuitive
              experiences that delight users.
            </p>
            <p style={{ fontStyle: 'italic', color: '#5a3415' }}>
              Always learning. Always building. Always leveling up.
            </p>
          </div>
        </div>

        <div className="potions">
          {potions.map((p) => (
            <div className="potion-card" key={p.name}>
              <Potion glyph={p.glyph} c1={p.c1} c2={p.c2} />
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="journey-title">My Journey</div>
        <div className="journey">
          {journey.map((j) => (
            <div className="journey-node" key={j.title}>
              <span className="icon"><Icon name={j.icon} size={26} /></span>
              <h5>{j.title}</h5>
              <p>{j.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
