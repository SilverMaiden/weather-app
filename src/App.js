import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Forecast from './components/Forecast';

class App extends Component {
  render() {
    return (
        <Router>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/forecast' component={Forecast} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
