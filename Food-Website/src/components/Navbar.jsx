import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home")
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('Home')} className={menu === "Home" ? "active" : ""} >Home</Link>
        <a href="#Explore-Menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""} >Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""} >Mobile-App</a>
        <a href="#footer" onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""} >Contact-Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotalCartAmount()===0 ? "" : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
