import React from 'react'

function Profile({user, carts}) {
  return (
    <div>
      {user.username}
      <img
      style={{ width: "160px", height: "160px", borderRadius: "80px" }}
      src={user.avatar}
      alt={user.avatar}
      />
      <h1>My Folders:</h1>
      {carts}
      </div>
  )
}

export default Profile