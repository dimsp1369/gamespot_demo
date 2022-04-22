const SET_GAMES = 'SET_GAMES'
const SET_NEXT_GAME_STACK = 'SET_NEXT_GAME_STACK'
const SET_SEARCHED_GAMES = 'SET_SEARCHED_GAMES'
const RESET_GAMES = 'RESET_GAMES'


const defaultState = {
    games: [],
    searchedGames: [],
    count: 0,
    next: null,
    previous: null,
}

export default function gamesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                games: action.payload.results,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous
            }
        case SET_NEXT_GAME_STACK:
            return {
                ...state,
                games: [...state.games, ...action.payload.results],
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous
            }

        case SET_SEARCHED_GAMES:
            return {
                ...state,
                searchedGames: action.payload.results,
            }
        case RESET_GAMES:
            return {
                ...state,
                games: [],
                searchedGames: [],
                count: 0,
                next: null,
                previous: null,
            }
        default:
            return state
    }
}


export const setGames = (games) => ({type: SET_GAMES, payload: games})
export const setNextStack = (games) => ({type: SET_NEXT_GAME_STACK, payload: games})
export const setSearchedGames = (games) => ({type: SET_SEARCHED_GAMES, payload: games})
export const resetGames = () => ({type: RESET_GAMES})
