import React from 'react'
import './searchbox.css';

const SearchBox = ({onSearchChange}) => {
    return (
        <div id="searchbox">
            <div id="searchbox-input">
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
            <div id="searchbox-btns">
                <center>
                    <input 
                        type="submit"
                        value="Google Search"
                        className="sb-btn"
                    />
                    <input
                        type="submit"
                        value="I'm Feeling Lucky"
                        className="sb-btn"
                    />
                </center>
            </div>
        </div>
    )
}

export default SearchBox