import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSearchedGames} from "../../../store/actions/asyncActions";
import SearchItem from "./SearchItem";
import {setCurrentGame} from "../../../store/reducers/currentGameReducer";
import {Link} from "react-router-dom";
import {reset} from "../../../store/reducers/gamesReducer";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const dispatch = useDispatch()
    const count = useSelector(state => state.gamesReducer.count)
    const searchedGames = useSelector(state => state.gamesReducer.searchedGames)

    useEffect(() => {
        if (searchQuery) {
            dispatch(getSearchedGames(searchQuery))
        }
    }, [dispatch, searchQuery])

    const onSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
    }

    const chooseGame = (searchedGame) => {
        dispatch(setCurrentGame(searchedGame))
        dispatch(reset())
        setSearchQuery('')
    }
    return (
        <div className='searchInput-Container'>
            <input type="text" placeholder={`Search ${count} games`} className='searchInput' onChange={onSearch}
                   value={searchQuery}/>
            <div className='searchResults-Container'>
                {searchedGames.map(searchedGame => <nav key={searchedGame.id}
                                                        onClick={() => chooseGame(searchedGame)}>
                        <Link to={`/games/${searchedGame.slug}`}>
                            <SearchItem searchedGame={searchedGame}/>
                        </Link>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default SearchInput;
