'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import { useConsultation } from '@/context/ConsultationContext';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Button } from '@/components/ui/Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <BrandLogo variant="light" size="md" href="/" />

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || (item.children && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <li
                    key={item.label}
                    className={styles.navItemDropdown}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </Link>

                    <div className={`${styles.dropdownMenu} ${servicesDropdownOpen ? styles.dropdownVisible : ''}`}>
                      <div className={styles.dropdownGrid}>
                        {item.children.map((sub) => (
                          <Link key={sub.href} href={sub.href} className={styles.dropdownItem}>
                            <span className={styles.dropdownItemTitle}>{sub.label}</span>
                            {sub.description && (
                              <span className={styles.dropdownItemDesc}>{sub.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.ctaGroup}>
          <Button
            variant="primary"
            size="sm"
            onClick={() => openConsultation()}
            className={styles.primaryCta}
          >
            Discuss Your Book
          </Button>
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line1Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line2Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line3Open : ''}`} />
        </button>
      </div>

      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.mobileDrawerContent}>
          <div className={styles.mobileBrandHeader}>
            <div className={styles.mobileLogoWrap}>
              <BrandLogo variant="light" size="md" href="/" />
            </div>
            <p className={styles.mobileSubtitle}>Professional publishing support for independent authors.</p>
          </div>

          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {mainNavigation.map((item) => (
                <li key={item.label} className={styles.mobileNavItem}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileCtaWrapper}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openConsultation();
              }}
            >
              Discuss Your Book
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
