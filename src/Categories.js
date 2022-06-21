import React from "react";

const Categories = (props) => {
  const categories = [
    "All",
    ...new Set(
      props.items.map(function (item) {
        return item.category;
      })
    ),
  ];
  function filterItemsHandler(category) {
    props.filterItems(category);
  }

  return (
    <div className="btn-container">
      {categories.map(function (category) {
        return (
          <>
            <button
              className="filter-btn"
              onClick={() => filterItemsHandler(category)}
            >
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
