import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-4">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold">
          <Link to="/">🛒 E-Commerce</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-product" className="hover:underline">Add Product</Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          />
        </div>

        {/* Cart Button */}
        <button
          onClick={() => navigate('/cart')}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100"
        >
          View Cart
        </button>
      </div>
    </header>
  );
}
