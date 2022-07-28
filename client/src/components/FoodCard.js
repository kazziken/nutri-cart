import React from "react";

function FoodCard({user, item, carts, setSelectedCart, updateCart, onDelete}) {
  
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
        food_name: item.food_name,
        photo_url: item.photo.thumb
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data ,"coming here")
        return data;
      })
      .catch((err) => console.error(err));
      console.log(item)
      updateCart(item);
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
      {addButton}
    </div>
  );
}

export default FoodCard;