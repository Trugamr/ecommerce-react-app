import React from 'react'
import { connect } from 'react-redux'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  BackgroundImage,
  AddButton
} from './collection-item.styles'

import { addItemToCart } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  )
}
const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
