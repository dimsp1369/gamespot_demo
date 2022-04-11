import React from 'react';
import {Link} from "react-router-dom";

const RelatedList = () => {
    return (
        <div className='RelatedList-Container'>
            <nav className='link'>
                <Link to="/"><span className='text-Link'>Home</span></Link>
            </nav>
        </div>
    );
};

export default RelatedList;
