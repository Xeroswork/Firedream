import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>
              <span>FIRE</span>DREAM<span className={styles.dot}>.</span>
            </p>
            <p className={styles.tagline}>Live with intensity. Snack boldly. Burn bright.</p>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="/#products">All Products</a></li>
                <li><a href="/#products">Snacks</a></li>
                <li><a href="/#products">Lighters</a></li>
              </ul>
            </div>
            <div>
              <h4>Info</h4>
              <ul>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} FireDream. All rights reserved.</p>
          <p>🔥 Crafted for the bold</p>
        </div>
      </div>
    </footer>
  );
}
