import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
