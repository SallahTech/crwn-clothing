import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/Custom-button.component'
import CartItem from '../cartItem/Cart-item.component'

import './Cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GOT TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
