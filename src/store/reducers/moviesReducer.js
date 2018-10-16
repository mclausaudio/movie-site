import {FETCH_TOP_MOVIES, LOAD_TOP_MOVIES} from '../actions/actionTypes';

export default function movies(state = [], action){
    let newState;
    switch (action.type) {
        case FETCH_TOP_MOVIES:
            console.log('FETCH_TOP_MOVIES action');
            return action;
        case LOAD_TOP_MOVIES:
            newState = action.topMovies;
            console.log(action.topMovies)
            return newState;
        default:
            return state;
    }
}
