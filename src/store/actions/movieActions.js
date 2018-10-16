import * as types from './actionTypes';
import axios from 'axios';

let topMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8767ba99f89d915e78f296b1a16b13bb';

export function loadTopMovies(json){
    return {
        type: types.LOAD_TOP_MOVIES,
        topMovies: json.results
    }
}

export function fetchTopMovies(){
    return dispatch => {
        return axios.get(topMoviesUrl)
        .then(response => dispatch(loadTopMovies(response.data)))
        .catch(err => console.log(err));
    }
}