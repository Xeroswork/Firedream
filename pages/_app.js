import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import Cursor from '../components/Cursor';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Cursor />
      <Component {...pageProps} />
    </CartProvider>
  );
}
