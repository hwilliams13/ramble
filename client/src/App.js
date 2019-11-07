import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import GameLobby from './components/GameLobby.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Scrabble!</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lobby" component={GameLobby} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
