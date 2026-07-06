import { animate } from 'motion';
import { splitText } from 'motion-plus';
import React, { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface SplitTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  stag?: number;
  delay?: number;
  once?: boolean;
  animateOnMount?: boolean;
}

export default function SplitText({
  children,
  as: Tag = 'h1',
  className = '',
  duration = 2,
  stag = 0.05,
  delay = 0,
  once = true,
  animateOnMount = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, {
    once,
    amount: 0.35,
  });
  const shouldAnimate = animateOnMount || isInView;

  useEffect(() => {
    if (!shouldAnimate) return;

    const container = containerRef.current;
    const textElement = textRef.current;

    if (!container || !textElement) return;

    let isCancelled = false;
    let controls: ReturnType<typeof animate> | undefined;
    let fallbackTimer: number | undefined;
    const originalText = textElement.textContent ?? '';

    const showText = () => {
      container.style.visibility = 'visible';
    };

    const run = async () => {
      try {
        await document.fonts?.ready;
      } catch {
        // Font loading is only needed for accurate line splitting.
      }

      if (isCancelled) return;

      showText();

      if (!originalText.trim() || shouldReduceMotion) {
        return;
      }

      textElement.textContent = originalText;

      const { words } = splitText(textElement);

      words.forEach((word) => {
        word.style.opacity = '0';
        word.style.transform = 'translateY(10px)';
        word.style.filter = 'blur(6px)';
      });

      const finish = () => {
        words.forEach((word) => {
          word.style.opacity = '1';
          word.style.transform = 'none';
          word.style.filter = 'blur(0px)';
          word.style.marginRight = '';
        });
      };

      controls = animate(
        words,
        { opacity: [0, 1], y: [10, 0], filter: ['blur(6px)', 'blur(0px)'] },
        {
          type: 'spring',
          duration,
          bounce: 0,
          delay: (index) => delay + index * stag,
        }
      );

      const lastWordDelay = Math.max(words.length - 1, 0) * stag;
      fallbackTimer = window.setTimeout(
        finish,
        (delay + lastWordDelay + duration + 0.3) * 1000
      );
    };

    run();

    return () => {
      isCancelled = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      controls?.stop();
      textElement.textContent = originalText;
      textElement.removeAttribute('aria-label');
      showText();
    };
  }, [shouldAnimate, once, duration, stag, delay, shouldReduceMotion]);

  return (
    <div
      className={className}
      ref={containerRef}
      style={{ visibility: 'hidden' }}
    >
      {React.createElement(Tag, { ref: textRef, className }, children)}
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
