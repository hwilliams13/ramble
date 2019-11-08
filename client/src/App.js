import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import GameLobby from './components/GameLobby.js'
import GameRoom from './components/GameRoom.js'
import PlayerView from './components/PlayerView.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Scrabble!</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lobby" component={GameLobby} />
          <Route exact path="/lobby/:gameInstanceId" component={GameRoom} />
          <Route exact path="/lobby/playerOne/:gameInstanceId" component={PlayerView} />
          <Route exact path="/lobby/playerTwo/:gameInstanceId" component={PlayerView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
