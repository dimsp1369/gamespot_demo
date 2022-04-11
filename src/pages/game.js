import React from 'react';
import {useSelector} from "react-redux";

const Game = () => {
    const game = useSelector(state => state.currentGameReducer.game)


    return (
        <div>
            {game.name}
        </div>
    );
};

export default Game;
