import React, {useCallback, useEffect, useRef} from 'react';
import {data} from '../mock'
import GameTile from "./GameTile";
import {useDispatch, useSelector} from "react-redux";
import {getGames, getNextStackGames} from "../store/actions/asyncActions";
import {Link} from "react-router-dom";
import {setCurrentGame} from "../store/reducers/currentGameReducer";
import SortInput from "./utils/SortInput";

const HomeBodyTile = () => {

    const dispatch = useDispatch()
    const games = useSelector(state => state.gamesReducer.games)
    const next = useSelector(state => state.gamesReducer.next)

    useEffect(() => {
        dispatch(getGames())
    }, [])

    const observer = useRef()

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log('Next')
                dispatch(getNextStackGames(next))
            }
        })
        if (node) observer.current.observe(node)
    }, [next])

    return (
        <div>
            <h1>New and trending</h1>
            <h5>Based on player counts and release date</h5>
            <div>
                <SortInput/>
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
