import React from "react";

const Categories = ({ categoriesList, handleFilter }) => {
  return (
    <div className="btn-container">
      {categoriesList.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
