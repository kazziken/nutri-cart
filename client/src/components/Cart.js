import React from 'react'
import CreateFoodForm from './CreateFoodForm';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';

function Cart({ item, user, carts, setCarts, selectedCart, updateCart}) {

  // const [carted, setCarted] = useState([])
  // const [showForm, setShowForm] = useState(false)

  // useEffect(() => {
  //   fetch("/cart_foods")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       selectedCart(data);
  //     });
  // }, []);
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
      {currentCart}
    </div>
  )
}

export default Cart