import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'royal' | 'crimson' | 'light' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'royal',
  size = 'md',
  className = '',
}) => {
  return (
    <span className={`${styles.badge} ${styles[`variant_${variant}`]} ${styles[`size_${size}`]} ${className}`}>
      {children}
    </span>
  );
};
