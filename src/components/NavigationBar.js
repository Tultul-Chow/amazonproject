import { Link } from 'react-router-dom';
import '../css/app.css'

const Navigation = () => {
    return (
        <div  className="bg-light navLink gap-1"><br/>
                <Link  className="nav-link" style={{color:"white"}} to="/BestSellers">Bestsellers</Link> 
                <Link className="nav-link" style={{color:"white"}}  to="/Clothing">Clothing </Link>
                <Link className="nav-link" style={{color:"white"}}  to="/PetNeeds">Pet Needs</Link>
                <Link className="nav-link" style={{color:"white"}} to="/Cleaning">Cleaning</Link>
                <Link className="nav-link" style={{color:"white"}}  to="/HomeDecor">Home Decor</Link>
        </div>
    );
}

export default Navigation;