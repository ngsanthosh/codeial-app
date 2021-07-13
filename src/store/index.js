import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import red from "../reducers"

let store

export default function finalStore(){
    store=createStore(red,applyMiddleware(thunk, logger));

    return store
}