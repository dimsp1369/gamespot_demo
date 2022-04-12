import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGames} from "../../store/actions/asyncActions";
import {setFilterQuery} from "../../store/reducers/queryReducer";

const SortInput = () => {
    const dispatch = useDispatch()
    const platforms = useSelector(state => state.platformReducer.platforms)
    const filterQuery = useSelector(state => state.queryReducer.filterQuery)
    const sortQuery = useSelector(state => state.queryReducer.sortQuery)

    const setFilterQueryHandler = (e) => {
        dispatch(setFilterQuery(e.target.value))
    }

    useEffect(() => {
        if (filterQuery) dispatch(getGames(sortQuery, filterQuery))
    }, [filterQuery])


    return (
        <select onChange={setFilterQueryHandler} className='FilterInput'>
            {platforms.map(platform => <option key={platform.id} value={platform.id}>{platform.name}</option>)}
        </select>
    );
};

export default SortInput;
