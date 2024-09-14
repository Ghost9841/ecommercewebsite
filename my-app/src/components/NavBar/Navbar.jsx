import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  
  const [menu,setMenu] = useState("bazar");

  return (


  <div className="navbar bs-primary">
    <div className="nav-logo">
      <Link to="/"><img src={logo} alt="logo.png" /></Link>
      <p  onClick={()=> {setMenu("home")}}><Link style = {{color:"purple",textDecoration: "none"}}  to = "/">Bazar Products</Link></p>
    </div>
    <ul className="nav-menu">
      <li onClick={()=> {setMenu("home")}}><Link style = {{color:"purple",textDecoration: "none"}}to = "/">Home</Link>{menu === "home"?<hr/>:<></>}</li>
      <li onClick={()=> {setMenu("women")}}><Link style = {{color:"purple",textDecoration: "none"}} to = '/womens'>Women</Link>{menu === "women"?<hr/>:<></>}</li>
      <li onClick={()=> {setMenu("men")}}><Link style = {{color:"purple",textDecoration: "none"}} to = "/mens">Men</Link>{menu === "men"?<hr/>:<></>}</li>
      <li onClick={()=> {setMenu("kids")}}><Link style = {{color:"purple",textDecoration: "none"}}  to = "/kid">Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
     <Link  to="/log"> <button>Login</button></Link>
      <Link to ="/carts"><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">0</div>
    </div>
  </div>
  )
}

export default Navbar;
