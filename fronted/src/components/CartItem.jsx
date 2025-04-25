import { useCart } from '../context/CartContext';
import '../css/CartItem.css'; // opcional para estilos externos

function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-details">
        <h4>{item.name}</h4>
        <p>Precio unitario: ${item.price.toLocaleString('es-CO')}</p>
        <p>Total: ${(item.price * item.qty).toLocaleString('es-CO')}</p>
        
        <div className="cart-actions">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button className="remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
