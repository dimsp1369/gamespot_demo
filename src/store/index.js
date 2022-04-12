import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import gamesReducer from "./reducers/gamesReducer";
import currentGameReducer from "./reducers/currentGameReducer";
import platformReducer from "./reducers/platformReducer";
import queryReducer from "./reducers/queryReducer";


const rootReducer = combineReducers({
    gamesReducer,
    currentGameReducer,
    platformReducer,
    queryReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
