import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import HomeDecorList from "../components/HomeDecoList";
import Footer from "../components/Footer";
import React from 'react'

const HomeDecor = () => {
    return (
        <div>
            <Header/>
           <HomeDecorList/>
            <Footer/>
        </div>
    )
}

export default HomeDecor