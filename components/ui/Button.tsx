import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'crimson' | 'secondary' | 'outline' | 'outline-light' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) => {
  const variantKey = variant.replace(/-/g, '_');
  const variantClass = styles[`variant_${variant}`] || styles[`variant_${variantKey}`] || '';
  const sizeClass = styles[`size_${size}`] || '';

  const classes = [
    styles.button,
    variantClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.iconLeft}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.iconRight}>{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
};
