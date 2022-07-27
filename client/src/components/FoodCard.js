import React from "react";
import {useLocation} from "react-router-dom";


function FoodCard({user, item, carts, updateCart}) {

  const location = useLocation();

  function handleAddToCart() {
    fetch("/create-food-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: carts.id,
        user_id: user.id,
        food_id: item.tag_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.error(err));
    // setCarted(true);
    console.log(item)
    updateCart(item);
  }

  function deleteItem() {
    console.log("delete called")
    fetch(("/delete-cart-food"), 
    {method: 'DELETE'})
    .then(res => res.json()
    .then(data => {updateCart(data)})
    )
  }
    
  

  const addButton = <button onClick={() => handleAddToCart()}>Add to Cart</button>

  return (
    <div>
      <p>{item.food_name} serving size:{item.serving_qty}</p>
      <img
        src={item.photo.thumb}
        alt=""
        className="images"
        key={item.tag_id}
      />
      {location.pathname !== "/Cart"? addButton : <button onClick={() => deleteItem()}>Delete Button</button>}
    </div>
  );
}

export default FoodCard;