import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CharactersList from './components/characters/CharactersList';
import SingleCharacter from './components/characters/SingleCharacter';
import ComicsList from './components/comics/ComicsList';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Home from './components/home/Home';
import SeasonsList from './components/seasons/SeasonsList';
import SingleSeason from './components/seasons/SingleSeason';
import BooksList from './components/books/BooksList';
import SingleBook from './components/books/SingleBook';
import SingleVolume from './components/comics/SingleVolume';
import Issue from './components/comics/Issue';
import EpisodesList from './components/episodes/EpisodesList';
import SingleEpisode from './components/episodes/SingleEpisode';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/books/:id" component={SingleBook} />
        <Route path="/books" component={BooksList} />
        <Route path="/characters/:name" component={SingleCharacter} />
        <Route path="/characters" component={CharactersList} />
        <Route path="/comics/volumes/:name/:id" component={Issue} />
        <Route path="/comics/volumes/:name" component={SingleVolume} />
        <Route path="/comics" component={ComicsList} />
        <Route path="/episodes/:id" component={SingleEpisode} />
        <Route path="/episodes" component={EpisodesList} />
        <Route path="/home" component={Home} />
        <Route path="/seasons/:id" component={SingleSeason} />
        <Route path="/seasons" component={SeasonsList} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
