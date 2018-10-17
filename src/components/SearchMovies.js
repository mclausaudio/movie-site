import React, { Component } from 'react';
import axios from 'axios'

import MovieCard from './Card';

class SearchMovies extends Component {
    constructor(props){
        super(props);

        this.state = {
            results: []
        }
    }

    componentWillMount(){
        let api_key = 'api_key=8767ba99f89d915e78f296b1a16b13bb';
        let api_search = `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.title}&${api_key}`

        axios.get(api_search)
        .then(response => this.setState({results: response.data.results}))
        .catch(err => console.log(err));
    }

    render(){
        let { results } = this.state
        let movieCards = (<h1>Loading...</h1>);

            if (this.state.results.length > 0) {
                movieCards = results.map(m => {
                    return <MovieCard 
                                key={m.id}
                                id={m.id}
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

export default SearchMovies;