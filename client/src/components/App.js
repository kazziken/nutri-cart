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
  const [carted, setCarted] = useState(false);

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
            setUser={user}
            /> 
          </Route>
          <Route exact path="/home">
            <Home 
            setUser={user} 
            user={user}
            carted={carted}
            setCarted={setCarted}
            />
          </Route>
          <Route exact path="/profile">
            <Navbar
            user={user} 
            setUser={setUser}
            />
            <Profile />
          </Route>
          <Route exact path="/cart">
            <Navbar 
            user={user} 
            setUser={setUser}
            />
            <Cart 
            user={user}
            carted={carted}
            setCarted={setCarted}
            />
          </Route>
        </Switch>
      </div>
  );
}

export default App;