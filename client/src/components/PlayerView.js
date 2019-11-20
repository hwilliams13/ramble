import React from 'react';

import GameBoard from './GameBoard.js';

import Tile from './Tile.js';

import axios from 'axios';

import { Link } from 'react-router-dom';

class PlayerView extends React.Component {

    state = {
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
        score: {
            player1: 0,
            player2: 0,
        },
        gameInProgress: false,
        myCurrentTileList: [null, null, null, null, null, null, null],
        myPlayer: '',
        currentPlayPointValue: 0,
        tileBeingPlayed: {},
        targetSpace: {
            targetElement: {},
            targetX: 0,
            targetY: 0
        },
        currentPlay: {
            lastPlay: {
                lastX: 14,
                lastY: 14
            },
            start: {
                startX: 14,
                startY: 14
            },
            end: {
                endX: 0,
                endY: 0
            }
        },
        waitForPlayerTwoTimer: undefined,
        waitForTurnTimer: undefined,
        waitForGameStartTimer: undefined
    }

    refreshData = () => {
        const { gameInstanceId } = this.props.match.params;

        axios.get(`/api/gameInstance/${gameInstanceId}`)
            .then((response) => {
                console.log(response.data[0]);
                const previousState = {...this.state};
                previousState.name = response.data[0].name;
                previousState.gameBoard = response.data[0].gameBoard;
                previousState.remainingTileList = response.data[0].remainingTileList;
                previousState.playerPresent = response.data[0].playerPresent;
                previousState.playerTurn = response.data[0].playerTurn;
                previousState.score = response.data[0].score;
                previousState.gameInProgress = response.data[0].gameInProgress;
                this.setState(previousState);
            })
    }

