import React from 'react';

import axios from 'axios';

// import GameBoard from './GameBoard.js'

import { Link } from 'react-router-dom';

class PlayerView extends React.Component {

    state = {
        gameInstance: {
            name: '',
            gameBoard: [],
            remainingTileList: [],
            playerPresent: {
                player1: false,
                player2: false
            },
            playerTurn: {
                player1: false,
                player2: false
            }
        },
        myCurrentTileList: []
    }

    refreshData = () => {
        const { gameInstanceId } = this.props.match.params;

        axios.get(`/api/gameInstance/${gameInstanceId}`)
            .then((response) => {
                console.log(response.data[0]);
                const gameInstance = response.data[0];
                this.setState({gameInstance: gameInstance});
            })
    }
    componentDidMount() {
        
        this.refreshData();
    }

    drawTiles = () => {
        const myCurrentTileList = [...this.state.myCurrentTileList];
        let remainingTileAmount = this.state.gameInstance.remainingTileList.length;
        for (let i = 0; i < (7 - myCurrentTileList.length); i++) {
            let tileDrawn = this.state.gameInstance.remainingTileList.splice((Math.floor(Math.random()*remainingTileAmount)), 1);
            myCurrentTileList.push(tileDrawn);
        }
        this.setState({myCurrentTileList: myCurrentTileList});
    }

    render() {
        return (
            <div>
                <h1>Player View</h1>
                {/* <GameBoard gameBoard={this.state.gameData.gameInstance.gameBoard} gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                {/* <GameBoard gameInstanceId={this.state.gameData.gameInstance._id} /> */}

                <h3>Game Board</h3>
                {}
            </div>
        )
    }
}

export default PlayerView;