import { motion, type Transition, type Easing } from "motion/react";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type BlurTextOwnProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  /** Polymorphic prop: what to render as */
  as?: ElementType;
};

// Polymorphic helper type: props of E + our own props (own props take precedence)
type PolymorphicProps<E extends ElementType> = BlurTextOwnProps &
  Omit<ComponentPropsWithoutRef<E>, keyof BlurTextOwnProps>;

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = forwardRef(function BlurText<E extends ElementType = "span">(
  props: PolymorphicProps<E>,
  forwardedRef: React.Ref<Element>
) {
  const {
    text = "",
    delay = 200,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = (t: number) => t,
    onAnimationComplete,
    stepDuration = 0.35,
    as,
    // collect any other props (style, id, onClick, MUI's sx, variant, etc.)
    ...rest
  } = props;

  const Component = (as ?? "span") as ElementType;

  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);

  // We observe the container node; its tag can vary, so use Element.
  const localRef = useRef<Element | null>(null);

  // use the forwarded ref if provided, but still keep a local ref for IntersectionObserver
  useEffect(() => {
    const node = localRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  // handle both forwarded ref and local ref
  const setRefs = (el: Element | null) => {
    localRef.current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef && typeof forwardedRef === "object")
      (forwardedRef as React.MutableRefObject<Element | null>).current = el;
  };

  return (
    <Component
      ref={setRefs}
      className={`blur-text ${className} ${animateBy === "words" ? "flex flex-wrap" : "inline-flex"}`}
      {...rest}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };
        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </Component>
  );
});

export default BlurText;
