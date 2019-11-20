import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Component files
import HomePage from './components/HomePage.js'
import GameLobby from './components/GameLobby.js'
import GameRoom from './components/GameRoom.js'
import PlayerView from './components/PlayerView.js'
// CSS files
import './App.css';
import './PlayerView.css';
import './GameBoard.css';
import './Tile.css';

function App() {
  return (
    <div className="App">
      <h1 id="nav-bar">Scrabble!</h1>
      <div id="main-body">
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
    </div>
  );
}

export default App;
