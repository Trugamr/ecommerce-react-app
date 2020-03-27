import React from 'react'
import axios from 'axios'
import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_Vh1lrnpCcP6oUBYxb3UnS9wP00zvCGkEG4'

  const onToken = token => {
    const baseURL = 'https://tru-ecommerce-api.herokuapp.com'

    axios
      .post(`${baseURL}/payment`, {
        amount: priceForStripe,
        token
      })
      .then(response => {
        alert('Payment Successful')
      })
      .catch(error => {
        console.log('Payment error', error)
        alert(
          'There was an issue with your payment. Please make sure you use provided credit card.'
        )
      })
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
