import React from 'react';

import axios from 'axios';



class GameBoard extends React.Component {

    

    componentDidMount() {
        console.log(this);
        const gameInstanceId = document.querySelector('#gameBoard').getAttribute('instanceid');
        console.log(gameInstanceId);
    }

    getAndSetCurrentBoardState = () => {
        const gameInstanceId = this.props.gameInstanceId;
        console.log(gameInstanceId);
    }

    render() {
        return(
            <div id="gameBoard" instanceid={this.props.gameInstanceId} >
                <p>Actual Board</p>
            </div>
        )
    }
}

export default GameBoard;