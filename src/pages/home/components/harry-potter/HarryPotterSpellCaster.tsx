import React, { useState, useEffect, useRef, useCallback } from 'react';

const SECTION_MAP: Record<string, string> = {
  home:       'potter-home-section',
  about:      'potter-about-section',
  experience: 'potter-work-section',
  projects:   'potter-projects-section',
  contact:    'potter-contact-section',
  // spell aliases
  lumina:    'potter-home-section',
  veritas:   'potter-about-section',
  tempus:    'potter-work-section',
  opus:      'potter-projects-section',
  missiva:   'potter-contact-section',
};

const SPELL_PHRASES: Record<string, string> = {
  lumina:    'Illuminating the path',
  veritas:   'Revealing the wizard',
  tempus:    'Unfolding the chronicles',
  opus:      'Opening the grimoire',
  missiva:   'Summoning the messenger owl',
  home:      'Returning to the entrance hall',
  about:     'Revealing the wizard',
  experience:'Unfolding the chronicles',
  projects:  'Opening the grimoire',
  contact:   'Summoning the messenger owl',
};

const SPELL_LIST = [
  { word: 'Lumina',   meaning: 'Home — light a candle at the entrance' },
  { word: 'Veritas',  meaning: 'About — truth & origin' },
  { word: 'Tempus',   meaning: 'Experience — chronicles of work' },
  { word: 'Opus',     meaning: 'Projects — open the grimoire' },
  { word: 'Missiva',  meaning: 'Contact — send a missive by owl' },
];

interface SparkPoint {
  id: number;
  a: number;
  d: number;
  s: number;
  delay: number;
}

const SparkleBurst: React.FC = () => {
  const [pts] = useState<SparkPoint[]>(() =>
    Array.from({ length: 26 }, (_, i) => ({
      id: i,
      a: Math.random() * Math.PI * 2,
      d: 80 + Math.random() * 240,
      s: 0.5 + Math.random() * 1.4,
      delay: Math.random() * 80,
    }))
  );
  return (
    <div className="sparkle-burst" aria-hidden="true">
      {pts.map((p) => {
        const x = Math.cos(p.a) * p.d;
        const y = Math.sin(p.a) * p.d;
        return (
          <span
            key={p.id}
            className="spark"
            style={{
              '--x': `${x}px`,
              '--y': `${y}px`,
              '--s': p.s,
              '--delay': `${p.delay}ms`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

interface HarryPotterSpellCasterProps {
  onCast?: () => void;
}

export const HarryPotterSpellCaster: React.FC<HarryPotterSpellCasterProps> = ({ onCast }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [burst, setBurst] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const recogRef = useRef<SpeechRecognition | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Open with `/` key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(tag)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const cast = useCallback(
    (raw: string) => {
      const word = (raw || '').toLowerCase().replace(/[^a-z]/g, '').trim();
      if (!word) return;

      let sectionId = SECTION_MAP[word];
      let phrase = SPELL_PHRASES[word];

      if (!sectionId) {
        const key = Object.keys(SECTION_MAP).find((k) => k.startsWith(word) && word.length >= 3);
        if (key) {
          sectionId = SECTION_MAP[key];
          phrase = SPELL_PHRASES[key];
        }
      }

      if (sectionId) {
        setFeedback({ ok: true, msg: `✦ ${word.toUpperCase()} — ${phrase}…` });
        setBurst(Date.now());
        onCast?.();
        setTimeout(() => {
          scrollToSection(sectionId);
          setOpen(false);
          setText('');
        }, 700);
        setTimeout(() => setFeedback(null), 2400);
      } else {
        setFeedback({ ok: false, msg: `The incantation "${raw}" did not take.` });
        setTimeout(() => setFeedback(null), 2400);
      }
    },
    [onCast]
  );

  const startListening = () => {
    const SR = (window as Window & typeof globalThis).SpeechRecognition ||
      (window as Window & typeof globalThis & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;
    if (!SR) {
      setFeedback({ ok: false, msg: "Voice spells aren't supported in this browser. Try typing." });
      setTimeout(() => setFeedback(null), 2800);
      return;
    }
    if (recogRef.current) {
      try { recogRef.current.abort(); } catch { /* ignored */ }
    }
    const rec = new SR();
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 4;
    rec.onstart = () => setListening(true);
    rec.onerror = () => {
      setListening(false);
      setFeedback({ ok: false, msg: 'The orb did not hear you. Speak again.' });
      setTimeout(() => setFeedback(null), 2200);
    };
    rec.onend = () => setListening(false);
    rec.onresult = (e: SpeechRecognitionEvent) => {
      const heard: string[] = [];
      for (let i = 0; i < e.results[0].length; i++) heard.push(e.results[0][i].transcript);
      setText(heard[0] || '');
      for (const h of heard) {
        const word = h.toLowerCase().replace(/[^a-z]/g, '');
        if (SECTION_MAP[word] || Object.keys(SECTION_MAP).some((k) => k.startsWith(word) && word.length >= 3)) {
          cast(h);
          return;
        }
      }
      cast(heard[0] || '');
    };
    recogRef.current = rec;
    rec.start();
  };

  return (
    <>
      <button
        className={`spell-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Cast a spell"
        title="Cast a spell  ·  press /"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M3 21 L18 6" />
          <path d="M16 4 L20 8" />
          <path d="M19 3 L19 5 M21 5 L23 5 M22 7 L23 8" />
        </svg>
        <span className="spell-fab-label">Cast a spell</span>
      </button>

      {open && (
        <div className="spell-overlay" onClick={() => setOpen(false)}>
          <div className="spell-panel" onClick={(e) => e.stopPropagation()}>
            <div className="spell-runes" aria-hidden="true">✦ ❋ ✧ ❉ ✦ ❋ ✧ ❉ ✦ ❋ ✧ ❉ ✦</div>
            <h3 className="spell-title">Speak the Incantation</h3>
            <p className="spell-sub">Type or whisper a spell to navigate the grimoire.</p>

            <div className="spell-inputrow">
              <input
                ref={inputRef}
                className="spell-input"
                value={text}
                placeholder="…lumina"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') cast(text); }}
              />
              <button
                className={`spell-mic ${listening ? 'listening' : ''}`}
                onClick={startListening}
                aria-label="Voice spell"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" fillOpacity=".15" />
                  <path d="M6 11 V12 A6 6 0 0 0 18 12 V11" />
                  <path d="M12 18 V21 M9 21 H15" />
                </svg>
              </button>
              <button className="spell-cast-btn" onClick={() => cast(text)}>Cast</button>
            </div>

            {listening && (
              <div className="spell-listening">
                <div className="orb-pulse" /> Listening for your incantation…
              </div>
            )}

            {feedback && (
              <div className={`spell-feedback ${feedback.ok ? 'ok' : 'err'}`}>
                {feedback.msg}
              </div>
            )}

            <div className="spell-grimoire">
              <div className="grimoire-title">— Spellbook —</div>
              <ul>
                {SPELL_LIST.map((s) => (
                  <li key={s.word} onClick={() => cast(s.word)}>
                    <span className="word">{s.word}</span>
                    <span className="meaning">{s.meaning}</span>
                  </li>
                ))}
              </ul>
              <div className="spell-tip">
                Press <kbd>/</kbd> any time to summon this prompt.
              </div>
            </div>
          </div>
        </div>
      )}

      {burst > 0 && <SparkleBurst key={burst} />}
    </>
  );
};
