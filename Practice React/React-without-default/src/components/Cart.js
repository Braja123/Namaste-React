import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  useSelector(store => store.cart.items);
  return (
    <div>Cart</div>
  )
}

export default Cart;