import { Link } from "react-router-dom";
const BestSellerHome = ({ id, title, poster, price }) => {


    const alt = `${title} Poster `;

    const source = `/img/${poster}`;
    return ( 
        <div className="each-product-best">
           <Link  to={"/products/" + id}><img src={source} alt={alt} /></Link>
           <p>{title} </p>
        </div>
    )
}


export default BestSellerHome