const SET_SORT_QUERY = 'SET_SORT_QUERY'
const SET_FILTER_QUERY = 'SET_FILTER_QUERY'
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

const defaultState = {
    sortQuery: '',
    filterQuery: '',
    searchQuery: ''
}

export default function queryReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SORT_QUERY:
            return {
                ...state,
                sortQuery: action.payload
            }
        case SET_FILTER_QUERY:
            return {
                ...state,
                filterQuery: action.payload
            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state
    }
}


export const setSortQuery = (query) => ({type: SET_SORT_QUERY, payload: query})
export const setFilterQuery = (query) => ({type: SET_FILTER_QUERY, payload: query})
export const setSearchQuery = (query) => ({type: SET_SEARCH_QUERY, payload: query})
