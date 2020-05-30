import React from "react";
import {
  NameContainer,
  ItemDetailsContainer,
  CartItemContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="cart-item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
