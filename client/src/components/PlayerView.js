import React from 'react';

import axios from 'axios';

// import GameBoard from './GameBoard.js'

import { Link } from 'react-router-dom';

class PlayerView extends React.Component {

    state = {
        // gameInstance: {
        //     name: '',
        //     gameBoard: [
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        //         [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        //     ],
        //     remainingTileList: [],
        //     playerPresent: {
        //         player1: false,
        //         player2: false
        //     },
        //     playerTurn: {
        //         player1: false,
        //         player2: false
        //     }
        // },
        name: '',
        gameBoard: [
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        ],
        remainingTileList: [],
        playerPresent: {
            player1: false,
            player2: false
        },
        playerTurn: {
            player1: false,
            player2: false
        },
        myCurrentTileList: [],
        myPlayer: ''
    }

    refreshData = () => {
        const { gameInstanceId } = this.props.match.params;

        axios.get(`/api/gameInstance/${gameInstanceId}`)
            .then((response) => {
                console.log(response.data[0]);
                // const gameInstance = response.data[0];
                // console.log(gameInstance);
                // this.setState({gameInstance: gameInstance});
                const previousState = {...this.state};
                previousState.name = response.data[0].name;
                previousState.gameBoard = response.data[0].gameBoard;
                previousState.remainingTileList = response.data[0].remainingTileList;
                previousState.playerPresent = response.data[0].playerPresent;
                previousState.playerTurn = response.data[0].playerTurn;
                this.setState(previousState);
            })
    }

