import React from 'react';
import FoodCard from './FoodCard';

function FoodContainer({user,food}) {
  return (
    <div>
      <FoodCard
      key={food.id}
      id={food.id}
      src={food.photo_url}
      user = {user}
      />
  
  </div>
  )
}

export default FoodContainer