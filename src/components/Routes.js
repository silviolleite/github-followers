import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './About';
import SearchForm from './SearchForm';
import NoMatch from './NoMatch'


export default function Routes(){
	return (
		<Switch>
            <Route exact path='/' component={SearchForm}/>
            <Route path='/about' component={About}/>
            <Route component={NoMatch} />
        </Switch>
	)
}