import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white border rounded-lg shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden"
    >
      <img
        src={product.imageUrl || 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold min-h-[3.5rem] line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm">by {product.brand}</p>
        <p className="mt-2 font-semibold">₹{product.price}</p>
        <button
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            alert("Added to cart (functionality pending)");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

