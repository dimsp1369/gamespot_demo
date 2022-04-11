import React from 'react';
import TopMenu from "./TopMenu";
import RelatedList from "./RelatedList";

const MainLayout = ({children}) => {
    return (
        <div>
            <TopMenu/>
            <div className='MainLayout-bodyContainer'>
                <RelatedList/>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
