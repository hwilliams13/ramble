import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class GameRoom extends React.Component {

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
        }
    }


    

    render() {
        return (
            <div>
                <p>Game Board</p>
            </div>
        )
    }
}

export default GameRoom;