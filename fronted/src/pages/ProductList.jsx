import ProductCard from '../components/ProductCard';
import plants from '../data/plants';
import '../css/ProductList.css'; // opcional para estilos externos

function ProductList() {
  return (
    <div className="product-list-container">
      <h2>🌿 Plantas Aromáticas</h2>
      <div className="product-grid">
        {plants.filter(p => p.category === 'Aromáticas').map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>

      <h2>🌿 Plantas Medicinales</h2>
      <div className="product-grid">
        {plants.filter(p => p.category === 'Medicinales').map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
