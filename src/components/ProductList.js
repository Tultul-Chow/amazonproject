import React from 'react'
import { useLocation } from 'react-router'
import Products from '../components/Products'
import Header from './Header'
import Footer from './Footer'

function useParam(){
    return new URLSearchParams(useLocation().search);
}

const ProductList = (props) => {
    const searchquery = useParam();
    const products = props.products.filter(obj => {return obj.title.toLowerCase().indexOf(searchquery.get('searchquery').toLowerCase()) > -1  })
    return (
        <div><Header/>
            <div>
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Our products</h1>
                <div className="zoomBest gap">
                    {products.map(product=>(<Products key={product.id} id={product.id} title={product.title} poster={product.poster} price={product.price}/>))}    
                </div>
            </div><Footer/>
        </div>
    )
}

export default ProductList
