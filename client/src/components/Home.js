import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles"

const Item = styled(Card)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
      // setCreateMeal(true);
    },[createCartButton]);

  const commons = commonFood.map((item)=>{
    return(
      <div>
      <Grid item xs={12} sm={6} md={3} lg={25}>
        <Item>
        <FoodCard 
        key={uuidv4()} 
        item={item} 
        user={user} 
        carts={carts}
        selectedCart={selectedCart} 
        updateCart={updateCart} 
        />
        </Item>
      </Grid>
      </div>
    )
  })
  const branded = brandedFood.map((item)=>{
    return(
      <div>
      <Grid item xs={12} sm={6} md={3} lg={25}>
        <Item>
        <FoodCard 
        key={uuidv4()} 
        item={item} 
        user={user} 
        carts={carts}
        selectedCart={selectedCart} 
        updateCart={updateCart} 
        />
        </Item>
      </Grid>
      </div>
    )
  })

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
        <button onClick={() => handleCreateMeal()}>Create new Cart</button>
        {createMeal ? <Searchbar setBrandedFood={setBrandedFood} setCommonFood={setCommonFood}/> : <button onClick={handleCreateMeal}> Start your meal </button> }
        <Grid className="cont-background" container spacing={4}>
          <h5>Commons</h5>
          {commons}
          <h5>Branded</h5>
          {branded}
        </Grid>


    </div>
  )
}

export default Home