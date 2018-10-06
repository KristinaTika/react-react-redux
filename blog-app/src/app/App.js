import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import PostsList from './components/PostsList';
import NewPost from './containers/NewPost';
import SinglePost from './components/SinglePost';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:id" component={SinglePost} />
            <Route path="/posts" component={PostsList} />
            <Redirect from='/' to="/posts" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
