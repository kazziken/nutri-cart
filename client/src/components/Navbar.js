import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar({ setUser }) {
  let history = useHistory();

  function handleLogOut() {
    fetch("/logout", { method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser(null)
          history.push("/")
        }
      })
    }  
      
    return (
      <div>
        <div class="">
          <div className="">
            <div className="">
              <div class="nav-item active">
                <Link exact to="/Home" class="nav-link">
                  Home
                </Link>
              </div>
              <div class="nav-item">
                <Link to="/Profile" class="nav-link" >
                  Profile
                </Link>
                </div >
              <div class="nav-item">
                <Link to="/Cart" class="nav-link" >
                Cart
                </Link>
              </div >
              <div class="nav-item">
                <Link to="/" class="nav-link" onClick={handleLogOut}>
                  Sign Out
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
    );
  }


export default Navbar;
