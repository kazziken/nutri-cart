import React from 'react'

function CartCard({id, name, photo, setDisplayCarts}) {

  function onDelete(){
    fetch((`/carts/${id}`), 
    {method: 'DELETE'}).then(res => res.json()
    .then(data => { 
        setDisplayCarts((id.filter(food => food.id !== data.id)))
      }))
  }

  return (
    <div>
        <p>{id}</p>
        <img src={photo}/>
        {name.map(food => (
          <p> {food.food_name} </p>
        ))}
        <button onClick={()=>onDelete()}> X </button>
    </div>
  )
}

export default CartCard;