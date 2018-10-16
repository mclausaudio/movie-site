import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Popular from '../components/Popular';
import Homepage from '../components/Homepage';

const Main = (props) => {
    return (
        <div>
            <h1>Main Page</h1>
            <Switch>
                <Route exact path="/" render={()=> <Homepage />}></Route>
                <Route path="/popular" render={()=> <Popular />}></Route>
            </Switch>
        </div>
    )
}

export default Main;