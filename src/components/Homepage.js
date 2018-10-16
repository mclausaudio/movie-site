import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as movieActions from '../store/actions/movieActions';
import { bindActionCreators } from 'redux';

class Homepage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.movieActions.fetchTopMovies();
        
        // axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8767ba99f89d915e78f296b1a16b13bb')
        // .then((res) => this.setState({topMovie: res.data.results[0]}))
        // .catch(err => console.log(err))
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
                        <h3>Today's Top Film</h3>
                        <h1>{topMovie.title}<span>Average Rating</span></h1>
                        <div className="row">
                            <div className="col-md-7">
                                <p>Brief Overview</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                )
            }
        return (
            <div className="hero" style={style}>
                {loadHomepage}
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