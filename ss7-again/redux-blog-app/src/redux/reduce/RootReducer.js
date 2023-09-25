import { combineReducers } from "redux";
import postReducer from "./PostReducer";

export const rootReducer = combineReducers({
    posts : postReducer 
})