
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import ClothingList from "../components/ClothingList";
import Footer from "../components/Footer";
import React from 'react'

const Clothing = () => {
    return (
        <div>
            <Header/>
           <ClothingList/>
            <Footer/>
        </div>
    )
}

export default Clothing
