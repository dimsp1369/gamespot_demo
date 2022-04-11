import React from 'react';

const GameTile = ({game}) => {
    return (
        <div className='GameTile'>
            <img src={game.background_image} alt=""/>
            <div className='game-shortDescription'>
                <h3>{game.name}</h3>
                <span>Rating: {game.rating}</span>
                <span>Release date : {game.released}</span>
            </div>
        </div>
    );
};

export default GameTile;
