import React, {useEffect} from 'react'

function Profile({user, carts}) {

  useEffect(() => {
    fetch('/all-carts')
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
        return item;
      });
      }, 
    []);

  return (
    <div>
      {user.username}
      <img
      style={{ width: "160px", height: "160px", borderRadius: "80px" }}
      src={user.avatar}
      alt={user.avatar}
      />
      <h1>My Folders:</h1>
      <h1>{user[carts]}</h1>
      </div>
  )
}

export default Profile