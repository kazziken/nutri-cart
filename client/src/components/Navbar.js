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
        <div className="">
          <div className="">
            <div className="">
              <div className="nav-item active">
                <Link exact to="/Home" className="nav-link">
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Profile" className="nav-link" >
                  Profile
                </Link>
                </div >
              <div className="nav-item">
                <Link to="/Cart" className="nav-link" >
                Cart
                </Link>
              </div >
              <div className="nav-item">
                <Link to="/" className="nav-link" onClick={handleLogOut}>
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
