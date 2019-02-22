import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import SearchForm from './components/SearchForm'
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Navigation apptittle="GitHub Followers" />
                    </header>
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;
