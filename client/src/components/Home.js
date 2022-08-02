import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';


function Home({user, carts, setCarts, updateCart, selectedCart}) {
  const [commonFood, setCommonFood] = useState([]);
  const [brandedFood, setBrandedFood] = useState([]);
  const [createMeal, setCreateMeal] = useState(false)
  const [createCartButton, setCreateCartButton] = useState(false)
  
  // set UseEffect of create cart to render if cart doesn't exist for user
  useEffect(() => {
    fetch('/current-cart')
      .then((res) => res.json())
      .then((data) => {console.log(data, 'coming from home')

      if (data)
        setCreateMeal(true);
    })
    },[createCartButton]);

  function handleCreateCart() {
    console.log(user)
    fetch("/create-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
      })
    })
      .then((res) => res.json())
      .then((data) => {
      setCarts(data)
      setCreateMeal(true);
      setCreateCartButton(!createCartButton);
      })
  }

  function handleCreateMeal(){
    
    handleCreateCart();
  }


  return (
    <div>
        <Navbar/>
        <h1> Welcome </h1>
        <h1> {user.username} </h1>
        <Button variant="contained" color="success" onClick={() => handleCreateMeal()}>Create New Cart</Button>
        {createMeal ? <Searchbar setBrandedFood={setBrandedFood} setCommonFood={setCommonFood}/> : <button onClick={handleCreateMeal}> Start your meal </button> }
        <h5>Branded Food</h5>
        <div className="row row-cols-1 row-cols-md-5 g-3 pictures" style={{marginLeft:"5%"}}>
              {brandedFood.map((item)=>{
                  return(
                    <div className="col">
                      <FoodCard 
                      key={uuidv4()} 
                      item={item} 
                      user={user} 
                      carts={carts}
                      selectedCart={selectedCart} 
                      updateCart={updateCart} 
                      />
                    </div>
                  )
                })}
          </div>
          <br/>
        <h5>Common Food</h5>
        <div className="row row-cols-1 row-cols-md-5 g-3 pictures" style={{marginLeft:"5%"}}>
              {commonFood.map((item)=>{
                  return(
                    <div className="col">
                      <FoodCard 
                      key={uuidv4()} 
                      item={item} 
                      user={user} 
                      carts={carts}
                      selectedCart={selectedCart} 
                      updateCart={updateCart} 
                      />
                    </div>
                  )
                })}
          </div>
        </div>  
  )
}

export default Home;