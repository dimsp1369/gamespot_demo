import React, {useEffect} from 'react';
import GameTile from "./GameTile";
import {useDispatch, useSelector} from "react-redux";
import {getGames, getNextStackGames, getPlatform} from "../store/actions/asyncActions";
import {Link} from "react-router-dom";
import {setCurrentGame} from "../store/reducers/currentGameReducer";
import SortInput from "./utils/SortInput";
import useInfinityScroll from "../hooks/useInfinityScroll";
import FilterInput from "./utils/FilterInput";

const HomeBodyTile = () => {
    const dispatch = useDispatch()

    const games = useSelector(state => state.gamesReducer.games)
    const next = useSelector(state => state.gamesReducer.next)

    const {lastElementRef} = useInfinityScroll(getNextStackGames, next)

    useEffect(() => {
        dispatch(getGames())
        dispatch(getPlatform())
    }, [])

    return (
        <div>
            <h1>New and trending</h1>
            <h5>Based on player counts and release date</h5>
            <div className='Filters-Container'>
                <SortInput/>
                <FilterInput/>
            </div>
            <div className='GamesTile-Container'>
                {games.map((game, index) => <nav key={game.id} ref={lastElementRef}
                                                 onClick={() => dispatch(setCurrentGame(game))}>
                        <Link to={`/games/${game.slug}`}>
                            <GameTile game={game}/>
                        </Link>
                    </nav>
                )}

            </div>
        </div>
    );
};

export default HomeBodyTile;
