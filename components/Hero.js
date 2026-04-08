import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const embers = [];
    for (let i = 0; i < 60; i++) {
      embers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8,
        life: Math.random(),
        decay: Math.random() * 0.003 + 0.001,
        color: Math.random() > 0.5 ? '#FF6B00' : '#FF2D00',
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach(e => {
        e.y -= e.speedY;
        e.x += e.speedX;
        e.life -= e.decay;
        if (e.life <= 0 || e.y < -10) {
          e.x = Math.random() * canvas.width;
          e.y = canvas.height + 10;
          e.life = 1;
        }
        ctx.globalAlpha = e.life * 0.7;
        ctx.fillStyle = e.color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.glow} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>IGNITE YOUR SENSES</p>
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>FIRE</span>
          <span className={styles.titleLine2}>DREAM</span>
        </h1>
        <p className={styles.subtitle}>
          Bold snacks & premium lighters.<br />
          For those who live with <span className={styles.highlight}>intensity</span>.
        </p>
        <div className={styles.ctas}>
          <Link href="/#products" className={styles.ctaPrimary}>
            Shop Now
          </Link>
          <Link href="/#about" className={styles.ctaSecondary}>
            Our Story →
          </Link>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
