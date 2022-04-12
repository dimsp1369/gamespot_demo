import React from 'react';
import SearchInput from "../components/utils/search/SearchInput";
import {Link} from "react-router-dom";

const TopMenu = () => {
    return (
        <div className='MenuContainer'>
            {/*  ----LOGO--------    -------Search input--------   ---------Profile------- */}
            <nav>
                <Link to='/'><span className='logo'>GameSpot</span></Link>
            </nav>

            <SearchInput/>
            <div>Avatars|Setting|Menu</div>
        </div>
    );
};

export default TopMenu;
