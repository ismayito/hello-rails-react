import { configureStore, combineReducers } from "@reduxjs/toolkit";
import greetingsSlice from "./greetingsSlice";

const rootReducer = combineReducers({ greetings: greetingsSlice });
const store = configureStore({ reducer: rootReducer });

export default store;
