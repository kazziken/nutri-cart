import React, { useState } from "react";

function CreateFoodForm({ user, item, change, setChange }) {
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
  
  const [newFood, setNewFood] = useState([]);

  function handleNewFood(e) {
    e.preventDefault();
    fetch("/new-food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
        // food_id: food.id,
        user_id: user.id
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setNewFood([...newFood, item]);
      }).then((data) => setNewFood(data))
      .catch((err) => console.error(err));
  }


  return (
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        <form onSubmit={() => handleNewFood()}>
          <div className="form-outline mb-4">
            <input
              type="foodName"
              value={foodName}
              placeholder="Please enter Food Name"
              onChange={(e) => setFoodName(e.target.value)}
              id="form2Example1"
              className="form-control"
            />
            <label className="form-label text-white">
              <strong>Food Name</strong>
            </label>
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
            <label className="form-label text-white">
              <strong>Picture URL</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="calories"
              value={calories}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Calories"
              onChange={(e) => setCalories(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Calories</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="saturatedFat"
              value={saturatedFat}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Saturated Fat"
              onChange={(e) => setSaturatedFat(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Saturated Fat</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="cholesterol"
              value={cholesterol}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Cholesterol"
              onChange={(e) => setCholesterol(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Total Fat</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="totalFat"
              value={totalFat}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Total Fat"
              onChange={(e) => setTotalFat(e.target.value)}
            />
            <label className="form-label text-white" >
              <strong>Total Fat</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="totalCarbohydrate"
              value={totalCarbohydrate}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Total Carbohydrate"
              onChange={(e) => setTotalCarbohydrate(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Total Carbohydrate</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="sodium"
              value={sodium}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Sodium"
              onChange={(e) => setSodium(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Sodium</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="dietaryFiber"
              value={dietaryFiber}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Dietary fiber"
              onChange={(e) => setDietaryFiber(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Dietary Fiber</strong>
            </label>
          </div>
          
          <div className="form-outline mb-4">
            <input
              type="sugars"
              value={sugars}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Sugars"
              onChange={(e) => setSugars(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Sugars</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="protein"
              value={protein}
              id="form2Example2"
              className="form-control"
              placeholder="Enter Protein"
              onChange={(e) => setProtein(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Protein</strong>
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="potassium"
              value={potassium}
              id="form2Example2"
              className="form-control"
              placeholder="Enter potassium"
              onChange={(e) => setPotassium(e.target.value)}
            />
            <label className="form-label text-white">
              <strong>Potassium</strong>
            </label>
          </div>

          <button type="submit" variant="contained">
            + Create Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateFoodForm;