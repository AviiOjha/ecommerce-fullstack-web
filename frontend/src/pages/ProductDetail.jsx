import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const rightSectionRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  // To match image height with content height
  useLayoutEffect(() => {
    if (rightSectionRef.current) {
      setRightHeight(rightSectionRef.current.offsetHeight);
    }
  }, [product]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/product/${id}`);
      alert("Product deleted successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  const handleUpdate = () => {
    alert("Update feature to be implemented");
  };

  if (!product) {
    return <p className="p-6">Loading product...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden">
        {/* Image */}
        <div
          className="w-full md:w-1/2"
          style={{ height: rightHeight ? `${rightHeight}px` : "auto" }}
        >
          <img
            src={
              product.imageUrl ||
              "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1948&auto=format&fit=crop"
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div ref={rightSectionRef} className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-1">Brand: {product.brand}</p>

          {/* Release Date */}
          <p className="text-gray-500 mb-3">
            Product Listed On: 
            <i className="font-medium"> {product.releaseDate}</i>
          </p>

          {/* Description */}
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Price */}
          <p className="text-xl font-semibold text-blue-700 mb-2">
            ₹{product.price}
          </p>

          {/* Out of Stock */}
          {!product.available && (
            <p className="text-red-600 font-bold mb-2">Out of Stock</p>
          )}

          {/* Add to Cart Button */}
          <button
            disabled={!product.available}
            className={`block w-full px-4 py-2 rounded mb-4 ${
              product.available
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Update & Delete Buttons in a row */}
          <div className="flex gap-4">
            <button
              onClick={handleUpdate}
              className="w-1/2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="w-1/2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
