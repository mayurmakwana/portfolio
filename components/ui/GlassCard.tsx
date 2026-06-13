'use client';

import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'dark';
}

const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default',
  ...motionProps
}: GlassCardProps) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300';

  const variantClasses = clsx({
    'glass': variant === 'default',
    'glass-sm': variant === 'dark',
  });

  return (
    <motion.div
      className={clsx(baseClasses, variantClasses, className)}
      whileHover={hoverEffect ? { y: -10, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)' } : {}}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
