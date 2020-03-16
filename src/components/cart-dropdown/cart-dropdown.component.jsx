import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButtonContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer className="cart-dropdown">
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>YOUR CART IT EMPTY</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButtonContainer
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButtonContainer>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
