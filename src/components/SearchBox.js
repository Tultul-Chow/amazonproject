import React from 'react'
import {useState} from "react"

const SearchBox = (props) => {

    const [searchBox ,setSearchBox] = useState("")

    return (
        <section style={{paddingTop:"3%"}} >
           <form action="/productlist" method="get" className="col-md-4">
                <input  placeholder="Search" name="searchquery" style={{width:"200%",height:"400%"}} type="text" 
                value={searchBox}  onChange={(event)=>{
                    setSearchBox(event.target.value);
                    }}/>
            </form>
      </section>
    )
}
export default SearchBox;
