import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="FireDream"
            width={160}
            height={48}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="/#products" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
            <span className={styles.cartIcon}>🛒</span>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={menuOpen ? styles.barOpen : ''}></span>
            <span className={menuOpen ? styles.barOpen : ''}></span>
            <span className={menuOpen ? styles.barOpen : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
