import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = ["Action", "Comedy", "Drama", "Fantasy", "Sci-Fi"];

  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() =>
              (window.location.href = `/categories/${category.toLowerCase()}`)
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
