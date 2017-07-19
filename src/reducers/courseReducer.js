import * as types from "../actions/actionTypes";
export default function courseReducer(state = [],action){
    switch(action.type){
        case types.CREATE_COURSE:    
            return [...state, 
            Object.assign({}, action.course)];//copy course arraym using action.course is reference and its not allowed
        default:
            return state;
    }
}