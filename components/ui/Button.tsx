'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2';

  const variantClasses = clsx({
    'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-glow': variant === 'primary',
    'bg-glass border border-accent-500/50 text-accent-400 hover:border-accent-400': variant === 'secondary',
    'border-2 border-accent-500 text-accent-500 hover:bg-accent-500/10': variant === 'outline',
  });

  const sizeClasses = clsx({
    'px-4 py-2 text-sm': size === 'sm',
    'px-6 py-3 text-base': size === 'md',
    'px-8 py-4 text-lg': size === 'lg',
  });

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const buttonClasses = clsx(baseClasses, variantClasses, sizeClasses, disabledClasses, className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClasses}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
