import {useContext} from 'react';
import Pet from "./Pet";
import PetContext from "../context/PetContext";

const PetList = () => {

    const {pets} = useContext(PetContext);

    return (

        <section id="section-movie-list">
            <div className= 'container'>
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Pet Needs</h1>
                <div className="zoomBest gap">
                    {pets.map(pet=>(<Pet key={pet.id} id={pet.id} title={pet.title} poster={pet.poster} price={pet.price}/>))}    
                </div>
            </div>
        </section>

    )
}

export default PetList
