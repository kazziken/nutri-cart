import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';

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
      <FoodCard 
      key={uuidv4()} 
      item={item} 
      user={user} 
      carts={carts}
      selectedCart={selectedCart} 
      updateCart={updateCart} 
      />
    )
  })
  const branded = brandedFood.map((item)=>{
    return(
      <FoodCard 
      key={uuidv4()} 
      item={item} 
      user={user} 
      carts={carts}
      selectedCart={selectedCart}
      updateCart={updateCart} 
      />
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
        <div className='food-container'>
          <h1>Commons</h1>
          {commons}
          <h1>Branded</h1>
          {branded}
        </div>


    </div>
  )
}

export default Home