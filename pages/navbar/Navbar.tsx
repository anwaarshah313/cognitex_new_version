import React, { useState, useEffect } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateActiveHash = (hash) => {
    setActiveHash(hash);
    window.location.hash = hash;  // This line ensures the URL hash is updated.
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveHash(window.location.hash);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    handleRouteChange();  // Initialize the active hash when the component mounts.

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className={style.nav_main}>
      <div className={style.nav_in}>
      <Link className={style.nav_logo} href="/">
        <img className={style.nav_logo} src="./images/logo.png" alt="Logo" />
        </Link>
        {/* Desktop Menu */}
        <ul className={style.nav_list}>
          <li className={`${style.nav_li} ${activeHash === '#usecase' ? style.active : ''}`} onClick={() => updateActiveHash('#usecase')}>
            <Link href="/#usecase">Solutions</Link>
          </li>
          <li className={`${style.nav_li} ${activeHash === '#features' ? style.active : ''}`} onClick={() => updateActiveHash('#features')}>
            <Link href="/#features">Features</Link>
          </li>
          <li className={`${style.nav_li} ${activeHash === '#faq' ? style.active : ''}`} onClick={() => updateActiveHash('#faq')}>
            <Link href="/#faq">F&Q</Link>
          </li>
          <li className={`${style.nav_li} ${activeHash === '#contact' ? style.active : ''}`} onClick={() => updateActiveHash('#contact')}>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className={style.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <button className={style.nav_btn}>Try it now</button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={style.mobile_menu}>
            <ul className={style.mobile_list}>
              <li className={`${style.mobile_li} ${activeHash === '#usecase' ? style.active : ''}`} onClick={() => updateActiveHash('#usecase')}>
                <Link href="/#usecase">Solutions</Link>
              </li>
              <li className={`${style.mobile_li} ${activeHash === '#features' ? style.active : ''}`} onClick={() => updateActiveHash('#features')}>
                <Link href="/#features">Features</Link>
              </li>
              <li className={`${style.mobile_li} ${activeHash === '#faq' ? style.active : ''}`} onClick={() => updateActiveHash('#faq')}>
                <Link href="/#faq">F&Q</Link>
              </li>
              <li className={`${style.mobile_li} ${activeHash === '#contact' ? style.active : ''}`} onClick={() => updateActiveHash('#contact')}>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            <button className={style.mobileNav_btn}>Try it now</button>

          </div>
        )}
      </div>
    </nav>
  );
}
