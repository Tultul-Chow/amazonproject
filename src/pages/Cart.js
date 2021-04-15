import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import empty from '../images/emptyCart.jpg'
import {Link} from 'react-router-dom'

const Cart = () => {
    return (
        <div className="cartView">
            <Header/>
            <div className="cart1">
            <img style={{width:"20%"}} src={empty}></img>
            <div className="cart2">
            <h1>Your Cart Is Empty </h1>
            <Link to="/"><p type="button"style={{fontSize:"small" }}>Please Start Shopping </p></Link>
            <div className="cartButton gap">
            <Link to="/Login"><button className ="button" style={{width:"110%",height:"15%",fontSize:"12px"}} type="button" >Sign In Please  </button></Link>
            <Link to="/SignUp"><button className ="button" style={{width:"90%",height:"15%",fontSize:"12px",backgroundColor:"white"}}type="button" >Join us Now</button></Link>
            </div></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
