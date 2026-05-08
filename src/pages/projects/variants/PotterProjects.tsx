import React, { useState, useMemo, useEffect } from 'react';
import { GoldFrame, PageTitle, Icon, WaxSeal } from '../../home/components/harry-potter/HarryPotterAtoms';
import { HarryPotterConstants } from '../../../constants/HarryPotterConstants';
import type { HarryPotterProject } from '../../../constants/HarryPotterConstants';

const TABS = [
  { id: 'all',    label: 'All Spells',       icon: '✦' },
  { id: 'mobile', label: 'Mobile Charms',    icon: '⚡' },
  { id: 'data',   label: 'Data Divinations', icon: '◯' },
  { id: 'web',    label: 'Web Enchantments', icon: '❋' },
] as const;

type FilterId = typeof TABS[number]['id'];

/* ===================== Project Modal ===================== */
interface ProjectModalProps {
  project: HarryPotterProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="parchment modal" onClick={(e) => e.stopPropagation()}>
        <GoldFrame />
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 12 }}>
          <div className="project-icon" style={{ width: 64, height: 64, margin: 0 }}>
            <Icon name={project.icon} size={32} />
          </div>
          <div>
            <h2>{project.title}</h2>
            <p className="subtitle">{project.role}</p>
            <p className="meta-line">{project.period}</p>
          </div>
        </div>

        <p style={{ fontSize: 18, color: '#3a2510', margin: '10px 0 6px' }}>
          {project.summary}
        </p>

        <h4>The Incantation</h4>
        <ul className="bullets">
          {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <h4>Tools of the Trade</h4>
        <div className="tech-row">
          {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>

        <div className="modal-footer">
          <button className="btn" onClick={onClose}>
            Close Tome
            <span className="seal"><WaxSeal size={42} label="✦" /></span>
          </button>
          <a
            className="link-pill"
            href="https://github.com/whoseunassailable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={16} /> Source
          </a>
        </div>
      </div>
    </div>
  );
};

/* ===================== Projects Section ===================== */
export const PotterProjects: React.FC = () => {
  const projects = HarryPotterConstants.PROJECTS;
  const [filter, setFilter] = useState<FilterId>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () => filter === 'all' ? projects : projects.filter((p) => p.category === filter),
    [filter, projects]
  );

  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section className="stage page" id="potter-projects-section">
      <div className="parchment">
        <GoldFrame />
        <PageTitle subtitle="A collection of spells I've cast in code — from Flutter charms to data divinations.">
          Grimoire of Projects
        </PageTitle>

        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${filter === t.id ? 'active' : ''}`}
              onClick={() => setFilter(t.id)}
            >
              <span className="glyph">{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <div
              className="project-card"
              key={p.id}
              onClick={() => setOpenId(p.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setOpenId(p.id); }}
            >
              <div className="project-icon">
                <Icon name={p.icon} size={32} />
              </div>
              <h4>{p.title}</h4>
              <p className="summary">{p.summary}</p>
              <div className="tech-row">
                {p.tech.slice(0, 3).map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="project-cta">View Spell ✦</div>
            </div>
          ))}
        </div>
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
};
