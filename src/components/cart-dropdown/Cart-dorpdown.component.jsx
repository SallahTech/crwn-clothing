import React from 'react'

import CustomButton from '../custom-button/Custom-button.component'

import './Cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
  </div>
)

export default CartDropdown
