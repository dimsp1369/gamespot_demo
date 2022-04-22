import React from 'react';

const GameColumnTwo = ({screenShots}) => {
    return (
        <div className='GameDescription-Column_2'>
            <div className='GameScreenShots'>
                {screenShots.slice(0, 4).map(img => <img src={img.image} key={img.id} alt={img.id}
                                                         className='ScreenShot-Tile'/>)}
                <div className='ScreenShot-Tile_Blank'>
                    <span> view all</span>
                </div>
            </div>
            <h4>Where to buy</h4>
        </div>
    );
};

export default GameColumnTwo;
