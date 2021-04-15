import cart from '../images/shopping-cart.jpg'
import logo from '../images/logo.jpg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox'
import { useParams } from "react-router-dom"
import Navigation from "../components/NavigationBar"

const Header = () => {
  
    return (
        <div className="full-header">
            <div className=" header" >
                <Link to="/">< img src={logo} style={{ width: "70%" }} alt="Amazon" /></Link>
                <SearchBox  />
            </div>
            <div className="header-part gap-1">
                <Link to="/Cart">  <img id="cart" src={cart} style={{ width: "90%" }} /></Link>
                <Link className="nav-link " to="/AboutUs" style={{ color: "white" }} >About Us</Link>
                <Link style={{ color: "white" }} to="/Login" >Hello, <br />Sign in</Link>
            </div>
            <Navigation />
        </div>

    )
}

export default Header;