import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import BestSellertList from "../components/BestSellerList";
import Footer from "../components/Footer";
import React from 'react'

const BestSeller = () => {
    return (
        <div>
            <Header/>
           <BestSellertList/>
            <Footer/>
        </div>
    )
}

export default BestSeller