import { animate } from 'motion';
import { splitText } from 'motion-plus';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion'; // scrollni kuzatish uchun

interface SplitTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  stag?: number;
  delay?: number;
  once?: boolean;
}

export default function SplitText({
  children,
  as: Tag = 'h1',
  className = '',
  duration = 2,
  stag = 0.05,
  delay = 0,
  once = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once,
    amount: 0.5, // 50% ko‘ringanida ishga tushadi
  });

  useEffect(() => {
    const run = async () => {
      if (!isInView) return; // faqat ko‘ringanda ishga tushadi

      await document.fonts.ready;

      if (!containerRef.current) return;

      containerRef.current.style.visibility = 'visible';

      const heading = containerRef.current.querySelector(
        typeof Tag === 'string' ? Tag : 'h1'
      ) as HTMLElement;

      if (!heading) return;

      const { words } = splitText(heading);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0], filter: ['blur(6px)', 'blur(0px)'] },
        {
          type: 'spring',
          duration,
          bounce: 0,
          delay: (index) => delay + index * stag,
        }
      );
    };

    run();
  }, [isInView, Tag, duration, stag, delay]);

  return (
    <div
      className={className}
      ref={containerRef}
      style={{ visibility: 'hidden' }}
    >
      {React.createElement(Tag, { className }, children)}
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
