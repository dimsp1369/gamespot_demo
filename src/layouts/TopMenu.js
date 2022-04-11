import React from 'react';
import SearchInput from "../components/utils/search/SearchInput";

const TopMenu = () => {
    return (
        <div className='MenuContainer'>
            {/*  ----LOGO--------    -------Search input--------   ---------Profile------- */}
            <span className='logo'>GameSpot</span>
            <SearchInput/>
            <div>Avatars|Setting|Menu</div>
        </div>
    );
};

export default TopMenu;
