import React from "react";
import {useState} from 'react';
import Card from "@mui/material/Card";


function FoodCard({user, item, carts, updateCart, selectedCart}) {

  const [nutrition, setNutrition] = useState([])
  
  function handleAddToCart() {

    console.log( item.food_name, 'clicked item')
    
    fetch("https://trackapi.nutritionix.com/v2/natural/nutrients",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '82d8f938',
        'x-app-key': '556bd327893a5a9a92f6e7546b8da21c',
        'x-remote-user-id': 0
      },
      body: JSON.stringify({
        query: `${item.food_name}`
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data ,"coming here")
        setNutrition(...nutrition, data);
        console.log(data)
        fetch("/create-cart-food", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: carts.id,
            user_id: user.id,
            food_id: item.tag_id,
            food_name: item.food_name,
            photo_url: item.photo.thumb,
            nf_calories: data.foods[0].nf_calories,
            nf_total_fat: data.foods[0].nf_total_fat,
            nf_saturated_fat: data.foods[0].nf_saturated_fat,
            nf_cholesterol: data.foods[0].nf_cholesterol, 
            nf_sodium: data.foods[0].nf_sodium, 
            nf_total_carbohydrate: data.foods[0].nf_total_carbohydrate, 
            nf_dietary_fiber: data.foods[0].nf_dietary_fiber, 
            nf_sugars: data.foods[0].nf_sugars, 
            nf_protein: data.foods[0].nf_protein, 
            nf_potassium: data.foods[0].nf_potassium
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
      })
      
    

  }

 
  

  const addButton = <button onClick={() => handleAddToCart()}>Add to Cart</button>

  return (
    <Card>
      <h1>{item.food_name}</h1>
      <p>{item.food_name} serving size:{item.serving_qty}</p>
      <img
        src={item.photo.thumb}
        alt=""
        className="images"
        key={item.tag_id}
      />
      {addButton}
    </Card>
  );
}

export default FoodCard;