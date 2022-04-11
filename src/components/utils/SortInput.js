import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getOrderedGames} from "../../store/actions/asyncActions";

const SortInput = () => {
    const [orderQuery, setOrderQuery] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (orderQuery) dispatch(getOrderedGames(orderQuery))
    }, [orderQuery])


    return (
        <label>
            Order by:
            <select onChange={(e) => setOrderQuery(e.target.value)} placeholder='order'>
                <option value="-released">Release date (new)</option>
                <option value="released">Release date (old)</option>
                <option value="-rating">Popularity (high)</option>
                <option value="rating">Popularity (low)</option>
            </select>
        </label>
    );
};

export default SortInput;
