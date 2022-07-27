import React from "react";
import {useLocation} from "react-router-dom";


function FoodCard({user, item, carts, setSelectedCart, updateCart}) {
  
  // const [createdFoodCart, setCreatedFoodCart] = useState([])

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
        food_name: item.food_name,
        photo_url: item.photo.thumb
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data ,"coming here")
        return(data);
      })
      .catch((err) => console.error(err));
      console.log(item)
    updateCart(item);
  }
  

  function deleteItem() {
    console.log("delete called")
    fetch((`delete-cart-food/${carts.cart_foods.id}`), 
    {method: 'DELETE'})
    .then(res => res.json()
    .then(data => {
      setSelectedCart(item.filter((i)=> i.carts.cart_foods.id !== data.carts.cart_foods.id)
      )
    })
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