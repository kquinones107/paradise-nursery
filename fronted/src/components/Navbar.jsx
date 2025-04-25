import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../css/Navbar.css'; 

function Navbar() {
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">🌱 Paradise Nursery</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>Productos</NavLink>
        </li>
        <li>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? 'active' : ''}>
            🛒 Carrito {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
