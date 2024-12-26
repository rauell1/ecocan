"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ExpandableContentProps {
  children: React.ReactNode;
  expandable?: boolean;
  maxHeight?: string;
  className?: string;
}

export const ExpandableContent = ({
  children,
  expandable = false,
  maxHeight = "150px",
  className,
}: ExpandableContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!expandable) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      initial={{ height: maxHeight }}
      animate={{ height: isExpanded ? "auto" : maxHeight }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {children}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
