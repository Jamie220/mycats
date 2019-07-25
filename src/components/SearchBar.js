import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({search}) => {

    return (
        <div className ="tc">
            <input  
            className="pa3 b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search your cats.." 
            onChange={search}
            />
            <button className="pa3" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
}
export default SearchBar;