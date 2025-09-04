import Items from "./itmes"
import iconCart from "/images/icon-add-to-cart.svg"
import { useSelector } from "react-redux";
import FilterBar from "./Filter";
import data from "../assets/data.json";
import { useState } from "react";
function Catalogue(){

    const [selectedCategory, setSelectedCategory] = useState("All");



    const selectTotalItems = (state) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0);
    const totalItem = useSelector(selectTotalItems);

    const categories = [...new Set(data.map((item) => item.category))];
    const filteredProducts =
  selectedCategory === "All"
    ? data
    : data.filter((item) => item.category === selectedCategory);


return(
    <div className="flex flex-col items-center md:items-start w-full">
  <div className="sticky top-0 z-10 bg-white/90 backdrop-blur p-3 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
    <h1 className="text-2xl md:text-4xl font-bold">Desserts</h1>
    <button className="relative cursor-pointer hover:bg-gray-200 rounded-xl px-4">
      <img src={iconCart} alt="Cart Icon" className="w-6 h-6" />
      {totalItem > 0 && (
        <span className="absolute -top-2 right-2 bg-violet-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
          {totalItem}
        </span>
      )}
    </button>
  </div>

  <div className="mt-6 w-full">
    <FilterBar
      categories={categories}
      selectedCategory={selectedCategory}
      onFilter={(cat) => setSelectedCategory(cat)}
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full">
    {filteredProducts.map((product) => (
      <Items key={product.id} product={product} />
    ))}
  </div>
</div>

);
}

export default Catalogue;