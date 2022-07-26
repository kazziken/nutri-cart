import React from 'react';
import FoodCard from './FoodCard';

function FoodContainer({ user, item, carts, setCarts}) {
  return (
    <div>
      <FoodCard
      user={user}
      key={item.id}
      id={item.id}
      photo_url={item.thumb.print}
      carts={carts}
      setCarted={setCarts}
      />
  
  </div>
  )
}

export default FoodContainer