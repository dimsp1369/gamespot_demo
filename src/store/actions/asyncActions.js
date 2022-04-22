import axios from 'axios'
import {setGames, setNextStack, setSearchedGames} from "../reducers/gamesReducer";
import {setPlatforms} from "../reducers/platformReducer";
import {setCurrentGame, setScreenShots} from "../reducers/currentGameReducer";


const key = '0cdb7d176a9b4fc78fd2ae89d43d6aee'
const baseUrl = 'https://api.rawg.io/api/'

export const getGames = (orderQuery, platformQuery) => {
    const ordering = orderQuery && `ordering=${orderQuery}`
    const platform = platformQuery && `parent_platforms=${platformQuery}`
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}games?key=${key}&page_size=50&${ordering}&${platform}`)
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

export const getPlatform = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}platforms/lists/parents?key=${key}`)
            dispatch(setPlatforms(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getCurrentGame = (id) => {
    return async (dispatch) => {
        try {
            const gameResponse = await axios.get(`${baseUrl}games/${id}?key=${key}`)
            const screenShotResponse = await axios.get(`${baseUrl}games/${id}/screenshots?key=${key}`)
            dispatch(setCurrentGame(gameResponse.data))
            dispatch(setScreenShots(screenShotResponse.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getScreenShots = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}games/${id}/screenshots?key=${key}`)
            dispatch(setScreenShots(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
