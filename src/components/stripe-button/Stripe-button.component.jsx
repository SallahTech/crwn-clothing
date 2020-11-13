import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51Hn4i4EEPV4B6Z4K2btCp6nJtN12Goau8484KRcOnjxoPX1fFfaLt1GNQOgocsC6CSD8AB0Ic7iCgHoMoPfYxOg500XLb1pYsF'
  //svg https://svgshare.com/i/CUz.svg

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='One Stop Shop Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
