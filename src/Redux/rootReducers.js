import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";

const combinedReducers = combineReducers({
    auth: AuthSlice
})

export const rootReducer = (state, action) => {
    return combinedReducers(state, action)
} 