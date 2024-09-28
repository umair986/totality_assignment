import { useEffect } from "react";
import { BookedProperty } from "../../app/page";

type CartProps = {
  cart: BookedProperty[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  onCheckout: () => void;
};

export default function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  onCheckout,
}: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4 pb-4 border-b">
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-gray-600">${item.price} / night</p>
          <p className="text-gray-600">
            {item.startDate} - {item.endDate}
          </p>
          <div className="flex items-center mt-2">
            <button
              className="bg-gray-200 px-2 py-1 rounded"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="bg-gray-200 px-2 py-1 rounded"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="ml-4 text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xl font-semibold">Total: ${total}</p>
        <button
          className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={onCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
