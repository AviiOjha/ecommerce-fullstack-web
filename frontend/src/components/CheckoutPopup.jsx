export default function CheckoutPopup({ onClose, total }) {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl border">
        <h2 className="text-xl font-bold mb-4">Confirm Checkout</h2>
        <p className="mb-4">Your total is <span className="font-semibold">₹{total}</span></p>
        <p className="text-gray-600 mb-6">Proceed to checkout?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Order placed!");
              onClose();
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

