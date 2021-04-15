import {Link} from "react-router-dom";
const HomeDeco = ({id,title,poster,price}) => {


    const alt= `${title} Poster `;

    const source = `/img/${poster}`;
    return (
        <div className="each-product">
            
           <Link to = {"/products/"+id}>
                <img src={source} alt={alt}/>   
            </Link> 

            <div className="productDes">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default HomeDeco