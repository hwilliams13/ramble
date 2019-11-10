import React from 'react';

import axios from 'axios';

class GameLobbyGameItem extends React.Component {

    state = {
        thisGame: {
            name: '',
            playerPresent: {
                player1: false,
                player2: false
            }
        }
    }

    componentDidMount() {
        const gameData = this.props.gameData;

        const thisGame = {
            name: gameData.name,
            playerPresent: {
                player1: gameData.playerPresent.player1,
                player2: gameData.playerPresent.player2
            }
        }

        this.setState({thisGame: thisGame});
    }

    render() {
        return (
            <div>
                <h5>{this.state.thisGame.name}</h5>
                <h6>Status:</h6>
                {
                    (this.state.thisGame.playerPresent.player1 && this.state.thisGame.playerPresent.player2) ?
                    <p>Full</p> :
                    (
                        this.state.thisGame.playerPresent.player1 ?
                        <p>Awaiting Player 2</p> :
                        (
                            this.state.thisGame.playerPresent.player2 ?
                            <p>Awaiting Player 1</p> :
                            <p>Empty</p>
                        )
                    )
                }
            </div>
        )
    }
}

export default GameLobbyGameItem;