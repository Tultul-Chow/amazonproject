import {useContext} from 'react';
import Clothing from "./Clothing";
import ClothingContext from "../context/ClothingContext";

const ClothingList = () => {

    const {clothings} = useContext(ClothingContext);

    return (
            <div >
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Clothing & Accessories</h1>
                <div className="zoomBest gap">
                    {clothings.map(clothing=>(<Clothing key={clothing.id} id={clothing.id} title={clothing.title} poster={clothing.poster} price={clothing.price}/>))}    
                </div>
            </div>

    )
}

export default ClothingList
