import React, {useEffect} from 'react'
import CreateFoodForm from './CreateFoodForm';
import FoodCard from './FoodCard';

function Cart({ item, user, carts, setCarts }) {

  useEffect(() => {
    fetch("/carts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarts(data);
      });
  }, []);

  return (
    <div>
      <CreateFoodForm />
      <FoodCard
        user={user}
        key={item.tag_id}
        food_name={item.food_name}
        photo_url={item.thumb.print}
        carts={carts}
        setCarted={setCarts}
        />
    </div>
  )
}

export default Cart