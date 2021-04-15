import {Link} from "react-router-dom";

const Products = ({id,title,poster,price}) => {

    const alt= `${title} Poster `;

    const source = `/img/${poster}`;
    return (
        <div style={{border:"solid navy"}} className="movie-card">
           <Link to = {"/products/"+id}>
                <img src={source} alt={alt}/>   
            </Link> 
                <div className="movieContent">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Products