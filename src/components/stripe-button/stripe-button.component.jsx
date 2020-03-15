import React from 'react'
import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_Vh1lrnpCcP6oUBYxb3UnS9wP00zvCGkEG4'

  const onToken = token => {
    console.log(token)
  }

  return (
    <StripeCheckout
      label="Pay with  💳"
      name="Ecomm. Store"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
