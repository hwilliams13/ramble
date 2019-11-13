import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    state = {
        availableGameAmount: 0,
        searchTerm: {
            word: ''
        },
        definition: ''
    }

    componentDidMount() {

        axios.get('/api/gameInstance')
            .then((response) => {
                console.log(response);
                const gameList = response.data;
                const availableGameAmount = gameList.length;
                this.setState({availableGameAmount: availableGameAmount});
            })
    }

    getDefinition = (e) => {
        e.preventDefault();
        const searchTerm = {...this.state.searchTerm};
        axios.get("https://mashape-community-urban-dictionary.p.rapidapi.com/define/term:wat")
            .then((response) => {
                console.log(response);
            })
    }

    onChangeHandler = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const searchTerm = {...this.state.searchTerm};
        searchTerm[targetName] = targetValue;
        this.setState({searchTerm: searchTerm});
    }

    render() {
        return (
            <div>
                <h3>Rules!</h3>
                <p>It's Scrabble but not!</p>
                <h3>Lobby</h3>
                <p>Currently {this.state.availableGameAmount} games available</p>
                <Link to="/lobby"><button>To Lobby...</button></Link>
                <h3>Checkout an Urban Dictionary definition if you don't feel like playing!</h3>
                <form>
                    <input type="text" name="word" placeholder="search term..." onChange={this.onChangeHandler} />
                    <input type="submit" onClick={this.getDefinition} value="Get Definition" />
                </form>
                <p>{this.state.definition}</p>
            </div>
        )
    }
}

export default HomePage;