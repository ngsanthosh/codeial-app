import { CREATE_POST, UPDATE_POSTS } from "../actions/actionTypes"


export function posts (state=[],action) {
    switch(action.type){
        case UPDATE_POSTS:{
            return action.posts
        }
        case CREATE_POST:{
            return [action.post,...state]
        }
        default:
            return state
    }
    
}