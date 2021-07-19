import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user:{},
    error:null,
    isloggedin:false,
    inprogress:false
}

export default function auth(state=initialAuthState, action){
    switch(action.type){
        case LOGIN_START:{
            return {
                ...state,
                inprogress:true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                user: action.user,
                isloggedin:true,
                inprogress:false
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                error: action.error,
                inprogress:false
            }
        }
        default: return state
    }
}