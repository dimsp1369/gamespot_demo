import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentGame, getSearchedGames} from "../../../store/actions/asyncActions";
import SearchItem from "./SearchItem";
import {resetGame} from "../../../store/reducers/currentGameReducer";
import {Link} from "react-router-dom";
import {resetGames} from "../../../store/reducers/gamesReducer";
import {resetQuery, setSearchQuery} from "../../../store/reducers/queryReducer";

const SearchInput = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.gamesReducer.count)
    const searchedGames = useSelector(state => state.gamesReducer.searchedGames)
    const searchQuery = useSelector(state => state.queryReducer.searchQuery)

    useEffect(() => {
        if (searchQuery) {
            dispatch(getSearchedGames(searchQuery))
        }
    }, [dispatch, searchQuery])

    const onSearch = (e) => {
        const query = e.target.value
        dispatch(setSearchQuery(query))
        if (!query) {
            dispatch(resetGames())
        }
    }

    const chooseGame = (id) => {
        dispatch(getCurrentGame(id))
        dispatch(resetGames())
        dispatch(resetGame())
        dispatch(resetQuery())
    }
    return (
        <div className='searchInput-Container'>
            <input type="text" placeholder={`Search ${count} games`} className='searchInput' onChange={onSearch}
                   value={searchQuery}/>
            <div className='searchResults-Container'>
                {searchedGames.map(searchedGame => <nav key={searchedGame.id}
                                                        onClick={() => chooseGame(searchedGame.id)}>
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
