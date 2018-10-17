import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as movieActions from '../store/actions/movieActions';
import { bindActionCreators } from 'redux';

import SearchBar from './SearchBar';

class Homepage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.movieActions.fetchTopMovies();
    }

    render(){
        let topMovie = this.props.topMovies[0]
        let style = {};
        let loadHomepage = (<h1>Loading...</h1>)
            if (this.props.topMovies.length > 0) {
                style = {
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${topMovie.backdrop_path})`
                }
                loadHomepage = (
                    <div className="container">
                        <div className="text-area col-md-5">
                            <h3>Today's Top Film</h3>
                            <h1>{topMovie.title}</h1>
                            <h5>Avg. Rating - {topMovie.vote_average}</h5>
                            <p>{topMovie.overview}</p>
                        </div>
                    </div>
                )
            }
        return (
            <div>
                <div className="hero" style={style}>
                    {loadHomepage}
                </div> 
                <SearchBar />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        topMovies: state.moviesReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);