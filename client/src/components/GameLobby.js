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

        axios.get('/api/gameInstance')
            .then((response) => {
                const availableGameList = response.data;
                this.setState({availableGameList: availableGameList});
            })
    }

    onInputChangeHandler = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const newGame = {};
        newGame[targetName] = targetValue;
        this.setState({newGame: newGame});
    }

    createGame = (e) => {
        e.preventDefault();
        const newGame = {
            name: this.state.newGame.name
        }
        axios.post('/api/gameInstance', newGame)
            .then((response) => {
                const availableGameList = [...this.state.availableGameList];
                availableGameList.push(response.data);
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
                {this.state.availableGameList.map((game) => {
                    return (
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
                    )
                })}
            </div>
        )
    }
}

export default GameLobby;