import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const ProductDescription = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    

    useEffect(() => {

        fetch("https://amazonapp-fakedb.herokuapp.com/products/" + id)
            .then(res => res.json())
            .then((products) => {
               setProduct(products)
            })
            .catch(err => console.log(`Error ${err}`));

    }, [])
    return (
        <section >
            
            <div className="wrapper grid grid-col-4 grid-gap-2">
                <img className="product-img" src={'/img/' + product.poster} alt="" />
                <div class="product-info">
                    <div class="product-text">
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div class="product-price-btn">
                    <button type="button">Add to cart</button>
                </div>
            </div>
          
        </section>
    )
}
export default ProductDescription