    joinMatch = () => {
        const path = this.props.match.path;
        const player = path.split('/')[2];
        const { gameInstanceId } = this.props.match.params;
        if (player === "playerOne") {

            axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    previousState.score = response.data[0].score;
                    previousState.gameInProgress = response.data[0].gameInProgress;
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

             axios.get(`/api/gameInstance/${gameInstanceId}`)
                .then((response) => {
                    console.log(response.data[0]);
                    const previousState = {...this.state};
                    previousState.name = response.data[0].name;
                    previousState.gameBoard = response.data[0].gameBoard;
                    previousState.remainingTileList = response.data[0].remainingTileList;
                    previousState.playerPresent = response.data[0].playerPresent;
                    previousState.playerTurn = response.data[0].playerTurn;
                    previousState.score = response.data[0].score;
                    previousState.gameInProgress = response.data[0].gameInProgress;
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
        const { gameInstanceId } = this.props.match.params;
        if (player === "playerOne") {

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
        const path = this.props.match.path;
        const player = path.split('/')[2];
        this.joinMatch();
        // setTimeout(this.waitForPlayerTwo, 1000);
        if (player === "playerTwo") {
            setTimeout(this.waitForGameStart, 2000);
        }
    }

    waitForPlayerTwo = () => {
        const path = this.props.match.path;
        const player = path.split('/')[2];
        if (player === "playerTwo") {
            // this.waitForGameStart();
            return;
        }
        let waitForPlayerTwoTimer = this.state.waitForPlayerTwoTimer;
        waitForPlayerTwoTimer = setInterval(() => {
            console.log("awaiting player 2"); // keep for now
            this.refreshData();
            if (this.state.playerPresent.player2) {
                console.log("player 2 arrived"); // keep for now
                clearInterval(this.state.waitForPlayerTwoTimer);
            }
        }, 2000);
        this.setState({waitForPlayerTwoTimer: waitForPlayerTwoTimer});
    }

    resetCurrentPlay = () => {
        const currentPlay = {
            lastPlay: {
                lastX: 14,
                lastY: 14
            },
            start: {
                startX: 14,
                startY: 14
            },
            end: {
                endX: 0,
                endY: 0
            }
        }
        this.setState({currentPlay: currentPlay});
    }

    waitForTurn = () => {
        this.resetCurrentPlay();
        const path = this.props.match.path;
        const player = path.split('/')[2];
        let waitForTurnTimer = this.state.waitForTurnTimer;
        waitForTurnTimer = setInterval(() => {
            if (player === "playerOne") {
                if (this.state.playerTurn.player1) {
                    console.log("your turn!"); // keep for now
                    clearInterval(this.state.waitForTurnTimer);
                    return;
                }
                console.log("player 2's turn"); // keep for now
                this.refreshData();
            }
            if (player === "playerTwo") {
                if (this.state.playerTurn.player2) {
                    console.log("your turn!"); // keep for now
                    clearInterval(this.state.waitForTurnTimer);
                    return;
                }
                console.log("player 1's turn"); // keep for now
                this.refreshData();
            }
        }, 2000);
        this.setState({waitForTurnTimer: waitForTurnTimer});
    }

    waitForGameStart = () => { // for now playerTwo must wait for game start
        let waitForGameStartTimer = this.state.waitForGameStartTimer;
        waitForGameStartTimer = setInterval(() => {
            if (this.state.gameInProgress) {
                console.log("game has begun!"); // keep for now
                clearInterval(this.state.waitForGameStartTimer);
                this.waitForTurn();
                return;
            }
            console.log("waiting for game to start!"); // keep for now
            this.refreshData();
        }, 2000);
        this.setState({waitForGameStartTimer: waitForGameStartTimer});
    }

    startGame = () => { // for now only playerOne can start game
        let gameInProgress = this.state.gameInProgress;
        gameInProgress = true;
        this.setState({gameInProgress: gameInProgress});
        const { gameInstanceId } = this.props.match.params;
        axios.put(`/api/gameInstance/${gameInstanceId}`, {gameInProgress})
            .then((response) => {
                console.log(response);
                this.waitForTurn();
            })
    }

    submitPlay = () => {
        let wordMult = 1; // initialize word multiplier to be used at end
        let currentPlayPointValue = 0;
        if (this.state.currentPlay.end.endX > this.state.currentPlay.start.startX) {
            let wordlength = this.state.currentPlay.end.endX - this.state.currentPlay.start.startX + 1;
            for (let i = 0; i < wordlength; i++) {
                let currentSpace = this.state.gameBoard[this.state.currentPlay.start.startX + i][this.state.currentPlay.start.startY];
                if (currentSpace.mType === "word") {
                    wordMult = wordMult * currentSpace.mult;
                    currentPlayPointValue += currentSpace.currentTile.pointValue;
                }
                if (currentSpace.mType === "letter") {
                    currentPlayPointValue += (currentSpace.mult * currentSpace.currentTile.pointValue);
                }
                if (currentSpace.mType === "normal") {
                    currentPlayPointValue += currentSpace.currentTile.pointValue;
                }
            }
        }
        if (this.state.currentPlay.end.endY > this.state.currentPlay.start.startY) {
            let wordlength = this.state.currentPlay.end.endY - this.state.currentPlay.start.startY + 1;
            for (let i = 0; i < wordlength; i++) {
                let currentSpace = this.state.gameBoard[this.state.currentPlay.start.startX][this.state.currentPlay.start.startY+i];
                if (currentSpace.mType === "word") {
                    wordMult = wordMult * currentSpace.mult;
                    currentPlayPointValue += currentSpace.currentTile.pointValue;
                }
                if (currentSpace.mType === "letter") {
                    currentPlayPointValue += (currentSpace.mult * currentSpace.currentTile.pointValue);
                }
                if (currentSpace.mType === "normal") {
                    currentPlayPointValue += currentSpace.currentTile.pointValue;
                }
            }
        }
        currentPlayPointValue = currentPlayPointValue * wordMult;        
        this.setState({currentPlayPointValue: currentPlayPointValue});
        const score = {...this.state.score};
        const playerTurn = {...this.state.playerTurn};
        const path = this.props.match.path;
        const player = path.split('/')[2];
        const { gameInstanceId } = this.props.match.params;
        if (player === "playerOne") {
            score.player1 = score.player1 + currentPlayPointValue;
            playerTurn.player1 = false;
            playerTurn.player2 = true;
            this.setState({playerTurn: playerTurn});
        }
        else {
            score.player2 = score.player2 + currentPlayPointValue;
            playerTurn.player2 = false;
            playerTurn.player1 = true;
            this.setState({playerTurn: playerTurn});
        }
        axios.put(`/api/gameInstance/${gameInstanceId}`, {score})
            .then((response) => {
                console.log(response);
                axios.put(`/api/gameInstance/${gameInstanceId}`, {playerTurn})
                    .then((response) => {
                        console.log(response);
                        this.waitForTurn();
                    })
            })
    }

    drawTiles = () => {
        const { gameInstanceId } = this.props.match.params;
        const myCurrentTileList = [...this.state.myCurrentTileList];
        const remainingTileList = [...this.state.remainingTileList];
        for (let i = 0; i < 7; i++) {
            let remainingTileAmount = remainingTileList.length;
            if (myCurrentTileList[i] == null) {
                let tileDrawn = remainingTileList.splice((Math.floor(Math.random()*remainingTileAmount)), 1)[0];
                myCurrentTileList[i] = {...tileDrawn};
            }
        }

        this.setState({myCurrentTileList: myCurrentTileList});
        axios.put(`/api/gameInstance/${gameInstanceId}`, {remainingTileList})
            .then((response) => {
                console.log(response);
                this.setState({remainingTileList: remainingTileList});
            })
    }

    tileRackClickEventHandler = (e) => {
        console.log(e.target.getBoundingClientRect());
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    dragStartHandler = (e) => {
        console.log(e.target.getAttribute("dataletter"));
        const tileBeingPlayed = {
            letter: e.target.getAttribute("dataletter"),
            pointValue: parseInt(e.target.getAttribute("datapointvalue"))
        };
        this.setState({tileBeingPlayed: tileBeingPlayed});
    }

    // dragHandler = (e) => {
    //     const tileBeingPlayed = e.target;
    //     // const elX = parseInt(targetElement.style.left);
    //     // const elY = parseInt(targetElement.style.top);
    //     // console.log(e.clientX);
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     tileBeingPlayed.style.left = mouseX+'px';
    //     tileBeingPlayed.style.top = mouseY+'px';
    // }

    dragStopHandler = (e) => {
        const tileBeingPlayed = e.target;
        const parentElement = tileBeingPlayed.parentElement;
        const gameBoard = [...this.state.gameBoard];
        if (parentElement.getAttribute("class") != null) {
            const parentSuperClass = parentElement.getAttribute("class");
            const parentSubClass = parentSuperClass.split(" ")[0];
            
            if (parentSubClass === "game-board-space") {
                const parentId = parentElement.getAttribute("id");
                const targetXY = parentId.split("-");
                const targetX = parseInt(targetXY[0]);
                const targetY = parseInt(targetXY[1]);
                gameBoard[targetX][targetY].currentTile = false;
            }
        }
        this.removeTileFromHand(tileBeingPlayed);
        if (parentElement.getAttribute("id") === "play-area") {
            parentElement.removeChild(tileBeingPlayed);
        }
        gameBoard[this.state.targetSpace.targetX][this.state.targetSpace.targetY].currentTile = {...this.state.tileBeingPlayed};
        this.setState({gameBoard: gameBoard});
        const { gameInstanceId } = this.props.match.params;
        axios.put(`/api/gameInstance/${gameInstanceId}`, {gameBoard})
            .then((response) => {
                const currentPlay = {...this.state.currentPlay};
                if ((this.state.targetSpace.targetX >= currentPlay.lastPlay.lastX) && (this.state.targetSpace.targetY >= currentPlay.lastPlay.lastY)) {
                    currentPlay.end.endX = this.state.targetSpace.targetX;
                    currentPlay.end.endY = this.state.targetSpace.targetY;
                }
                if ((this.state.targetSpace.targetX < currentPlay.lastPlay.lastX) && (this.state.targetSpace.targetY <= currentPlay.lastPlay.lastY)) {
                    currentPlay.start.startX = this.state.targetSpace.targetX;
                    currentPlay.start.startY = this.state.targetSpace.targetY;
                }
                currentPlay.lastPlay.lastX = this.state.targetSpace.targetX;
                currentPlay.lastPlay.lastY = this.state.targetSpace.targetY;
                this.setState({currentPlay: currentPlay});
            })
    }

    removeTileFromHand = (target) => {
        const myCurrentTileList = [...this.state.myCurrentTileList];
        for (let i = 0; i < myCurrentTileList.length; i++) {
            if (myCurrentTileList[i] != null) {
                if (myCurrentTileList[i].letter === target.getAttribute("dataletter")) {
                    myCurrentTileList[i] = null;
                    this.setState({myCurrentTileList: myCurrentTileList});
                    return;
                }
            }
        }
    }

    dropTargetHandler = (e) => {
        if(e.target.getAttribute("id") != null) {
            const id = e.target.getAttribute("id");
            const targetXY = id.split("-");
            const targetX = parseInt(targetXY[0]);
            const targetY = parseInt(targetXY[1]);
            const targetSpace = {...this.state.targetSpace};
            targetSpace.targetElement = e.target;
            targetSpace.targetX = targetX;
            targetSpace.targetY = targetY;
            this.setState({targetSpace: targetSpace});
        }
    }

    render() {

        return (
            <div id="player-view">
                <div id="player-view-header-box">
                    <p id="player-view-header">{this.props.match.path.split('/')[2]}</p>
                    {
                        (this.props.match.path.split('/')[2] === "playerOne") ?
                        <button onClick={this.startGame}>Start Game</button> :
                        null
                    }
                    <p>Player 1 Score:{this.state.score.player1}</p>
                    <p>Player 2 Score:{this.state.score.player2}</p>
                    <p>Player Turn: {
                        this.state.playerTurn.player1 ?
                        "Player 1" :
                        "Player 2"
                    }</p>
                </div>
                <div id="play-area">
                    <GameBoard gameBoard={this.state.gameBoard} allowDrop={this.allowDrop} dropTargetHandler={this.dropTargetHandler} dragStartHandler={this.dragStartHandler} dragStopHandler={this.dragStopHandler} />
                    <div id="tile-rack-frame">
                        <div id="tile-rack" onClick={this.tileRackClickEventHandler}>
                            {this.state.myCurrentTileList.map((tile, index) => {
                                return (
                                    (tile == null) ?
                                    null :
                                    <Tile onClick={this.clickHandler} style={{position: 'absolute', left: `${document.getElementById('tile-rack').getBoundingClientRect().left+5+(index*35)}px`, top: `${document.getElementById('tile-rack').getBoundingClientRect().top+5}px`}} draggable="true" dataletter={tile.letter} datapointvalue={tile.pointValue} onDragStart={this.dragStartHandler} onDragEnd={this.dragStopHandler} />
                                )
                            })}
                        </div>
                        <div id="game-button-holder">
                            <button onClick={this.drawTiles}>Draw</button>
                            <button onClick={this.submitPlay}>Submit Play</button>
                        </div>
                    </div>
                </div>
                <Link to={'/lobby'}><button onClick={this.leaveMatch}>Leave Game</button></Link>
            </div>
        )
    }
}

export default PlayerView;