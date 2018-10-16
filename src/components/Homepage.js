import React, { Component } from 'react';
import axios from 'axios';

class Homepage extends Component {
    constructor(props){
        super(props);

        this.state = {
            topMovie: {}
        }
    }

    componentWillMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8767ba99f89d915e78f296b1a16b13bb')
        .then((res) => this.setState({topMovie: res.data.results[0]}))
        .catch(err => console.log(err))
    }

    render(){
        // let topMovies = this.state.popularMovies.map((m, i) => {
        //     return <li key={i}>{m.original_title}</li>
        // })
        return (
            <div>
                <h1>Home:</h1>
                {this.state.topMovie.original_title}
            </div>
        )
    }
}

export default Homepage;