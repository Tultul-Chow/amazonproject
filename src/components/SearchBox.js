import React from 'react'
import {useState} from "react"

const SearchBox = (props) => {

    const [searchBox ,setSearchBox] = useState("")

    return (
        <section >
           <form action="/productlist" method="get" className="col-md-4">
                <input  placeholder="Search" name="searchquery" style={{width:"400%",height:"600%"}} type="text" 
                value={searchBox}  onChange={(event)=>{
                    setSearchBox(event.target.value);
                    }}/>
            </form>
      </section>
    )
}
export default SearchBox;
