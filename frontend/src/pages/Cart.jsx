import { useState } from 'react';
import CheckoutPopup from '../components/CheckoutPopup';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    // Sample cart items, you can connect with context or backend later
    {
      id: 1,
      name: 'Noise Smartwatch',
      price: 3499,
      quantity: 1,
    }
  ]);
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">₹{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between mt-6 text-lg font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={() => setShowCheckout(true)}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      )}

      {showCheckout && (
        <CheckoutPopup onClose={() => setShowCheckout(false)} total={total} />
      )}
    </div>
  );
}
