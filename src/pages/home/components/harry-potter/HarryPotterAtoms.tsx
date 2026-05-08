import React from 'react';

/* ========== Corner Ornament ========== */
interface CornerOrnamentProps {
  className?: string;
}
export const CornerOrnament: React.FC<CornerOrnamentProps> = ({ className = '' }) => (
  <svg className={`corner ${className}`} viewBox="0 0 56 56" fill="none">
    <path d="M2 22 C2 10 10 2 22 2 M2 22 L2 8 Q2 2 8 2 L22 2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 14 Q14 8 22 8 M14 22 Q14 14 22 14" stroke="currentColor" strokeWidth="0.9" opacity=".7" />
    <circle cx="22" cy="22" r="2.2" fill="currentColor" opacity=".8" />
    <path d="M2 30 L8 30 M30 2 L30 8" stroke="currentColor" strokeWidth="0.9" opacity=".55" />
  </svg>
);

/* ========== Gold Frame ========== */
export const GoldFrame: React.FC = () => (
  <>
    <div className="gold-frame" />
    <CornerOrnament className="tl" />
    <CornerOrnament className="tr" />
    <CornerOrnament className="bl" />
    <CornerOrnament className="br" />
  </>
);

/* ========== Page Title ========== */
interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}
export const PageTitle: React.FC<PageTitleProps> = ({ children, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: 28 }}>
    <h1
      className="display on-parchment"
      style={{
        fontSize: 'clamp(46px, 6vw, 76px)',
        margin: 0,
        lineHeight: 1.05,
        color: '#3a2510',
        textShadow: '0 1px 0 rgba(255,240,200,.6), 0 0 24px rgba(255,200,110,.4)',
      }}
    >
      {children}
    </h1>
    <div
      style={{
        margin: '10px auto 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        color: '#5a3415',
      }}
    >
      <span style={{ height: 1, width: 50, background: 'linear-gradient(90deg,transparent,#5a3415,transparent)', display: 'block' }} />
      <span style={{ fontSize: 12, letterSpacing: '.2em', fontFamily: "'Cinzel', serif" }}>✦</span>
      <span style={{ height: 1, width: 50, background: 'linear-gradient(90deg,transparent,#5a3415,transparent)', display: 'block' }} />
    </div>
    {subtitle && (
      <p style={{ margin: '14px 0 0', fontStyle: 'italic', color: '#5a3415', fontSize: 18 }}>
        {subtitle}
      </p>
    )}
  </div>
);

/* ========== Wax Seal ========== */
interface WaxSealProps {
  size?: number;
  label?: string;
}
export const WaxSeal: React.FC<WaxSealProps> = ({ size = 60, label = 'RB' }) => (
  <svg className="wax-seal" width={size} height={size} viewBox="0 0 60 60">
    <defs>
      <radialGradient id="hp-waxg" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#c44a4a" />
        <stop offset="60%" stopColor="#8b2424" />
        <stop offset="100%" stopColor="#4a0e0e" />
      </radialGradient>
    </defs>
    <path
      d="M30 4 L36 12 L46 10 L48 20 L56 26 L50 34 L54 44 L44 46 L40 54 L30 50 L20 54 L16 46 L6 44 L10 34 L4 26 L12 20 L14 10 L24 12 Z"
      fill="url(#hp-waxg)" stroke="#3a0808" strokeWidth=".5"
    />
    <circle cx="30" cy="30" r="14" fill="none" stroke="#f0c4c4" strokeWidth=".6" opacity=".4" />
    <text
      x="30" y="34" textAnchor="middle"
      fontFamily="'Cinzel', serif" fontSize="14" fontWeight="700"
      fill="#f5d8a8" opacity=".85"
    >
      {label}
    </text>
  </svg>
);

/* ========== Icon ========== */
type IconName =
  | 'wand' | 'orb' | 'scales' | 'book' | 'compass' | 'heart' | 'crystal'
  | 'paw' | 'quill' | 'cap' | 'lantern' | 'rocket' | 'chart' | 'tome'
  | 'envelope' | 'pin' | 'hourglass' | 'linkedin' | 'github' | 'owl';

