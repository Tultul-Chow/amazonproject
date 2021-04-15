import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import CategoryPart from '../components/CategoryPart'
import BestSellerHome from '../components/BestSellerListHome'

const Home = (props) => {


    return (
        <div className="homepage">
            <Header products={props.products} />
            <HeroSection/>
            <CategoryPart />
            <BestSellerHome />
            <Footer />
        </div>
    )
}

export default Home