    joinMatch = () => {
        const path = this.props.match.path;
        const player = path.split('/')[2];
        console.log(player);
        const { gameInstanceId } = this.props.match.params;
        if (player === "playerOne") {
            // const gameInstance = {
            //     name: this.state.gameInstance.name,
            //     gameBoard: this.state.gameInstance.gameBoard,
            //     remainingTileList: this.state.gameInstance.remainingTileList,
            //     playerPresent: {
            //         player1: true,
            //         player2: this.state.gameInstance.playerPresent.player2
            //     },
            //     playerTurn: this.state.gameInstance.playerTurn
            // }
            // this.setState({gameInstance: gameInstance});

            // axios.get(`/api/gameInstance/${gameInstanceId}`)
            // .then((response) => {
            // this.refreshData()
            //     .then((previousState) => {
            //         const playerPresent = previousState.playerPresent
            //         playerPresent.player1 = true;
            //         axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //             .then((response) => {
            //                 console.log(response);
            //                 this.setState({playerPresent: playerPresent});
            //             })
            //     })
            // axios.put(`/api/gameInstance/${gameInstanceId}`, gameInstance)
            // .then((response) => {
            //     console.log(response);
            // })
            // axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //     .then((response) => {
            //         console.log(response);
            //         this.refreshData();
            //     })
            axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    this.setState(previousState);
                    const playerPresent = previousState.playerPresent;
                    playerPresent.player1 = true;
                    axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
                        .then((response) => {
                            console.log(response);
                            this.setState({playerPresent: playerPresent});
                        })
                })
        }
        if (player === "playerTwo") {
            // const gameInstance = {
            //     name: this.state.gameInstance.name,
            //     gameBoard: this.state.gameInstance.gameBoard,
            //     remainingTileList: this.state.gameInstance.remainingTileList,
            //     playerPresent: {
            //         player1: this.state.gameInstance.playerPresent.player1,
            //         player2: true
            //     },
            //     playerTurn: this.state.gameInstance.playerTurn
            // }
            // this.setState({gameInstance: gameInstance});
            
            // const playerPresent = {...this.state.playerPresent};
            // playerPresent.player2 = true;
            // this.setState({playerPresent: playerPresent});
            // // axios.put(`/api/gameInstance/${gameInstanceId}`, gameInstance)
            // // .then((response) => {
            // //     console.log(response);
            // // })
            // axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //     .then((response) => {
            //         console.log(response);
            //         this.refreshData();
            //     })
            // this.refreshData()
            //     .then((previousState) => {
            //         const playerPresent = previousState.playerPresent
            //         playerPresent.player2 = true;
            //         axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //             .then((response) => {
            //                 console.log(response);
            //                 this.setState({playerPresent: playerPresent});
            //             })
            //     })
             axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    this.setState(previousState);
                    const playerPresent = previousState.playerPresent;
                    playerPresent.player2 = true;
                    axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
                        .then((response) => {
                            console.log(response);
                            this.setState({playerPresent: playerPresent});
                        })
                })
        }
    }

    leaveMatch = () => {
        const path = this.props.match.path;
        const player = path.split('/')[2];
        console.log(player);
        const { gameInstanceId } = this.props.match.params;
        if (player === "playerOne") {
            // const gameInstance = {
            //     name: this.state.gameInstance.name,
            //     gameBoard: this.state.gameInstance.gameBoard,
            //     remainingTileList: this.state.gameInstance.remainingTileList,
            //     playerPresent: {
            //         player1: true,
            //         player2: this.state.gameInstance.playerPresent.player2
            //     },
            //     playerTurn: this.state.gameInstance.playerTurn
            // }
            // this.setState({gameInstance: gameInstance});

            // const playerPresent = {...this.state.playerPresent};
            // playerPresent.player1 = false;
            // this.setState({playerPresent: playerPresent});
            // // axios.put(`/api/gameInstance/${gameInstanceId}`, gameInstance)
            // // .then((response) => {
            // //     console.log(response);
            // // })
            // axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            // .then((response) => {
            //     console.log(response);
            // })
            // this.refreshData()
            //     .then((previousState) => {
            //         const playerPresent = previousState.playerPresent
            //         playerPresent.player1 = false;
            //         axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //             .then((response) => {
            //                 console.log(response);
            //                 this.setState({playerPresent: playerPresent});
            //             })
            //     })
            axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    this.setState(previousState);
                    const playerPresent = previousState.playerPresent;
                    playerPresent.player1 = false;
                    axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
                        .then((response) => {
                            console.log(response);
                            this.setState({playerPresent: playerPresent});
                        })
                })
        }
        if (player === "playerTwo") {
            // const gameInstance = {
            //     name: this.state.gameInstance.name,
            //     gameBoard: this.state.gameInstance.gameBoard,
            //     remainingTileList: this.state.gameInstance.remainingTileList,
            //     playerPresent: {
            //         player1: this.state.gameInstance.playerPresent.player1,
            //         player2: true
            //     },
            //     playerTurn: this.state.gameInstance.playerTurn
            // }
            // this.setState({gameInstance: gameInstance});

            // const playerPresent = {...this.state.playerPresent};
            // playerPresent.player2 = false;
            // this.setState({playerPresent: playerPresent});
            // // axios.put(`/api/gameInstance/${gameInstanceId}`, gameInstance)
            // // .then((response) => {
            // //     console.log(response);
            // // })
            // axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            // .then((response) => {
            //     console.log(response);
            // })
            // this.refreshData()
            //     .then((previousState) => {
            //         const playerPresent = previousState.playerPresent
            //         playerPresent.player2 = false;
            //         axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
            //             .then((response) => {
            //                 console.log(response);
            //                 this.setState({playerPresent: playerPresent});
            //             })
            //     })
            axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    this.setState(previousState);
                    const playerPresent = previousState.playerPresent;
                    playerPresent.player2 = false;
                    axios.put(`/api/gameInstance/${gameInstanceId}`, {playerPresent})
                        .then((response) => {
                            console.log(response);
                            this.setState({playerPresent: playerPresent});
                        })
                })
        }
    }

    componentDidMount() {
        
        this.joinMatch();
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
            <div id="player-view">
                <h3 id="player-view-header">Player View</h3>
                {/* <GameBoard gameBoard={this.state.gameData.gameInstance.gameBoard} gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                {/* <GameBoard gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                <div id="play-area">
                    <div id="game-board">
                        {this.state.gameBoard.map((row, gridY) => {
                            return (
                                row.map((rowSpace, gridX) => {
                                    return (
                                        <div className={`game-board-space ${rowSpace.mType}-${rowSpace.mult}`} id={`${gridX}-${gridY}`}>
                                            <p>{rowSpace.mult}</p>
                                            <p>{rowSpace.mType}</p>
                                            <p>{rowSpace.currentTile}</p>
                                        </div>
                                    )
                                })
                            )
                        })}
                    </div>
                </div>
                <div></div>
                <Link to={'/lobby'}><button onClick={this.leaveMatch}>Leave Game</button></Link>
            </div>
        )
    }
}

export default PlayerView;