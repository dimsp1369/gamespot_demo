import axios from 'axios'
import {setGames, setNextStack, setSearchedGames} from "../reducers/gamesReducer";


const key = '0cdb7d176a9b4fc78fd2ae89d43d6aee'
const baseUrl = 'https://api.rawg.io/api/'

export const getGames = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}games?key=${key}&page_size=50`)
            dispatch(setGames(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getNextStackGames = (nextUrl) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${nextUrl}`)
            dispatch(setNextStack(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getSearchedGames = (searchQuery) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}games?key=${key}&page_size=10&search_exact=false&search=${searchQuery}`)
            dispatch(setSearchedGames(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getOrderedGames = (orderQuery) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}games?key=${key}&page_size=50&ordering=${orderQuery}`)
            dispatch(setGames(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
