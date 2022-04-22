import React from 'react';
import GameMeta from "./GameMeta";
import DOMPurify from "dompurify";

const GameColumnOne = ({game}) => {

    const sanitizedData = (data) => ({
        __html: DOMPurify.sanitize(data)
    })
    return (
        <div className='GameDescription-Column_1'>
            <h1>{game.name}</h1>
            <h4>About</h4>
            <p dangerouslySetInnerHTML={sanitizedData(game.description)}/>
            <div className='GameRating'>
                {game.ratings.map(r => <div key={r.id} style={{width: `${r.percent}%`}}/>)}
            </div>
            <GameMeta game={game}/>
        </div>
    );
};

export default GameColumnOne;
