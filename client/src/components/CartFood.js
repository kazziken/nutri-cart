import React from 'react'

function CartFood(
  {id, 
    foods, 
    name, 
    image, 
    setFoods,
    calories,
    totalFat,
    saturatedFat,
    cholesterol,
    sodium,
    totalCarb,
    fiber,
    sugars,
    protein,
    pot
  }) 
  {

    function onDelete(){
        fetch((`/delete-cart-food/${id}`), 
        {method: 'DELETE'}).then(res => res.json()
        .then(data => { 
            setFoods((foods.filter(food => food.id !== data.id)))
          }))
      }

  return (
    <div>
        <h1>{name}</h1>
        <img src={image}></img>
        <p>Calories: {calories}</p>
        <p>Total Fat: {totalFat}</p>
        <p>Saturated Fat: {saturatedFat}</p>
        <p>Cholesterol: {cholesterol}</p>
        <p>Sodium: {sodium}</p>
        <p>Carbohydrates: {totalCarb}</p>
        <p>Fiber: {fiber}</p>
        <p>Sugar: {sugars}</p>
        <p>Protein: {protein}</p>
        <p>Potassium: {pot}</p>
        <button onClick={() => onDelete()}> Remove from cart </button>
        
    </div>
  )
}

export default CartFood