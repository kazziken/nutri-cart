import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login/Login";
import Cart from "./Cart"
import Profile from "./Profile"
import "./App.css"

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <Login setUser={user}/>
          </Route>
          <Route path="/home">
            <Home user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;