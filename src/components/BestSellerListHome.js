import React from 'react'
import { useContext } from 'react';
import BestSeller from "./BestSellerHome";
import BestSellerContext from "../context/BestSellerContext";

const BestSellerListHome = () => {
    const { bestSellers } = useContext(BestSellerContext);

    return (

        <div >
            <h1 style={{ color: "black" }}>Best Sellers</h1>
            <div className="zoom-best gap">
                {bestSellers.map(bestSeller => (<BestSeller key={bestSeller.id} id={bestSeller.id} title={bestSeller.title} poster={bestSeller.poster} />))}
            </div>
        </div>

    )
}

export default BestSellerListHome
