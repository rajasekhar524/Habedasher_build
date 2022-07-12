import React from 'react'
import BlueButton from '../../components/BlueButton/BlueButton'
import './cart.scss'

function Cart() {
  return (
    <div className='cart_section'>
      <div>
          <BlueButton>
              proceed to checkout
          </BlueButton>
      </div>
      <div className='cart_bag_heading'>
      
      </div>
     

    </div>
  )
}

export default Cart