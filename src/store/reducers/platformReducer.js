const SET_PLATFORM = 'SET_PLATFORM'

const defaultState = {
    platforms: [],
}

export default function platformReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PLATFORM:
            return {
                ...state,
                platforms: action.payload.results,
            }

        default:
            return state
    }
}


export const setPlatforms = (platforms) => ({type: SET_PLATFORM, payload: platforms})

