import React from 'react';
import {useSelector} from "react-redux";

const Game = () => {
    const game = useSelector(state => state.currentGameReducer.game)

    return (
        <div className='Game-Container'>
            <div className='GameDescription-Wrapper'>
                <div className='GameDescription-Column_1'>
                    <h1>{game.name}</h1>
                    <p></p>
                </div>
                <div className='GameDescription-Column_2'>
                    <div className='GameScreenShots'>
                        {game.short_screenshots.slice(0, 4).map(img => <img src={img.image} key={img.id}
                                                                            className='ScreenShot-Tile'/>)}
                        <div className='ScreenShot-Tile_Blank'>
                            <span> view all</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
