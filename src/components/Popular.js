import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as movieActions from '../store/actions/movieActions';
import { bindActionCreators } from 'redux';

import MovieCard from './MovieCard';

class Popular extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.movieActions.fetchTopMovies();
    }

    render(){
        let { topMovies } = this.props
        let movieCards = (<h1>Loading...</h1>);
            if (this.props.topMovies.length > 0) {
                movieCards = topMovies.map(m => {
                    return <MovieCard 
                                key={m.id}
                                title={m.title} 
                                rating={m.vote_average} 
                                overview={m.overview} 
                                release={m.release_date}
                                image={m.poster_path}
                            />
                })
            }
        return (
            <div className="container-fluid">
                <h1 className="text-center display-4 mt-3 mb-3">Popular Films</h1>
                <div className="d-flex flex-wrap">
                    {movieCards}
                </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Popular);