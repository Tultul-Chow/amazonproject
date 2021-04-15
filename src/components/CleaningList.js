import {useContext} from 'react';
import Cleaning from "./Cleaning";
import CleaningContext from "../context/CleaningContext";

const CleaningList = () => {

    const {cleanings} = useContext(CleaningContext);

    return (

        <section id="card">
            <div >
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Cleaning Neccesities</h1>
                <div className="zoomBest gap">
                    {cleanings.map(cleaning=>(<Cleaning key={cleaning.id} id={cleaning.id} title={cleaning.title} poster={cleaning.poster} price={cleaning.price}/>))}    
                </div>
            </div>
        </section>

    )
}

export default CleaningList