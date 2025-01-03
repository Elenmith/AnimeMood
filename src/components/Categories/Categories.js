import { React } from "react";

const Categories = () => {
  const categories = ["Action", "Comedy", "Drama", "Fantasy", "Sci-Fi"];

  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category} className="category-card">
            <a href={`/categories/${category.toLowerCase()}`}>{category}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
