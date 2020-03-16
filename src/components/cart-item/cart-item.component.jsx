import React from 'react'

import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemNameContainer,
  CartItemImage
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetailsContainer>
      <CartItemNameContainer>{name}</CartItemNameContainer>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
