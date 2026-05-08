import React, { useState } from 'react';
import { GoldFrame, PageTitle, Icon, WaxSeal } from '../../home/components/harry-potter/HarryPotterAtoms';

export const HarryPotterContactMe: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="stage page" id="potter-contact-section">
      <div className="parchment">
        <GoldFrame />
        <PageTitle subtitle="Let's build something thoughtful together.">Contact</PageTitle>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="lead">
              I'm always excited to collaborate on meaningful projects, internships, or
              freelance opportunities. Feel free to reach out — I'd love to hear from you.
            </p>

            <div className="info-card">
              <span className="icon-circle"><Icon name="envelope" size={22} /></span>
              <div>
                <h5>Email</h5>
                <p>rohanbhandeworks@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon-circle"><Icon name="pin" size={22} /></span>
              <div>
                <h5>Location</h5>
                <p>Chicago, USA</p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon-circle"><Icon name="hourglass" size={22} /></span>
              <div>
                <h5>Availability</h5>
                <p>Open to opportunities · +1 312‑273‑8582</p>
              </div>
            </div>

            <div className="socials">
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/rohan-bhande-08091a169/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={22} />
              </a>
              <a
                className="social-btn"
                href="https://github.com/whoseunassailable"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" size={22} />
              </a>
              <a
                className="social-btn"
                href="mailto:rohanbhandeworks@gmail.com"
                aria-label="Email"
              >
                <Icon name="envelope" size={22} />
              </a>
            </div>
          </div>

          <div className="vline" />

          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label>Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="send-row">
              <button className="btn btn-with-seal" type="submit">
                {sent ? 'Owl Dispatched ✦' : 'Send via Owl'}
                <span className="seal"><WaxSeal size={42} label="✦" /></span>
              </button>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#5a3415' }}>
                <Icon name="owl" size={28} /> <em>delivery typically within a fortnight</em>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
