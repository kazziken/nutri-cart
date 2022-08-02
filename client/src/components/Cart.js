import React, {useState,useEffect} from 'react'
import CreateFoodForm from './CreateFoodForm';
import CartFood from './CartFood';

function Cart({user}) {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch(`/latest-cart`)
      .then((response) => response.json())
      .then((data) => {
        
        setFoods(data.foods);
        console.log(data.foods);
      });
      },[CreateFoodForm]);
  
  console.log(foods)
    
  function addCalories(){
    let calories=0
    foods.forEach((item) => calories+=item.nf_calories)
    console.log(calories)
    return calories
  }

  function addFat(){
    let fat=0
    foods.forEach((item) => fat+=item.nf_total_fat)
    return fat
  }

  function addSaturatedFat(){
    let sats=0
    foods.forEach((item) => sats+=item.nf_saturated_fat)
    return sats
  }

  function addChol(){
    let chol=0
    foods.forEach((item) => chol+=item.nf_cholesterol)
    return chol
  }

  function addSodium(){
    let sodium=0
    foods.forEach((item) => sodium+=item.nf_sodium)
    return sodium
  }

  function addCarbs(){
    let carbs=0
    foods.forEach((item) => carbs+=item.nf_total_carbohydrate)
    return carbs
  }

  function addFiber(){
    let fiber=0
    foods.forEach((item) => fiber+=item.nf_dietary_fiber)
    return fiber
  }

  function addSugars(){
    let sugars=0
    foods.forEach((item) => sugars+=item.nf_sugars)
    return sugars
  }

  function addProtein(){
    let protein=0
    foods.forEach((item) => protein+=item.nf_protein)
    return protein
  }
  function addPotassium(){
    let potassium=0
    foods.forEach((item) => potassium+=item.nf_potassium)
    return potassium
  }


  return (
    <div>
      <CreateFoodForm foods={foods} setFoods={setFoods}/>
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
      <h1> All units (except for cal) are in grams</h1>
      <h2>Total Calories: {addCalories()}</h2>
      <h2>Total Fat: {addFat()}</h2>
      <h2>Total Saturated Fat: {addSaturatedFat}</h2>
      <h2>Total Cholesterol: {addChol()} </h2>
      <h2>Total Sodium: {addSodium()}</h2>
      <h2>Total Carbohydrates: {addCarbs()}</h2>
      <h2>Total Fiber: {addFiber()}</h2>
      <h2>Total Sugar: {addSugars()}</h2>
      <h2>Total Protein: {addProtein()}</h2>
      <h2>Total Potassium: {addPotassium()}</h2>


      <strong>Recommended Daily Intake of Nutrition by the NIH</strong>
        <br></br>
        <a href='https://health.gov/sites/default/files/2019-09/Appendix-E3-1-Table-A4.pdf'>
          Link
          </a>
    </div>
  )
}

export default Cart