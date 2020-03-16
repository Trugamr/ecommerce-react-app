import React from 'react'
import { connect } from 'react-redux'

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutItemImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
