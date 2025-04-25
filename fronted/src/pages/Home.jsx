import { Link } from 'react-router-dom';
import '../css/Home.css'; // opcional para estilos externos

function Home() {
  return (
    <div className="home-container">
      <h1>🌱 ¡Bienvenido a Paradise Nursery!</h1>
      <p>Descubre nuestra variedad de plantas de interior, aromáticas y medicinales.</p>
      
      <Link to="/productos" className="home-button">
        Ver Productos
      </Link>
    </div>
  );
}

export default Home;
