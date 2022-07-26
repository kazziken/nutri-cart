import React from 'react'
import CreateFoodForm from './CreateFoodForm';

function Cart({ user, addToCart, setAddToCart }) {

  // function handleAddToCart() {
  //   fetch("/create-cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: user
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       return res;
  //     }) 
  //     .catch((err) => console.error(err));
  //   setAddToCart([...addToCart, item]);
  //   setCarted(carted);
  // }

  return (
    <div>
      <CreateFoodForm />
    </div>
  )
}

export default Cart