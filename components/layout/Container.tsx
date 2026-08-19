import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'site' | 'narrow' | 'reading' | 'full';
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'site',
  className = '',
  id,
}) => {
  return (
    <div id={id} className={`${styles.container} ${styles[`size_${size}`]} ${className}`}>
      {children}
    </div>
  );
};
