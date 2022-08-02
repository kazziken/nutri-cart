import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Navbar({ setUser }) {
  let history = useHistory();

  function handleLogOut() {
    fetch("/logout", { method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser({})
          history.push("/")
        }
      })
    }

  // const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
      
    return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div className="navbar-brand navbar-logo">
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
      <div className="collapse 
      navbar-collapse"
      id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </ul>
        <li className="nav-item active">
          <Link to="/Profile" className="nav-link" >
          <i
          className="fas
          fa-tachometer-alt">
          </i>Profile
          </Link>
        </li>
      </div>
    </nav>
    );
  }


export default Navbar;
