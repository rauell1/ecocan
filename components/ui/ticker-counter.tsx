import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export default function TickerCounter({
  value,
  direction = 'up',
  label,
}: {
  value: number;
  direction?: 'up' | 'down';
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isCountComplete, setIsCountComplete] = useState(false);
  const controls = useAnimationControls();
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounter = useCallback(async () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    const startValue = direction === 'down' ? value : 0;
    const endValue = direction === 'down' ? 0 : value;
    const duration = 2;
    const start = performance.now();
    const updateCounter = () => {
      if (!ref.current) return;
      const now = performance.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      ref.current.textContent = Intl.NumberFormat('en-US').format(
        Math.round(currentValue)
      );
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setIsCountComplete(true);
        controls.start({ opacity: 1, y: 0 });
      }
    };
    requestAnimationFrame(updateCounter);
  }, [hasAnimated, direction, value, controls]);

  useEffect(() => {
    animateCounter();
    return () => {
      setHasAnimated(false);
      setIsCountComplete(false);
    };
  }, [animateCounter]);

  // suppress unused warning until feature is used
  void isCountComplete;

  return (
    <div className="flex items-start">
      <div>
        +<span ref={ref}>0</span>
      </div>
      {label && (
        <motion.span
          className="text-sm ml-2 self-end text-[#888D92]"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
