import React, { useState } from "react";
import Button from '@mui/material/Button';

function CreateFoodForm({ foods, setFoods, carts, change, setChange }) {
  const [foodName, setFoodName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [calories, setCalories] = useState("");
  const [totalFat, setTotalFat] = useState("");
  const [saturatedFat, setSaturatedFat] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [sodium, setSodium] = useState("");
  const [totalCarbohydrate, setTotalCarbohydrate] = useState("");
  const [dietaryFiber, setDietaryFiber] = useState("");
  const [sugars, setSugars]= useState("");
  const [protein, setProtein] = useState("");
  const [potassium, setPotassium] = useState("");

  console.log(carts.id)
  
  function handleNewFood(e) {

    e.preventDefault();
    fetch('/current-cart')
      .then((res) => res.json())
      .then ((data) => {console.log(data)
    
      fetch("/create-cart-food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        food_name: foodName,
        photo_url: photoUrl,
        nf_calories: calories,
        nf_total_fat: totalFat,
        nf_saturated_fat: saturatedFat,
        nf_cholesterol: cholesterol, 
        nf_sodium: sodium, 
        nf_total_carbohydrate: totalCarbohydrate, 
        nf_dietary_fiber: dietaryFiber, 
        nf_sugars: sugars, 
        nf_protein: protein, 
        nf_potassium: potassium,
      }),
    })
      .then((res) => res.json())
      .then((item) => {    
        setFoods([...foods, item])
        setChange(!change)
      })})}
      //   fetch("/cart_foods", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       cart_id: carts.id,
      //       food_id: item.id,
      //     })
      //     .then((res) => res.json())
      //     .then((item) => {
      //       updateCart(item);
      //   })
      // })
      // }) 
    
  


  return (
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        <form onSubmit={(e) => handleNewFood(e)} >
          <div className="form-outline mb-4">
            <input
              type="foodName"
              value={foodName}
              placeholder="Please enter Food Name"
              onChange={(e) => setFoodName(e.target.value)}
              id="form2Example1"
              className="form-control"
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="photoUrl"
              value={photoUrl}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Food Picture URL"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="calories"
              value={calories}
              id="form2Example3"
              className="form-control"
              placeholder="Enter Calories"
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="saturatedFat"
              value={saturatedFat}
              id="form2Example4"
              className="form-control"
              placeholder="Enter Saturated Fat"
              onChange={(e) => setSaturatedFat(e.target.value)}
            />

          </div>

          <div className="form-outline mb-4">
            <input
              type="cholesterol"
              value={cholesterol}
              id="form2Example5"
              className="form-control"
              placeholder="Enter Cholesterol"
              onChange={(e) => setCholesterol(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="totalFat"
              value={totalFat}
              id="form2Example6"
              className="form-control"
              placeholder="Enter Total Fat"
              onChange={(e) => setTotalFat(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="totalCarbohydrate"
              value={totalCarbohydrate}
              id="form2Example7"
              className="form-control"
              placeholder="Enter Total Carbohydrate"
              onChange={(e) => setTotalCarbohydrate(e.target.value)}
            />

          </div>

          <div className="form-outline mb-4">
            <input
              type="sodium"
              value={sodium}
              id="form2Example8"
              className="form-control"
              placeholder="Enter Sodium"
              onChange={(e) => setSodium(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="dietaryFiber"
              value={dietaryFiber}
              id="form2Example9"
              className="form-control"
              placeholder="Enter Dietary fiber"
              onChange={(e) => setDietaryFiber(e.target.value)}
            />
          </div>
          
          <div className="form-outline mb-4">
            <input
              type="sugars"
              value={sugars}
              id="form2Example10"
              className="form-control"
              placeholder="Enter Sugars"
              onChange={(e) => setSugars(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="protein"
              value={protein}
              id="form2Example11"
              className="form-control"
              placeholder="Enter Protein"
              onChange={(e) => setProtein(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="potassium"
              value={potassium}
              id="form2Example12"
              className="form-control"
              placeholder="Enter potassium"
              onChange={(e) => setPotassium(e.target.value)}
            />
            <label className="form-label text-white">
            </label>
          </div>

          <Button type="submit" variant="contained" color="success">
            + Create Food
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateFoodForm;