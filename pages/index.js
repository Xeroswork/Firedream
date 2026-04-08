import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [toast, setToast] = useState(null);
  const { addToCart, cartCount } = useCart();

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.name} added to cart 🔥`);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <>
      <Head>
        <title>FireDream — Bold Snacks & Premium Lighters</title>
        <meta name="description" content="FireDream — premium spicy snacks and lighters for those who live with intensity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar cartCount={cartCount} />

      <main>
        <Hero />

        <section id="products" className={styles.products}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>THE COLLECTION</p>
              <h2 className={styles.sectionTitle}>SHOP THE FIRE</h2>
            </div>

            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutVisual}>
                <div className={styles.aboutEmoji}>🔥</div>
                <div className={styles.aboutGlow} />
              </div>
              <div className={styles.aboutText}>
                <p className={styles.sectionEyebrow}>OUR STORY</p>
                <h2 className={styles.aboutTitle}>BORN FROM THE FLAME</h2>
                <p>FireDream started with a simple idea: life is too short for bland snacks and boring lighters. We craft products for people who push limits — bold, intense, unforgettable.</p>
                <p>Every snack is made with premium ingredients and serious heat. Every lighter is built to last. No compromises.</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>10+</span>
                    <span className={styles.statLabel}>Products</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>5K+</span>
                    <span className={styles.statLabel}>Customers</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>🔥</span>
                    <span className={styles.statLabel}>Pure Fire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.banner}>
          <div className={styles.bannerTrack}>
            {['FREE SHIPPING OVER $40', '🔥', 'PREMIUM QUALITY', '🔥', 'BOLD FLAVORS', '🔥', 'SHIPS WORLDWIDE', '🔥',
              'FREE SHIPPING OVER $40', '🔥', 'PREMIUM QUALITY', '🔥', 'BOLD FLAVORS', '🔥'].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        <section id="contact" className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.contactInner}>
              <p className={styles.sectionEyebrow}>GET IN TOUCH</p>
              <h2 className={styles.sectionTitle}>CONTACT US</h2>
              <p className={styles.contactSub}>Questions? Wholesale inquiries? Drop us a line.</p>
              <a href="mailto:hello@firedream.shop" className={styles.contactEmail}>
                hello@firedream.shop
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {toast && <div className={styles.toast}>{toast}</div>}
    </>
  );
}
