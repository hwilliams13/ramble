import React from 'react';

import axios from 'axios';

import GameBoard from './GameBoard.js'

import { Link } from 'react-router-dom';

class PlayerView extends React.Component {

    state = {
        gameData: {
            gameInstance: {},
            myCurrentTileList: []
        }
    }

    componentDidMount() {
        const { gameInstanceId } = this.props.match.params;

        axios.get(`/api/gameInstance/${gameInstanceId}`)
            .then((response) => {
                const gameInstance = response.data;
                this.setState({gameInstance: gameInstance});
            })
    }

    drawTiles = () => {
        const myCurrentTileList = [...this.state.gameData.myCurrentTileList];
        let remainingTileAmount = this.state.gameData.gameInstance.remainingTileList.length;
        for (let i = 0; i < (7 - myCurrentTileList.length); i++) {
            let tileDrawn = this.state.gameData.gameInstance.remainingTileList.splice((Math.floor(Math.random()*remainingTileAmount)), 1);
            myCurrentTileList.push(tileDrawn);
        }
        const gameData = {
            gameInstance: this.state.gameData.gameInstance,
            myCurrentTileList: myCurrentTileList
        }
        this.setState({gameData: gameData});
    }

    render() {
        return (
            <div>
                <GameBoard gameBoard={this.state.gameData.gameInstance.gameBoard} />

            </div>
        )
    }
}

export default PlayerView;