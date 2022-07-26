import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login/Login";
import Cart from "./Cart"
import Profile from "./Profile"
import Navbar from "./Navbar";
import "./App.css"


function App() {
  const [user, setUser] = useState({});
  const [carts, setCarts] = useState([]);

  console.log(carts)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login 
            setUser={setUser}
            /> 
          </Route>
          <Route path="/home">
            <Home 
            setUser={user}
            user={user}
            carts={carts}
            setCarts={setCarts}
            />
          </Route>
          <Route path="/profile">
            <Navbar
            user={user} 
            setUser={setUser}
            />
            <Profile />
          </Route>
          <Route path="/cart">
            <Navbar 
            user={user} 
            setUser={setUser}
            />
            <Cart 
            user={user}
            carted={carts}
            setCarted={setCarts}
            />
          </Route>
        </Switch>
      </div>
  );
}

export default App;