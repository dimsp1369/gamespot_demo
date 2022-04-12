import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSearchedGames} from "../../../store/actions/asyncActions";
import SearchItem from "./SearchItem";
import {setCurrentGame} from "../../../store/reducers/currentGameReducer";
import {Link} from "react-router-dom";
import {reset} from "../../../store/reducers/gamesReducer";
import {setSearchQuery} from "../../../store/reducers/queryReducer";

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
            dispatch(reset())
        }
    }

    const chooseGame = (searchedGame) => {
        dispatch(setCurrentGame(searchedGame))
        dispatch(reset())
        dispatch(setSearchQuery(''))
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
