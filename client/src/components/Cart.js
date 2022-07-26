import React from 'react'
import CreateFoodForm from './CreateFoodForm';

function Cart({ user, addToCart, setAddToCart }) {

  return (
    <div>
      <CreateFoodForm />
    </div>
  )
}

export default Cart