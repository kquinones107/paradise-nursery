import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

function Cart() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="cart-summary">
            <h3>Total a pagar: ${totalAmount.toLocaleString('es-CO')}</h3>
            <div className="cart-buttons">
              <Link to="/productos" className="continue-btn">Continuar comprando</Link>
              <button className="pay-btn" onClick={() => alert("Gracias por tu compra 🌱")}>
                Pagar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
