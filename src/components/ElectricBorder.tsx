import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  type PropsWithChildren,
} from "react";

type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;

  gridArea?: string;
  height?: React.CSSProperties["height"]; // default 80vh
  radius?: React.CSSProperties["borderRadius"]; // default 0.5vh
  accent?: string; // sets currentColor, affects electric stroke
  glow2?: string; // stronger hover glow
  softGlow?: string; // base glow for box-shadow
}>;

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style,
  gridArea,
  height = "80vh",
  radius = "0.5vh",
  accent,
  glow2,
  softGlow,
}) => {
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `turbulent-displace-${rawId}`;
  const scopeClass = `eb-scope-${rawId}`;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const strokeRef = useRef<HTMLDivElement | null>(null);

  const ACCENT = accent ?? color;
  const GLOW2 = glow2 ?? ACCENT;
  const SOFT = softGlow ?? `rgba(82,39,255,0.45)`;

  // --- animation updater (unchanged from your original) ---
  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;

    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    const w = Math.max(
      1,
      Math.round(host.clientWidth || host.getBoundingClientRect().width || 0)
    );
    const h = Math.max(
      1,
      Math.round(host.clientHeight || host.getBoundingClientRect().height || 0)
    );

    const dyAnims = Array.from(
      svg.querySelectorAll<SVGAnimateElement>(
        'feOffset > animate[attributeName="dy"]'
      )
    );
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${h}; 0`);
      dyAnims[1].setAttribute("values", `0; -${h}`);
    }

    const dxAnims = Array.from(
      svg.querySelectorAll<SVGAnimateElement>(
        'feOffset > animate[attributeName="dx"]'
      )
    );
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${w}; 0`);
      dxAnims[1].setAttribute("values", `0; -${w}`);
    }

    const baseDur = 6;
    const dur = Math.max(0.001, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach((a) => a.setAttribute("dur", `${dur}s`));

    const disp = svg.querySelector("feDisplacementMap");
    if (disp) disp.setAttribute("scale", String(30 * (chaos || 1)));

    const filterEl = svg.querySelector<SVGFilterElement>(
      `#${CSS.escape(filterId)}`
    );
    if (filterEl) {
      filterEl.setAttribute("x", "-200%");
      filterEl.setAttribute("y", "-200%");
      filterEl.setAttribute("width", "500%");
      filterEl.setAttribute("height", "500%");
    }

    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach((a: any) => {
        if (typeof a.beginElement === "function") {
          try {
            a.beginElement();
          } catch {}
        }
      });
    });
  };

  useEffect(() => {
    updateAnim();
  }, [speed, chaos]);
  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
  }, []);

  const inheritRadius: React.CSSProperties = {
    borderRadius: style?.borderRadius ?? radius ?? "inherit",
  };

  // only the animated electric “stroke” is visible; no static borders
  const strokeStyle: React.CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: "currentColor", // follows accent + hover
  };
  const glow1Style: React.CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: `rgba(82,39,255,0.6)`,
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5,
  };
  const glow2Style: React.CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5,
  };
  const bgGlowStyle: React.CSSProperties = {
    ...inheritRadius,
    transform: "scale(1.08)",
    filter: "blur(32px)",
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, rgba(82,39,255,0.8), transparent, ${color})`,
  };

  // outer “container” styling from your Box — but with NO border
  const outerBaseStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height,
    borderRadius: radius,
    boxShadow: `0 0 10px ${SOFT}`,
    transition: "all 0.3s ease-in-out",
    color: ACCENT, // drives the electric stroke color
    gridArea,
  };

  return (
    <div
      ref={rootRef}
      className={`relative isolate ${scopeClass} ${className ?? ""}`}
      style={{ ...outerBaseStyles, ...style }}
    >
      <style>{`
        .${scopeClass}:hover {
          box-shadow:
            0 0 15px ${SOFT},
            0 0 25px ${GLOW2},
            0 0 40px ${ACCENT};
          transform: translateY(-3px);
          color: ${GLOW2}; /* updates the electric stroke color */
        }
      `}</style>

      <svg
        ref={svgRef}
        className="fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="2"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="2"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* electric border only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={inheritRadius}
      >
        <div
          ref={strokeRef}
          className="absolute inset-0 box-border"
          style={strokeStyle}
        />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      <div className="relative" style={inheritRadius}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
