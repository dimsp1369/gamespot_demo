const SET_CURRENT_GAME = 'SET_CURRENT_GAME'

const defaultState = {
    game: {},
}

export default function currentGameReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_GAME:
            return {
                ...state,
                game: action.payload,
            }

        default:
            return state
    }
}


export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, payload: game})
