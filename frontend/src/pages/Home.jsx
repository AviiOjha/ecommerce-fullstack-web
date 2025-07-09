import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products') 
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </section>
  );
}
