import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    state = {
        availableGameAmount: 0
    }

    componentDidMount() {

        axios.get('/api/gameInstance')
            .then((response) => {
                const gameList = response.data;
                const availableGameAmount = gameList.length;
                this.setState({availableGameAmount: availableGameAmount});
            })
    }

    render() {
        return (
            <div>
                <h3>Rules!</h3>
                <h3>Lobby</h3>
                <p>Currently {this.state.availableGameAmount} games available</p>
                <Link to="/lobby"><button>To Lobby...</button></Link>
            </div>
        )
    }
}

export default HomePage;