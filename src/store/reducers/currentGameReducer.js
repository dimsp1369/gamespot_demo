const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const SET_SCREENSHOTS = 'SET_SCREENSHOTS'
const RESET_GAME = 'RESET_GAME'

const defaultState = {
    game: null,
    screenShots: [],
}

export default function currentGameReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_GAME:
            return {
                ...state,
                game: action.payload,
            }
        case SET_SCREENSHOTS:
            return {
                ...state,
                screenShots: action.payload.results,
            }
        case RESET_GAME:
            return {
                ...state,
                game: null,
                screenShots: []
            }
        default:
            return state
    }
}


export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, payload: game})
export const setScreenShots = (screenShots) => ({type: SET_SCREENSHOTS, payload: screenShots})
export const resetGame = () => ({type: RESET_GAME})
