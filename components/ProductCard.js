import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  const heatDots = product.heat
    ? Array.from({ length: 5 }, (_, i) => i < product.heat)
    : null;

  return (
    <div className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      <div className={styles.visual}>
        <span className={styles.emoji}>{product.emoji}</span>
        <div className={styles.glow} />
      </div>

      <div className={styles.info}>
        <div className={styles.meta}>
          <span className={styles.category}>{product.category}</span>
          {heatDots && (
            <div className={styles.heat} title={`Heat: ${product.heat}/5`}>
              {heatDots.map((on, i) => (
                <span key={i} className={`${styles.dot} ${on ? styles.dotOn : ''}`} />
              ))}
            </div>
          )}
          {product.feature && (
            <span className={styles.feature}>{product.feature}</span>
          )}
        </div>

        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        {product.flavor && (
          <p className={styles.flavor}>{product.flavor}</p>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button
            className={styles.addBtn}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
