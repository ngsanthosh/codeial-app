import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import redx from "../reducers"

let store

export default function finalStore(){
    store=createStore(redx,applyMiddleware(thunk, logger));

    return store
}