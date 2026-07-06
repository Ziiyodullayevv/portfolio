import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
  animateOnMount?: boolean;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  y = 20,
  className = '',
  animateOnMount = false,
}: SlideUpProps) {
  const hidden = { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={hidden}
      animate={animateOnMount ? visible : undefined}
      whileInView={animateOnMount ? undefined : visible}
      viewport={animateOnMount ? undefined : { once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
