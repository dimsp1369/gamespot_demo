import React from 'react';

const SearchItem = ({searchedGame}) => {
    return (
        <div className='searchResults-Item'>
            <img src={searchedGame.background_image} alt={searchedGame.name}/>
            <div>
                {searchedGame.name}
            </div>
        </div>
    );
};

export default SearchItem;
