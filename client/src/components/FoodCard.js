import React, {useState} from "react";

function FoodCard({user, item, carts, setCarts}) {

  // const [carted, setCarted] = useState(false)

  function handleAddToCart() {
    fetch("/add-to-carts", {
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
        return data;
      })
      .catch((err) => console.error(err));
    setCarts(true);
  }


  return (
    <div>
      <p>{item.food_name} serving size:{item.serving_qty}</p>
      <img
        src={item.photo.thumb}
        alt=""
        className="images"
        key={item.tag_id}
      />
      <button onClick={() => handleAddToCart()}>Add to Cart</button>
    </div>
  );
}

export default FoodCard;