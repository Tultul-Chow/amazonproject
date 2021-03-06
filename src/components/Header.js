import cart from '../images/shopping-cart.png'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox'
import Navigation from "../components/NavigationBar"

const Header = () => {
  
    return (
        <div className="full-header">
            <div className=" header" >
                <Link to="/">< img src={logo} style={{ width: "50%" ,paddingLeft:"10%"}} alt="Amazon" /></Link>
                <SearchBox  />
            </div>
            <div className="header-part gap-1">
                <Link to="/Cart">  <img id="cart" src={cart} style={{ width: "40%" }} /></Link>
                <Link className="nav-link " to="/AboutUs" >About Us</Link>
                <Link className="nav-link" to="/Login" >Hello, <br />Sign in</Link>
            </div>
            <Navigation /><br/>
        </div>

    )
}

export default Header;