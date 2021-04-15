import React from 'react'
import Products from '../components/Products'

const AllProduct = (props) => {
    return (
        <div>
            <section className="movie-list-continer">
            {props.products.map((product)=>(<Products key={product.id} id={product.id}  title={product.title} description={product.description} price={product.price} />))}
       {console.log(products)} </section>
        </div>
    )
}

export default AllProduct
