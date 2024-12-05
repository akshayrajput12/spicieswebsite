import { motion } from 'framer-motion';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`
        min-h-screen
        w-full
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-12
        mx-auto
        max-w-7xl
        ${className}
      `}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
