import Minus from "../assets/images/icon-decrement-quantity.svg"
import Add from "../assets/images/icon-increment-quantity.svg"
import Remove from "../assets/images/icon-remove-item.svg"
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Store/CartSlice";
function CartItem({item}) {

    const dispatch = useDispatch();
    
    const handleQtyChange = (newQty) => {
        if (newQty < 0){
            dispatch(removeFromCart(item.id))
        }else {
            dispatch(updateQuantity({id: item.id, quantity: newQty}));
        }
    }
    const handleRemoveItem = () => {
        dispatch(removeFromCart(item.id));
    }
    return (
        <div>
            <div className="flex items-center space-x-4 bg-gray-50 rounded-xl">
                <img src={item.image.desktop} className="w-16 h-16 object-cover rounded-lg"/>
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                    <p>${item.price}</p>
                </div>
                <div className="flex item-center space-x-2">
                    <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer " onClick={() => handleQtyChange(item.quantity - 1)}>
                        <img src={Minus} alt="decrease"className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer " onClick={() => handleQtyChange(item.quantity + 1)}>
                        <img src={Add} alt="decrease" className="w-4 h-4"/>
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray">${item.price * item.quantity}</span>
                    <button className="p-1 rounded-full text-red-500 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer" onClick={handleRemoveItem}>
                        <img src={Remove} alt="" className="w-4 h-4"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;