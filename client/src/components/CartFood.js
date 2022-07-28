import React from 'react'

function CartFood({id, foods, name, image, setFoods}) {

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
        <button onClick={() => onDelete()}> Remove from cart </button>
        
    </div>
  )
}

export default CartFood