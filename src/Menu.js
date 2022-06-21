import React from "react";

const Menu = (props) => {
  const itemsArray = props.items.map(function (item) {
    return (
      <div className="menu-item">
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
          <h4 className="item-text">{item.title}</h4>
          <p>{item.desc}</p>
          <div className="price">${item.price}</div>
        </div>
      </div>
    );
  });
  return <main className="section-center">{itemsArray}</main>;
};

export default Menu;
