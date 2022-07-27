import React from 'react'
import CreateFoodForm from './CreateFoodForm';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';

function Cart({ item, user, carts, setCarts, selectedCart, updateCart}) {

  // const [carted, setCarted] = useState([])
  // const [showForm, setShowForm] = useState(false)

  console.log(selectedCart);

  const currentCart = selectedCart.map((item) => {
    return (
      <FoodCard
        key={uuidv4()}
        item={item}
        updateCart={updateCart}
        />
    )
  })

  return (
    <div>
      <CreateFoodForm />
      <h1>CART: {user.username} </h1>
      <h2>My Folders: {carts}</h2>
      <div>
        {currentCart}
      </div>
    </div>
  )
}

export default Cart