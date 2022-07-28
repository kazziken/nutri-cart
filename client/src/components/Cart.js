import React, {useState,useEffect} from 'react'
import CreateFoodForm from './CreateFoodForm';
import CartFood from './CartFood';

function Cart({ item, user, carts, updateCart}) {

  const [foods, setFoods] = useState([])
  // const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(`/latest-cart`)
      .then((response) => response.json())
      .then((data) => {
        
        setFoods(data.foods);
        console.log(data.foods);
      });
      },[]);


  console.log(foods)


  
  return (
    <div>
      <CreateFoodForm />
      <h1>CART: {user.username} </h1>
      <h2>My Folders:</h2>
      <div className="cart-column">

        {
          foods.map(food => {
            return(
              <CartFood 
              id={food.id} 
              name={food.food_name} 
              image={food.photo_url} 
              foods={foods} 
              setFoods={setFoods}>                
              </CartFood>
            )
          })
        }
      
      </div>

      <button><strong>End your meal</strong></button>
    </div>
  )
}

export default Cart