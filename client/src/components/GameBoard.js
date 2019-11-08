import React from 'react';

import axios from 'axios';



class GameBoard extends React.Component {

    state = {
        gameBoard: []
    }

    componentDidMount() {
        const gameBoard = this.props.gameBoard;
        this.setState({gameBoard: gameBoard});
    }

    render() {
        return(
            <div>
                <p>{this.state.gameBoard}</p>
            </div>
        )
    }
}

export default GameBoard;