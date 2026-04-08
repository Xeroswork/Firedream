import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Faq.module.css';

const faqs = [
  { q: "Do you ship internationally?", a: "Yes! We ship worldwide. Free shipping on orders over $40 within the US." },
  { q: "How spicy are your snacks really?", a: "Our heat scale goes from 1 (mild kick) to 5 (bring a fire extinguisher). We don't sugarcoat it." },
  { q: "Are the lighters refillable?", a: "Our butane and flip-top lighters are refillable. The electric models are USB-C rechargeable." },
  { q: "What's your return policy?", a: "We offer a 30-day return policy on lighters. For food items, contact us if there's an issue." },
  { q: "Do you offer wholesale?", a: "Yes! Email us at hello@firedream.shop for wholesale pricing." },
];

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ — FireDream</title>
      </Head>
      <Navbar cartCount={0} />
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>GOT QUESTIONS?</p>
          <h1 className={styles.title}>FAQ</h1>
          <div className={styles.list}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.item}>
                <h3 className={styles.question}>{faq.q}</h3>
                <p className={styles.answer}>{faq.a}</p>
              </div>
            ))}
          </div>
          <Link href="/" className={styles.back}>← Back to Shop</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
