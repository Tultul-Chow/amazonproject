import {Link} from "react-router-dom";
const BestSeller = ({id,title,poster,price}) => {


    const alt= `${title} Poster `;

    const source = `/img/${poster}`;
    return (
        <div className="each-product-best">
           <Link to = {"/products/"+id}>
                <img src={source} alt={alt}/>   
            </Link> 

            <div className="productDes">
                <h6 style={{fontFamily:"Lucida Sans",fontSize="small"}}>{title}</h6>
                <p>{price}</p>
            </div>
        </div>
    )
}


export default BestSeller