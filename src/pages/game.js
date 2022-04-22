import React from 'react';
import {useSelector} from "react-redux";
import GameColumnOne from "../components/game/GameColumnOne";
import GameColumnTwo from "../components/game/GameColumnTwo";

const Game = () => {
    const game = useSelector(state => state.currentGameReducer.game)
    const screenShots = useSelector(state => state.currentGameReducer.screenShots)


    if (!game) return <h2>Loading....</h2>
    return (
        <div className='Game-Container'>
            <div className='GameDescription-Wrapper'>
                <GameColumnOne game={game}/>
                <GameColumnTwo screenShots={screenShots}/>
            </div>
        </div>
    );
};

export default Game;
