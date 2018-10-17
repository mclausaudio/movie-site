import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as movieActions from '../store/actions/movieActions';
import { bindActionCreators } from 'redux';

import DisplayInfo from './DisplayInfo';

class ShowMovie extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.movieActions.fetchMovie(this.props.match.params.id);
    }
    render(){
        let {title, backdrop_path, vote_average, 
            tagline, poster_path, overview, homepage,
            release_date, production_companies} = this.props.movie;
        let style = {
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
        }

        return (
            <div>
                <div className="hero" style={style}>
                <div className="container">
                    <div className="text-area text-center col-md-6 ml-auto mr-auto">
                        <h1 className="display-4 mt-3 mb-3">{title}</h1>
                        <h4 className="display-6 text-muted">{tagline}</h4>
                        <h6 className="display-6 text-muted">Average Rating: {vote_average}</h6>
                    </div>
                </div>
            </div>
            <DisplayInfo 
                poster={poster_path} 
                overview={overview} 
                homepage={homepage}
                release_date={release_date}
                production_companies={production_companies}
                />    
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        movie: state.moviesReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);