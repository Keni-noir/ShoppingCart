import { useSelector } from "react-redux";
import CartItem  from "./cartItems";
import confirmed from "/images/icon-order-confirmed.svg";

function OrderConfirmed({ items = [] }) {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blurred dark overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            {/* Modal content */}
            <div className="relative flex flex-col h-fit w-xl p-6 bg-white shadow-2xl rounded-xl z-10">
                <img src={confirmed} alt="Order Confirmed" className="w-10 h-10 mb-6" />
                <h1 className="text-3xl font-bold mb-3">Order Confirmed!</h1>
                <p className="text-sm text-gray-700 mb-6">Thank you for your purchase! Enjoy your food.</p>
                <div className="space-y-4 mb-6">
                    {items.length === 0 ? (
                        <p className="text-white">No items in your order.</p>
                    ) : (
                        <ul>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-3 bg-white rounded p-2 mb-2 shadow"
                                >
                                    <img
                                        src={item.images}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover rounded mr-3"
                                    />
                                    <span className="font-semibold flex-1">{item.name}</span>
                                    <span>Qty: {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">Total Items: {totalItems}</span>
                    <span className="text-2xl font-bold text-gray-900">
                        Total Price: ${totalPrice}
                    </span>
                </div>
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => window.location.reload()}
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
}

export default OrderConfirmed;