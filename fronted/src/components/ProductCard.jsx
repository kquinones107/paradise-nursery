import { useCart } from '../context/CartContext';
import '../css/ProductCard.css';

function ProductCard({ plant }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <strong>${plant.price.toLocaleString('es-CO')}</strong>
      <button onClick={() => addToCart(plant)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
