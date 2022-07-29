import React, {useState,useEffect} from 'react'
import CreateFoodForm from './CreateFoodForm';
import CartFood from './CartFood';

function Cart({user}) {

  const [foods, setFoods] = useState([])
  // const [calories, setCalories] = useState(0);
  // const [totalFat, setTotalFat] = useState([]);
  // const [saturatedFat, setSaturatedFat] = useState([]);
  // const [cholesterol, setCholesterol] = useState([]);
  // const [sodium, setSodium] = useState([]);
  // const [totalCarbohydrate, setTotalCarbohydrate] = useState([]);
  // const [dietaryFiber, setDietaryFiber] = useState([]);
  // const [sugars, setSugars]= useState([]);
  // const [protein, setProtein] = useState([]);
  // const [potassium, setPotassium] = useState([]);
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
  
  // console.log(calories)
  
  function addCalories(){
    let calories=0
    foods.forEach((item) => calories+=item.nf_calories)
    console.log(calories)
    return calories
  }


  return (
    <div>
      <CreateFoodForm />
      <h1>CART: {user.username} </h1>
      <div className="cart-column">

        {
          foods.map(food => {
            return(
              <CartFood 
              id={food.id} 
              name={food.food_name} 
              image={food.photo_url}
              calories = {food.nf_calories}
              totalFat = {food.nf_total_fat}
              saturatedFat = {food.nf_saturated_fat}
              cholesterol = {food.nf_cholesterol}
              sodium = {food.nf_sodium}
              totalCarb = {food.nf_total_carbohydrate}
              fiber = {food.nf_dietary_fiber}
              sugars = {food.nf_sugars}
              protein = {food.nf_protein}
              pot = {food.nf_potassium}

              foods={foods} 
              setFoods={setFoods}>                
              </CartFood>
            )
          })
        }
      
      </div>
      <h2>Total Calories: {addCalories()}</h2>
      <h2>Total Fat:</h2>
      <h2>Total Saturated Fat: </h2>
      <h2>Total Cholesterol: </h2>
      <h2>Total Sodium: </h2>
      <h2>Total Carbohydrates: </h2>
      <h2>Total Fiber: </h2>
      <h2>Total Sugar: </h2>
      <h2>Total Protein: </h2>
      <h2>Total Potassium: </h2>


      <button><strong>End your meal</strong></button>
    </div>
  )
}

export default Cart