import React from 'react'
import './searchbox.css';
const SearchBox = () => {
    return (
        <div style={{position:"relative", width:"561px", height:"44px"}}>
            <input 
                className="pa3 ba b--green bg-lighest-blue" 
                type='search' 
                placeholder='Search Google or type in a URL' 
                style={{width:"100%", height:"42px", paddingLeft:"52px", paddingRight:"44px", border:"none", outline:"none", borderRadius:"calc(0.5 * 44px)", boxSizing:"border-box", backgroundColor:"#EFEFEF"}}
            />
            <button id="search"></button>
        </div>
    )
}

export default SearchBox