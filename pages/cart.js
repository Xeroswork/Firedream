import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

export default function CartPage() {
  const { cart, cartCount, cartTotal, updateQty, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Head>
        <title>Cart — FireDream</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar cartCount={cartCount} />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>YOUR ORDER</p>
            <h1 className={styles.title}>CART</h1>
          </div>

          {cart.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyEmoji}>🛒</span>
              <p>Your cart is empty.</p>
              <Link href="/#products" className={styles.shopLink}>← Browse the Collection</Link>
            </div>
          ) : (
            <div className={styles.layout}>
              {/* Items */}
              <div className={styles.items}>
                {cart.map(item => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemVisual}>
                      <span className={styles.itemEmoji}>{item.emoji}</span>
                    </div>

                    <div className={styles.itemInfo}>
                      <span className={styles.itemCategory}>{item.category}</span>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      {item.flavor && <p className={styles.itemFlavor}>{item.flavor}</p>}
                      {item.feature && <p className={styles.itemFlavor}>{item.feature}</p>}
                    </div>

                    <div className={styles.itemControls}>
                      <div className={styles.qtyRow}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >−</button>
                        <span className={styles.qty}>{item.qty}</span>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          aria-label="Increase quantity"
                        >+</button>
                      </div>
                      <span className={styles.itemPrice}>
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >✕</button>
                    </div>
                  </div>
                ))}

                <button className={styles.clearBtn} onClick={clearCart}>
                  Clear Cart
                </button>
              </div>

              {/* Summary */}
              <div className={styles.summary}>
                <h2 className={styles.summaryTitle}>ORDER SUMMARY</h2>

                <div className={styles.summaryRows}>
                  {cart.map(item => (
                    <div key={item.id} className={styles.summaryRow}>
                      <span>{item.name} × {item.qty}</span>
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.divider} />

                <div className={styles.shipping}>
                  <span>Shipping</span>
                  <span className={cartTotal >= 40 ? styles.free : ''}>
                    {cartTotal >= 40 ? 'FREE 🔥' : '$4.99'}
                  </span>
                </div>

                {cartTotal < 40 && (
                  <p className={styles.freeShippingHint}>
                    Add ${(40 - cartTotal).toFixed(2)} more for free shipping
                  </p>
                )}

                <div className={styles.total}>
                  <span>TOTAL</span>
                  <span>${(cartTotal + (cartTotal >= 40 ? 0 : 4.99)).toFixed(2)}</span>
                </div>

                <button className={styles.checkoutBtn}>
                  Proceed to Checkout →
                </button>

                <Link href="/#products" className={styles.continueShopping}>
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
