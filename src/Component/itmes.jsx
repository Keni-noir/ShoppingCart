import { useDispatch } from "react-redux";
import cartIcon from "/images/icon-add-to-cart.svg";
import { addtoCart } from "../Store/CartSlice";

function Items({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addtoCart(product));
    console.log("Product added to cart:", product.name);
  };

  return (
    <div className="items-center w-full" key={product.id}>
      <picture className="relative">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="hidden md:flex w-60 h-60 rounded-md mb-5 hover:border-2 hover:border-black"
        />
        <img
          src={product.image.mobile}
          alt={product.name}
          className="rounded-xl mb-5 md:hidden hover:border-2 hover:border-black"
        />
        <button
          onClick={handleAddToCart}
          className="cursor-pointer hover:bg-gray-300 absolute top-100 ml-65 md:top-55 md:ml-15 bg-white rounded-full py-2 px-4 border-1 border-black flex gap-1 text-sm"
        >
          <img src={cartIcon} alt="" />
          Add to cart
        </button>
      </picture>

      <h2 className="text-md md:text-sm text-gray-700">{product.category}</h2>
      <p className="text-xl md:text-md font-bold">{product.name}</p>
      <span className="text-md md:text-sm font-semibold">${product.price}</span>
    </div>
  );
}

export default Items;
