import {useContext} from 'react';
import HomeDeco from "./HomeDeco";
import HomeContext from "../context/HomeContext";

const HomeDecoList = () => {

    const {homes} = useContext(HomeContext);

    return (
            <div>
            <h1 style={{paddingLeft:"600px",paddingTop:"50px"}}>Home Decoration Needs</h1>
                <div className="zoomBest gap">
                    {homes.map(home=>(<HomeDeco key={home.id} id={home.id} title={home.title} poster={home.poster} price={home.price}/>))}    
                </div>
            </div>

    )
}

export default HomeDecoList
