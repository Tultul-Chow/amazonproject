import {useContext} from 'react';
import BestSeller from "./Clothing";
import BestSellerContext from "../context/BestSellerContext";

const BestSellerList = () => {

    const {bestSellers} = useContext(BestSellerContext);

    return (

        <section >
            <div>
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Best Sellers</h1>
                <div className="zoomBest gap">
                    {bestSellers.map(bestSeller=>(<BestSeller key={bestSeller.id} id={bestSeller.id} title={bestSeller.title} poster={bestSeller.poster} price={bestSeller.price}/>))}    
                </div>
            </div>
        </section>

    )
}

export default BestSellerList
