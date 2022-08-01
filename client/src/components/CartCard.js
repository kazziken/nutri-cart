import React from 'react'

function CartCard({id, name, displayCarts, setDisplayCarts, time}) {

  function onDelete(){

    setDisplayCarts((displayCarts.filter(cart => cart.id !== id)))
    fetch((`/carts/${id}`), 
    {method: 'DELETE'}).then(res => res.json())
      
  }

  return (
    <div>
        <p>{id}</p>
        <p>{time}</p> 

        {/* <img src={photo}/> */}
        {name.map(food => (
          <div>          
            <p>{food.food_name}</p>
            <img src={food.photo_url}/>
          </div>


        ))}

<button onClick={()=>onDelete()}> Delete Cart </button>
       
    </div>
  )
}

export default CartCard;