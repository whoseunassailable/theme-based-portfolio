import React from 'react';
import { GoldFrame, PageTitle, Icon } from '../../home/components/harry-potter/HarryPotterAtoms';
import { HarryPotterConstants } from '../../../constants/HarryPotterConstants';

export const HarryPotterWorkExperience: React.FC = () => {
  const experience = HarryPotterConstants.WORK_EXPERIENCE;

  return (
    <section className="stage page" id="potter-work-section">
      <div className="parchment">
        <GoldFrame />
        <PageTitle subtitle="Places where I turned spells into software.">
          Work Experience
        </PageTitle>

        <div className="exp-grid">
          {experience.map((e) => (
            <div className="exp-scroll" key={e.company}>
              <div className="exp-medallion">
                <Icon name={e.medallion} size={40} />
              </div>
              <h3>{e.company}</h3>
              <p className="role">{e.role}</p>
              <p className="date">{e.dates} · {e.where}</p>
              <hr />
              <ul className="exp-bullets">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="exp-foot">
          ✦ &nbsp; From prototypes to production — always learning, always building. &nbsp; ✦
        </div>
      </div>
    </section>
  );
};
