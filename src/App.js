import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Player from './Components/Player';
import Footer from './Pages/Footer';
import Artist from './Pages/Artist';
import Track from './Pages/Track';
import Lastsongs from './Pages/Lastsongs';
import Chart from './Pages/Chart';
import Feed from './Components/Feed';
import Pleer from './Pages/Player';
import Chat from './Pages/Chat';
import Cam from './Pages/Cam';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
      <Header />
      <div className="body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artist/:artist" component={Artist} />
        <Route path="/artist/:artist/track/:name" component={Track} />
        <Route exact path="/lastsongs" component={Lastsongs} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/shows" component={Feed} />
        <Route exact path="/player" component={Pleer} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/cam" component={Cam} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
      <Player />
      </div>
    </Router>
  );
}

export default App;