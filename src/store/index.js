import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import gamesReducer from "./reducers/gamesReducer";
import currentGameReducer from "./reducers/currentGameReducer";


const rootReducer = combineReducers({
    gamesReducer,
    currentGameReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
