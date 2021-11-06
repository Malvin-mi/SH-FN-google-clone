import React from 'react'
import './searchbox.css';

const SearchBox = ({onSearchChange}) => {
    return (
        <div id="search">
            <input 
                id="search-input" 
                type='text' 
                autoFocus="true"
                autoComplete="off"
                maxLength="2048"
                onChange={onSearchChange}
            />
            <span id="search-icon"></span>
            <button id="search-voice-btn"></button>
        </div>
    )
}

export default SearchBox