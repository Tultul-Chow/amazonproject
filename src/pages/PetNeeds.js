import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import PetList from "../components/PetList";
import Footer from "../components/Footer";
import React from 'react'

const PetNeeds = () => {
    return (
        <div>
            <Header/>
           <PetList/>
            <Footer/>
        </div>
    )
}

export default PetNeeds