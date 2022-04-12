import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGames} from "../../store/actions/asyncActions";
import {setSortQuery} from "../../store/reducers/queryReducer";

const SortInput = () => {
    const dispatch = useDispatch()

    const sortQuery = useSelector(state => state.queryReducer.sortQuery)
    const filterQuery = useSelector(state => state.queryReducer.filterQuery)

    const setSortQueryHandler = (e) => {
        dispatch(setSortQuery(e.target.value))
    }

    useEffect(() => {
        if (sortQuery) dispatch(getGames(sortQuery, filterQuery))
    }, [sortQuery])


    return (
        <label className='SortInput'>
            Order by:
            <select onChange={setSortQueryHandler} placeholder='order'>
                <option value="-released">Release date (new)</option>
                <option value="released">Release date (old)</option>
                <option value="-rating">Popularity (high)</option>
                <option value="rating">Popularity (low)</option>
            </select>
        </label>
    );
};

export default SortInput;
