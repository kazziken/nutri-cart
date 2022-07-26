import React,{ useState} from 'react'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';

function Home({user, carts, setCarts}) {
  const [commonFood, setCommonFood] = useState([]);
  const [brandedFood, setBrandedFood] = useState([]);
  const [createMeal, setCreateMeal] = useState(false)

  const commons = commonFood.map((item)=>{
    return(
      <FoodCard key={uuidv4()} item={item} user={user} carts={carts} setCarts={setCarts}/>
    )
  })
  const branded = brandedFood.map((item)=>{
    return(
      <FoodCard key={uuidv4()} item={item} user={user} carts={carts} setCarts={setCarts}/>
    )
  })

  function handleCreateCart() {
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
        console.log(data)
        setCarts(data)
      })
  }

  function handleCreateMeal(){
    setCreateMeal(true);
    handleCreateCart();
  }

  

  return (
    <div>
        <Navbar/>
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