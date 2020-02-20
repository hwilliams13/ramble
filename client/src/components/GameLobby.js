import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import GameLobbyGameItem from './GameLobbyGameItem.js';

class GameLobby extends React.Component {

    state = {
        availableGameList: [],
        newGame: {
            name: ''
        }
    }

    componentDidMount() {
        // request available game information on component mount
        axios.get('/api/gameInstance')
            .then((response) => {
                const availableGameList = response.data;
                this.setState({availableGameList: availableGameList});
            })
    }

    // allow user to update field when entering a game name
    onInputChangeHandler = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const newGame = {};
        newGame[targetName] = targetValue;
        this.setState({newGame: newGame});
    }

    // send create request with name of game to be created
    createGame = (e) => {
        e.preventDefault();
        const newGame = {
            name: this.state.newGame.name
        }
        axios.post('/api/gameInstance', newGame)
            .then((response) => {
                console.log(response);
                const availableGameList = [...this.state.availableGameList];
                availableGameList.push(response.data);
                this.setState({availableGameList: availableGameList});
            })
    }

    // send delete request to delete an existing game
    // need to add lockout so that game can't be deleted while a player is inside
    deleteGame = (gameId, key) => {
        console.log(gameId);
        const availableGameList = [...this.state.availableGameList];
        axios.delete(`/api/gameInstance/${gameId}`)
            .then((response) => {
                console.log(response);
                availableGameList.splice(key, 1);
                this.setState({availableGameList: availableGameList});
            })
    }

    
    render() {
        return (
            <div>
                <h3>Lobby</h3>
                <h5>Don't see an open game? Create a new one!</h5>
                <form>
                    <input type="text" name="name" placeholder="enter name..." onChange={this.onInputChangeHandler} />
                    <input type="submit" value="Create Game!" onClick={this.createGame} /> 
                </form>
                <h5>Available Games:</h5>
                {/* generate list of available games from the list stored in state */}
                {/* if both players are present, it will send you to a viewing room "lobby/gameid" */}
                {/* if one player is presnt, it will send you to the game as the other player, "lobby/playerTwo/gameid" */}
                {this.state.availableGameList.map((game, key) => {
                    return (
                        <div>
                            <p>{key+1}</p>
                            <div>
                                <Link to={
                                    (game.playerPresent.player1 && game.playerPresent.player2) ?
                                    `/lobby/${game._id}` :
                                    (
                                        game.playerPresent.player1 ?
                                        `/lobby/playerTwo/${game._id}` :
                                        `/lobby/playerOne/${game._id}`
                                    )
                                    }>
                                        <GameLobbyGameItem gameData={game} />
                                </Link>
                                <button onClick={() => {
                                    this.deleteGame(game._id, key);
                                }}>Delete Game</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GameLobby;