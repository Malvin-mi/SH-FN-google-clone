import React from 'react'
import './searchbox.css';
const SearchBox = () => {
    return (
        <div id="search">
            <input 
                id="search-input" 
                type='text' 
                autoFocus="true"
                autoComplete="off"
            />
            <span id="search-icon"></span>
            <button id="search-voice-btn"></button>
        </div>
    )
}

export default SearchBox