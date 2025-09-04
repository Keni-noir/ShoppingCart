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
    <div className="flex flex-col items-start w-full">
      {/* Responsive image handling */}
      <picture className="relative w-full">
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        <source media="(min-width: 480px)" srcSet={product.image.mobile} />
        <img
          src={product.image.thumbnail}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md mb-5 hover:border-2 hover:border-black"
        />

        {/* Add to Cart button overlay */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white hover:bg-gray-200 rounded-full py-2 px-4 shadow-md border"
        >
          <img src={cartIcon} alt="Add to cart" className="w-4 h-4" />
          <span className="text-sm font-medium">Add to cart</span>
        </button>
      </picture>

      {/* Product details */}
      <h2 className="text-sm text-gray-500">{product.category}</h2>
      <p className="text-lg font-bold">{product.name}</p>
      <span className="text-md font-semibold text-violet-600">
        ${product.price}
      </span>
    </div>
  );
}

export default Items;
