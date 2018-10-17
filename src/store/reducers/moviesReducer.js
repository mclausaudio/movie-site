import {FETCH_TOP_MOVIES, LOAD_TOP_MOVIES, FETCH_MOVIE, LOAD_MOVIE} from '../actions/actionTypes';

export default function movies(state = [], action){
    let newState;
    switch (action.type) {
        case FETCH_TOP_MOVIES:
            console.log('FETCH_TOP_MOVIES action');
            return action;
        case LOAD_TOP_MOVIES:
            newState = action.payload;
            console.log(action.payload)
            return newState;
        case FETCH_MOVIE:
            console.log('FETCH_MOVIE action');
            return action;
        case LOAD_MOVIE:
            console.log(action.payload)
            newState = action.payload;
            console.log(action.payload)
            return newState;
        default:
            return state;
    }
}
