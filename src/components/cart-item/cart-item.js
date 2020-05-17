import React from "react";
import "./cart-item.scss";

const CartItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cart-item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span>
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