interface IconProps {
  name: IconName | string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const s = { width: size, height: size } as React.SVGProps<SVGSVGElement>;
  const stroke = 'currentColor';
  const sw = 1.4;
  switch (name) {
    case 'wand':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" {...s}>
          <path d="M3 21 L18 6" /><path d="M16 4 L20 8" />
          <path d="M14 10 L13 11 M16 12 L17 11 M11 13 L10 12 M19 5 L19 3 M21 7 L23 7 M21 5 L22 4 M21 9 L22 10" />
          <path d="M15 7 L17 9" />
        </svg>
      );
    case 'orb':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <circle cx="12" cy="10" r="6" />
          <circle cx="10" cy="8" r="1" fill={stroke} />
          <path d="M14 9 L15 8" strokeLinecap="round" />
          <path d="M11 12 L13 13" strokeLinecap="round" />
          <path d="M6 17 L18 17 L17 21 L7 21 Z" />
        </svg>
      );
    case 'scales':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" {...s}>
          <path d="M12 4 L12 21 M5 21 L19 21" />
          <path d="M5 9 L19 9" />
          <circle cx="5" cy="14" r="3" /><circle cx="19" cy="14" r="3" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M4 4 H10 Q12 4 12 7 V21 Q12 18 10 18 H4 Z" />
          <path d="M20 4 H14 Q12 4 12 7 V21 Q12 18 14 18 H20 Z" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7 L14 12 L12 17 L10 12 Z" fill={stroke} />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M12 21 C5 16 3 11 5 8 C7 5 11 6 12 9 C13 6 17 5 19 8 C21 11 19 16 12 21 Z" />
        </svg>
      );
    case 'crystal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <circle cx="12" cy="10" r="6" />
          <circle cx="10" cy="8" r="1.2" fill={stroke} />
          <path d="M6 17 L18 17 L17 21 L7 21 Z" />
        </svg>
      );
    case 'paw':
      return (
        <svg viewBox="0 0 24 24" fill={stroke} {...s}>
          <ellipse cx="12" cy="16" rx="5" ry="4" />
          <ellipse cx="6" cy="11" rx="2" ry="2.6" />
          <ellipse cx="18" cy="11" rx="2" ry="2.6" />
          <ellipse cx="9" cy="7" rx="1.6" ry="2.2" />
          <ellipse cx="15" cy="7" rx="1.6" ry="2.2" />
        </svg>
      );
    case 'quill':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" {...s}>
          <path d="M4 20 L9 15" />
          <path d="M9 15 C9 8 14 4 20 4 C18 10 14 14 11 15 Z" fill={stroke} fillOpacity=".15" />
        </svg>
      );
    case 'cap':
      return (
        <svg viewBox="0 0 24 24" fill={stroke} {...s}>
          <path d="M2 9 L12 4 L22 9 L12 14 Z" />
          <path d="M6 11 V16 Q12 19 18 16 V11" fill="none" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case 'lantern':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M12 2 V4 M9 4 H15" />
          <rect x="8" y="6" width="8" height="12" rx="1" />
          <path d="M10 18 V20 M14 18 V20" />
          <circle cx="12" cy="12" r="2" fill={stroke} />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" {...s}>
          <path d="M12 3 C16 7 16 13 12 21 C8 13 8 7 12 3 Z" />
          <circle cx="12" cy="10" r="1.6" fill={stroke} />
          <path d="M9 16 L6 19 M15 16 L18 19" />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" {...s}>
          <path d="M4 20 L4 4 M4 20 L20 20" />
          <path d="M7 16 L11 11 L14 14 L20 6" />
          <path d="M17 6 L20 6 L20 9" />
        </svg>
      );
    case 'tome':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M5 5 H17 Q19 5 19 7 V20 H7 Q5 20 5 18 Z" />
          <path d="M9 9 H15 M9 12 H15" />
        </svg>
      );
    case 'envelope':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <rect x="3" y="6" width="18" height="13" rx="1.2" />
          <path d="M3 7 L12 14 L21 7" />
        </svg>
      );
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M12 22 C7 16 5 13 5 10 C5 6 8 3 12 3 C16 3 19 6 19 10 C19 13 17 16 12 22 Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    case 'hourglass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M6 3 H18 M6 21 H18" strokeLinecap="round" />
          <path d="M7 3 V6 Q7 9 12 12 Q17 15 17 18 V21 M17 3 V6 Q17 9 12 12 Q7 15 7 18 V21" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill={stroke} {...s}>
          <rect x="4" y="9" width="3.5" height="12" />
          <circle cx="5.75" cy="5.5" r="2" />
          <path d="M10 9 H13.4 V11 C14.4 9.5 15.7 9 17 9 C19.5 9 21 10.5 21 13.5 V21 H17.6 V14.5 C17.6 13.2 17 12.4 15.9 12.4 C14.7 12.4 14 13.2 14 14.5 V21 H10 Z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill={stroke} {...s}>
          <path d="M12 2 C6.48 2 2 6.58 2 12.25 C2 16.78 4.87 20.6 8.84 21.96 C9.34 22.05 9.5 21.74 9.5 21.46 V19.84 C6.73 20.45 6.14 18.62 6.14 18.62 C5.68 17.45 5 17.13 5 17.13 C4.05 16.5 5.07 16.51 5.07 16.51 C6.13 16.59 6.69 17.6 6.69 17.6 C7.63 19.22 9.16 18.75 9.55 18.48 C9.62 17.83 9.88 17.39 10.16 17.14 C7.95 16.89 5.62 16.04 5.62 12.18 C5.62 11.07 6 10.17 6.71 9.46 C6.6 9.21 6.27 8.18 6.81 6.79 C6.81 6.79 7.7 6.51 9.5 7.78 C10.32 7.55 11.18 7.44 12.04 7.44 C12.9 7.44 13.76 7.55 14.58 7.78 C16.38 6.51 17.27 6.79 17.27 6.79 C17.81 8.18 17.48 9.21 17.37 9.46 C18.08 10.17 18.46 11.07 18.46 12.18 C18.46 16.05 16.13 16.89 13.91 17.13 C14.27 17.45 14.6 18.06 14.6 19 V21.46 C14.6 21.74 14.76 22.06 15.27 21.95 C19.23 20.6 22 16.78 22 12.25 C22 6.58 17.52 2 12 2 Z" />
        </svg>
      );
    case 'owl':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} {...s}>
          <path d="M5 12 C5 7 8 4 12 4 C16 4 19 7 19 12 V18 Q19 21 16 21 H8 Q5 21 5 18 Z" />
          <circle cx="9" cy="11" r="2.2" fill={stroke} />
          <circle cx="15" cy="11" r="2.2" fill={stroke} />
          <circle cx="9" cy="11" r=".7" fill="#f5d8a8" />
          <circle cx="15" cy="11" r=".7" fill="#f5d8a8" />
          <path d="M11 14 L12 16 L13 14" />
        </svg>
      );
    default:
      return <span style={{ width: size, height: size, display: 'inline-block' }}>✦</span>;
  }
};

/* ========== Floating Candle ========== */
interface CandleProps {
  style?: React.CSSProperties;
}
export const Candle: React.FC<CandleProps> = ({ style }) => (
  <div className="candle" style={style}>
    <div className="flame" />
    <div className="stick" />
    <div className="holder" />
  </div>
);

/* ========== Potion ========== */
interface PotionProps {
  glyph: string;
  c1: string;
  c2: string;
}
export const Potion: React.FC<PotionProps> = ({ glyph, c1, c2 }) => (
  <div
    className="potion-vial"
    style={{ '--potion-color': c1, '--potion-color-2': c2 } as React.CSSProperties}
  >
    <div className="cork" />
    <div className="neck" />
    <div className="bulb" />
    <span className="glyph">{glyph}</span>
  </div>
);
