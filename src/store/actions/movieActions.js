import * as types from './actionTypes';
import axios from 'axios';

let topMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8767ba99f89d915e78f296b1a16b13bb';
let api_key = 'api_key=8767ba99f89d915e78f296b1a16b13bb';

export function loadTopMovies(json){
    return {
        type: types.LOAD_TOP_MOVIES,
        payload: json.results
    }
}

export function loadMovie(movie){
    console.log('hi',movie)
    return {
        type: types.LOAD_MOVIE,
        payload: movie
    }
}


export function fetchTopMovies(){
    return dispatch => {
        return axios.get(topMoviesUrl)
        .then(response => dispatch(loadTopMovies(response.data)))
        .catch(err => console.log(err));
    }
}

export function fetchMovie(id){
    return dispatch => {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?${api_key}`)
        .then(response => dispatch(loadMovie(response.data)))
        .catch(err => console.log(err));
    }
}