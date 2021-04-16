import { Link } from 'react-router-dom';
import '../css/app.css'

const Navigation = () => {
    return (
        <div  className="bg-light navLink gap-1"><br/>
                <Link  className="nav-link" to="/BestSellers">Bestsellers</Link> 
                <Link className="nav-link"   to="/Clothing">Clothing </Link>
                <Link className="nav-link"   to="/PetNeeds">Pet Needs</Link>
                <Link className="nav-link"  to="/Cleaning">Cleaning</Link>
                <Link className="nav-link"   to="/HomeDecor">Home Decor</Link>
        </div>
    );
}

export default Navigation;