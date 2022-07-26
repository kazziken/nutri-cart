import React, {useState} from "react";

function FoodCard({user, item, addToCart, setAddToCart}) {

  const [carted, setCarted] = useState(false)

  function handleAddToCart() {
    fetch("/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        food_id: item.tag_id,
        user_id: user.id
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      }) 
      .catch((err) => console.error(err));
    setAddToCart([...addToCart, item]);
    setCarted(carted);
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
      <button onClick={() => handleAddToCart(item)}> Add to Cart </button>
    </div>
  );
}

export default FoodCard;