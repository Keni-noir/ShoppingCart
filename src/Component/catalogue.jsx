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
    <div className="container flex flex-col w-7xl items-center justify-start h-fit md:items-start">
        <div className="container fixed z-2 p-3 flex flex-col items-center justify-between space-y-5 md:flex-row w-7xl ">
            <h1 className="text-4xl font-bold mb-4 justify-start">Desserts</h1>
            <button  className=" relative cursor-pointer hover:bg-gray-200 rounded-xl px-4"><img src={iconCart} alt="Cart Icon" className="w-6 h-6 justify-end mb-5 mt-3"/>{totalItem  > 0 && (
                <span className="absolute -top-2 right-2 bg-violet-500 text-white text-xs font-semibold rounded-full w-6 h-6">{totalItem}</span>)}</button>
        </div>
        <div className="mt-24 w-full">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onFilter={(cat) => {
            setSelectedCategory(cat);
          }}
        />
      </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {filteredProducts.map((product) => (
            <Items key={product.id} product={product} />
        ))}
      </div>
    </div>
);
}

export default Catalogue;