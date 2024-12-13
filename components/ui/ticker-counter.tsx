import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, motion, animate } from 'framer-motion';

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
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Math.round(latest)
        );
        // Check if counting is complete
        if (direction === 'up' && Math.round(latest) === value) {
          setIsCountComplete(true);
        } else if (direction === 'down' && Math.round(latest) === 0) {
          setIsCountComplete(true);
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, value, direction]);

  return (
    <div className="flex items-start">
      <div>
        +
        <span ref={ref}>
          0
        </span>
      </div>
      {label && (
        <motion.span
          className="text-sm ml-2 self-end text-[#888D92]"
          initial={{ opacity: 0, y: 10 }}
          animate={isCountComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}