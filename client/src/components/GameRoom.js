import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class GameRoom extends React.Component {

    state = {
        gameInstance: {}
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