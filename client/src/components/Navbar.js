import React , {useEffect} from 'react'
import './App.css';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';

function Navbar({setUser}) {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  let history= useHistory();

  function handleLogOut(){
    fetch("/logout", {method: "DELETE"})
      .then((r) => {
        if (r.ok) {
          setUser({})
          history.push("/")
        }
      })
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <Link className="navbar-brand navbar-logo" to="/" exact>
      </Link>

      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/Home" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Profile" exact>
                <i 
                className="far fa-address-book">
                </i>Profile
              </Link> 
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Cart" exact>
                <i 
                className="far fa-clone">
                </i>Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" exact onClick={handleLogOut}>
                <i 
                className="far fa-chart-bar">
                </i>Logout
              </Link>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;