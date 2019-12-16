import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './Components/Home';

export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/home' component={Home}/>
    </Switch>
)