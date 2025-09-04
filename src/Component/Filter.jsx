// Component/FilterBar.jsx
function FilterBar({ categories, selectedCategory, onFilter }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-4 py-2 rounded-full transition text-sm font-medium ${
            selectedCategory === cat
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
