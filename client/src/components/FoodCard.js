import React, {useState} from "react";

function FoodCard({item}) {

  // const [carted, setCarted] = useState(false)

  // console.log(tattoo)
  // function handleAddToCart() {
  //   console.log(user.id)
  //   console.log(id)
  //   console.log(user.username)
  //   fetch("/add-to-cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: user.id,
  //       food_id: id,
  //       label: user.username
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => console.error(err));
  
  //   // let tattoo = tattoo.id
  //   // console.log("Im liking");
  //   setAddToCart([...addToCart, food]);
  //   setCarted(carted);
  // }

  return (
    <div>
      <img
        src={item.photo.thumb}
        alt=""
        className="images"
        key={item.tag_id}
      />
    </div>
  );
}

export default FoodCard;