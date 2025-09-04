import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import iconCart from "/images/icon-add-to-cart.svg";
import empty from "/images/illustration-empty-cart.svg";
import CartItem from "./cartItems";
import { clearCart } from "../Store/CartSlice";
import OrderConfirmed from "./orderConfirmed";

function Cart({ onConfirmOrder }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [confirmedItems, setConfirmedItems] = useState([]);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleConfirmOrder = () => {
        setConfirmedItems(items); // Capture items before clearing
        setOrderConfirmed(true);
        if (onConfirmOrder) onConfirmOrder();
        dispatch(clearCart());
    };

    return (
        <>
            {/* Blurred background overlay when order is confirmed */}
            {orderConfirmed && (
                <div className="fixed inset-0 backdrop-blur z-50 flex items-center justify-center">
                    <OrderConfirmed items={confirmedItems} />
                </div>
            )}

            {/* Main cart content, blurred when order is confirmed */}
            <div className={`relative z-40 w-full md:w-96 ${orderConfirmed ? "pointer-events-none blur-sm" : ""}`}>
                <div className={`right-35 top-0 h-screen  bg-white shadow-2xl md:mt-25 rounded-2xl`}>
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                            <img src={iconCart} alt="Cart Icon" className="w-6 h-6" />
                            <span>Shopping Cart</span>
                        </h2>
                        <button className="font-bold text-3xl p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            onClick={handleClearCart}>
                            X
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">
                        {items.length === 0 ?
                            (<div className="text-center py-12">
                                <img src={empty} alt="empty-cart" className="mx-auto" />
                                <p className="text-gray-500 text-lg mb-2">Your added items will appear here</p>
                            </div>) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                </div>)}
                    </div>
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-gray-900">Total: {totalItems}</span>
                            <span className="text-2xl font-bold text-gray-900">
                                Total Price: ${totalPrice}
                            </span>
                        </div>
                        <div className="space-y-3">
                            <button
                                className="w-full bg-green-400 text-white py-2 rounded-full font-medium justify-center hover:bg-green-800 transition-all duration-200"
                                onClick={handleConfirmOrder}
                                disabled={orderConfirmed || items.length === 0}
                            >
                                Confirm your Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;