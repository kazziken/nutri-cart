import React, {useEffect} from 'react'
import CartCard from './CartCard'
import {useState} from 'react';


function Profile({user}) {
  const [displayCarts, setDisplayCarts] = useState([]);
  console.log(displayCarts)

  useEffect(() => {
    fetch('/all-carts')
      .then((response) => response.json())
      .then((item) => {
        setDisplayCarts(item);
        console.log(item);
      });
      },
    []);

    // console.log(displayCarts[0].foods[0].food_name);
    // console.log(displayCarts[0].foods)


    const renderCarts = user ? displayCarts.map((cart) => (
      <CartCard
        id={cart.id}
        key={cart.id}
        name={cart.foods}
        time={cart.created_at}
        displayCarts={displayCarts}
        setDisplayCarts={setDisplayCarts}
      />
    )) : null
    

  return (
    <div>
      <h1 id="username">{user.username}</h1>
      <img
      style={{ width: "160px", height: "160px", borderRadius: "80px" }}
      src={user.avatar}
      alt={user.avatar}
      id="avatar"
      />
      <h1 id="folders">My Folders:</h1>
      {renderCarts}
      </div>
  )
}

export default Profile