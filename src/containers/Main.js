import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Popular from '../components/Popular';
import Homepage from '../components/Homepage';
import ShowMovie from '../components/ShowMovie';
import SearchMovies from '../components/SearchMovies';

const Main = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={()=> <Homepage />}></Route>
                <Route path="/popular" render={()=> <Popular />}></Route>
                <Route path="/movies/:id" component={ShowMovie}></Route>
                <Route path="/:title" component={SearchMovies}></Route>
            </Switch>
        </div>
    )
}

export default Main;