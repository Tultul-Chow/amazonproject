import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IndividualItem from '../components/ProductDescription'

const Individual = () => {
    return (
        <div className="prodDes">
            <Header/><br/>
            <IndividualItem/><br/>
            <Footer/>
        </div>
    )
}

export default Individual
