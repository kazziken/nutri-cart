import React,{ useState} from 'react'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import FoodCard from './FoodCard';
import { v4 as uuidv4 } from 'uuid';

function Home({user}) {
  const [commonFood, setCommonFood] = useState([]);
  const [brandedFood, setBrandedFood] = useState([]);

  const commons = commonFood.map((item)=>{
    return(
      <FoodCard key={uuidv4()} item={item} user={user}/>
    )
  })
  const branded = brandedFood.map((item)=>{
    return(
      <FoodCard key={uuidv4()} item={item} user={user}/>
    )
  })

  return (
    <div>
        <Navbar/>
        <Searchbar setBrandedFood={setBrandedFood} setCommonFood={setCommonFood}/>
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