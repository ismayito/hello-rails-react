import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import messageReducer from "./messageReducer";

const Store = configureStore({ reducer: messageReducer });

export default Store;
