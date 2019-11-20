import React from 'react';

import GameBoard from './GameBoard';

import Tile from './Tile.js';

import axios from 'axios';

// import GameBoard from './GameBoard.js'

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
        console.log(player);
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
        console.log(player);
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
            console.log("awaiting player 2");
            this.refreshData();
            if (this.state.playerPresent.player2) {
                console.log("player 2 arrived");
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
                    console.log("your turn!");
                    clearInterval(this.state.waitForTurnTimer);
                    return;
                }
                console.log("player 2's turn");
                this.refreshData();
            }
            if (player === "playerTwo") {
                if (this.state.playerTurn.player2) {
                    console.log("your turn!");
                    clearInterval(this.state.waitForTurnTimer);
                    return;
                }
                console.log("player 1's turn");
                this.refreshData();
            }
        }, 2000);
        this.setState({waitForTurnTimer: waitForTurnTimer});
    }

    waitForGameStart = () => { // for now playerTwo must wait for game start
        let waitForGameStartTimer = this.state.waitForGameStartTimer;
        waitForGameStartTimer = setInterval(() => {
            if (this.state.gameInProgress) {
                console.log("game has begun!");
                clearInterval(this.state.waitForGameStartTimer);
                this.waitForTurn();
                return;
            }
            console.log("waiting for game to start!");
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

    // drawTiles = () => {
    //     const { gameInstanceId } = this.props.match.params;
    //     const myCurrentTileList = [...this.state.myCurrentTileList];
    //     const remainingTileList = [...this.state.remainingTileList];
    //     const playAreaElement = document.querySelector("#play-area")
    //     for (let i = 0; i < 7; i++) {
    //         let remainingTileAmount = remainingTileList.length;
    //         if (myCurrentTileList[i] == null) {
    //             let tileDrawn = remainingTileList.splice((Math.floor(Math.random()*remainingTileAmount)), 1)[0];
    //             myCurrentTileList[i] = {...tileDrawn};
    //             let tileElement = document.createElement("div");
    //             tileElement.setAttribute("class", "tile");
    //             tileElement.setAttribute("draggable", "true");
    //             tileElement.setAttribute("data-index", i)
    //             tileElement.innerHTML = tileDrawn.letter;
    //             tileElement.setAttribute("dataLetter", tileDrawn.letter);
    //             tileElement.setAttribute("dataPointValue", tileDrawn.pointValue);
    //             tileElement.style.position = "absolute";
    //             tileElement.style.left = `${625+(i*35)}px`;
    //             tileElement.style.top = "710.25px";
    //             tileElement.addEventListener('dragstart', this.dragStartHandler)
    //             // tileElement.addEventListener('drag', this.dragHandler);
    //             tileElement.addEventListener('click', this.clickHandler);
    //             tileElement.addEventListener('dragend', this.dragStopHandler);
    //             playAreaElement.appendChild(tileElement);
    //         }
    //     }

    //     this.setState({myCurrentTileList: myCurrentTileList});
    //     axios.put(`/api/gameInstance/${gameInstanceId}`, {remainingTileList})
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({remainingTileList: remainingTileList});
    //         })
    // }

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
        // e.dataTransfer.setData("id", e.target.id);
        console.log(e.target.getAttribute("dataLetter"));
        const tileBeingPlayed = {
            letter: e.target.getAttribute("dataLetter"),
            pointValue: parseInt(e.target.getAttribute("dataPointValue"))
        };
        // tileInPlay.playingTile = true;
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

    // dragStopHandler = (e) => {
    //     const tileBeingPlayed = e.target;
    //     tileBeingPlayed.style.position = "static";
    //     const mouseXEnd = e.clientX;
    //     const mouseYEnd = e.clientY;
    //     tileBeingPlayed.style.left = mouseXEnd+'px';
    //     tileBeingPlayed.style.top = mouseYEnd+'px';
    //     // const tileInPlay = {...this.state.tileInPlay};
    //     // tileInPlay.playingTile = false;
    //     // this.setState({tileInPlay: tileInPlay});
    //     // const playAreaElement = document.querySelector("#play-area");
    //     const parentElement = tileBeingPlayed.parentElement;
    //     // if (parentElement.get)
    //     const gameBoard = [...this.state.gameBoard];
    //     if (parentElement.getAttribute("class") != null) {
    //         const parentSuperClass = parentElement.getAttribute("class");
    //         const parentSubClass = parentSuperClass.split(" ")[0];
    //         console.log(parentSubClass);
            
    //         if (parentSubClass === "game-board-space") {
    //             const parentId = parentElement.getAttribute("id");
    //             const targetXY = parentId.split("-");
    //             const targetX = parseInt(targetXY[0]);
    //             const targetY = parseInt(targetXY[1]);
    //             gameBoard[targetX][targetY].currentTile = false;
    //         }
    //     }
    //     this.removeTileFromHand(tileBeingPlayed);
    //     // playAreaElement.removeChild(e.target);
    //     parentElement.removeChild(tileBeingPlayed);
    //     console.log(this.state.targetSpace.targetX);
    //     gameBoard[this.state.targetSpace.targetX][this.state.targetSpace.targetY].currentTile = {...this.state.tileBeingPlayed};
    //     const targetSpace = {...this.state.targetSpace};
    //     // targetSpace.targetElement.appendChild(tileBeingPlayed);
    //     this.setState({gameBoard: gameBoard});
    //     const { gameInstanceId } = this.props.match.params;
    //     axios.put(`/api/gameInstance/${gameInstanceId}`, {gameBoard})
    //         .then((response) => {
    //             console.log(response);
    //             const currentPlay = {...this.state.currentPlay};
    //             if ((this.state.targetSpace.targetX >= currentPlay.lastPlay.lastX) && (this.state.targetSpace.targetY >= currentPlay.lastPlay.lastY)) {
    //                 currentPlay.end.endX = this.state.targetSpace.targetX;
    //                 currentPlay.end.endY = this.state.targetSpace.targetY;
    //             }
    //             if ((this.state.targetSpace.targetX < currentPlay.lastPlay.lastX) && (this.state.targetSpace.targetY <= currentPlay.lastPlay.lastY)) {
    //                 currentPlay.start.startX = this.state.targetSpace.targetX;
    //                 currentPlay.start.startY = this.state.targetSpace.targetY;
    //             }
    //             currentPlay.lastPlay.lastX = this.state.targetSpace.targetX;
    //             currentPlay.lastPlay.lastY = this.state.targetSpace.targetY;
    //             this.setState({currentPlay: currentPlay});
    //             console.log(currentPlay);
    //         })
    // }

    dragStopHandler = (e) => {
        const tileBeingPlayed = e.target;
        const parentElement = tileBeingPlayed.parentElement;
        console.log(parentElement);
        // if (parentElement.get)
        const gameBoard = [...this.state.gameBoard];
        if (parentElement.getAttribute("class") != null) {
            const parentSuperClass = parentElement.getAttribute("class");
            const parentSubClass = parentSuperClass.split(" ")[0];
            console.log(parentSubClass);
            
            if (parentSubClass === "game-board-space") {
                const parentId = parentElement.getAttribute("id");
                const targetXY = parentId.split("-");
                const targetX = parseInt(targetXY[0]);
                const targetY = parseInt(targetXY[1]);
                gameBoard[targetX][targetY].currentTile = false;
            }
        }
        this.removeTileFromHand(tileBeingPlayed);
        // playAreaElement.removeChild(e.target);
        if (parentElement.getAttribute("id") === "play-area") {
            parentElement.removeChild(tileBeingPlayed);
        }
        console.log(this.state.targetSpace.targetX);
        gameBoard[this.state.targetSpace.targetX][this.state.targetSpace.targetY].currentTile = {...this.state.tileBeingPlayed};
        // const targetSpace = {...this.state.targetSpace};
        // targetSpace.targetElement.appendChild(tileBeingPlayed);
        this.setState({gameBoard: gameBoard});
        const { gameInstanceId } = this.props.match.params;
        axios.put(`/api/gameInstance/${gameInstanceId}`, {gameBoard})
            .then((response) => {
                console.log(response);
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
                console.log(currentPlay);
            })
    }

    removeTileFromHand = (target) => {
        const myCurrentTileList = [...this.state.myCurrentTileList];
        // const targetIndex = target.getAttribute("data-index");
        // myCurrentTileList.splice(targetIndex, 1);
        for (let i = 0; i < myCurrentTileList.length; i++) {
            if (myCurrentTileList[i] != null) {
                if (myCurrentTileList[i].letter === target.getAttribute("dataLetter")) {
                    myCurrentTileList[i] = null;
                    this.setState({myCurrentTileList: myCurrentTileList});
                    return;
                }
            }
        }
    }

    dropTargetHandler = (e) => {
        console.log(e.clientX);
        // const targetClass = e.target.getAttribute("class").split(" ")[0];
        // console.log(targetClass);
        // if (this.state.tileInPlay.playingTile) {
        //     return false;
        // }
        console.log(e.target.getAttribute("id"));
        // if(e.target.getAttribute("class") == null) {
        //     return false;
        // }
        if(e.target.getAttribute("id") != null) {
            const id = e.target.getAttribute("id");
            console.log(id);
            const targetXY = id.split("-");
            // console.log(targetXY);
            const targetX = parseInt(targetXY[0]);
            const targetY = parseInt(targetXY[1]);
            // const targetSpace = this.state.gameBoard[targetX][targetY];
            // console.log(targetSpace);
            // console.log(e.target.getBoundingClientRect());
            // this.targetSpace.targetX = targetX;
            // this.targetSpace.targetY = targetY;
            // console.log(this.targetSpace.targetX);
            const targetSpace = {...this.state.targetSpace};
            targetSpace.targetElement = e.target;
            targetSpace.targetX = targetX;
            targetSpace.targetY = targetY;
            console.log(targetSpace);
            this.setState({targetSpace: targetSpace});
            // const currentPlay = {
                
            // }
            // if ((targetX >= currentPlay.start.startX) && (targetY >= currentPlay.start.startY)) {
            //     currentPlay.end.endX = targetX;
            //     currentPlay.end.endY = targetY;
            // }
            // if ((targetX <= currentPlay.end.endX) && (targetY <= currentPlay.end.endY)) {
            //     currentPlay.start.startX = targetX;
            //     currentPlay.start.startY = targetY;
            // }
            // this.setState({currentPlay: currentPlay});
        }
        // const gameBoard = [...this.state.gameBoard];
        // gameBoard[targetX][targetY].currentTile = {...this.state.tileBeingPlayed};
        // this.targetSpace = {...gameBoard[targetX][targetY]};
        // this.setState({gameBoard: gameBoard});
    }

    clickHandler = (e) => {
        console.log(e.target);
        console.log(e.target.parentElement);
        // console.log(document.getElementById("0-1"));
        // // console.log(document.querySelector("#0-1"));
        // const element = e.target;
        // console.log(element.getAttribute("id"))
        // const elementRect = element.getBoundingClientRect();
        // console.log(elementRect);
        // const elementRectLeft = elementRect.left;
        // console.log(elementRectLeft)
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
                {/* <GameBoard gameBoard={this.state.gameData.gameInstance.gameBoard} gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                {/* <GameBoard gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                <div id="play-area">
                    <div id="game-board">
                        {this.state.gameBoard.map((row, gridX) => {
                            return (
                                row.map((rowSpace, gridY) => {
                                    const className = `game-board-space ${rowSpace.mType}-${rowSpace.mult}`;
                                    const id = `${gridX}-${gridY}`;
                                    return (
                                        <div className={className} id={id} onDragOver={this.allowDrop} onDragEnter={this.dropTargetHandler}>
                                            <div className="game-board-space-info">
                                                <p>{rowSpace.mult}</p>
                                                <p>{rowSpace.mType}</p>
                                            </div>
                                            {
                                                !rowSpace.currentTile ? 
                                                null :
                                                <Tile onClick={this.clickHandler} style={{position: 'absolute', left: `${document.getElementById(`${id}`).getBoundingClientRect().left+5}px`, top: `${document.getElementById(`${id}`).getBoundingClientRect().top+5}px`}} draggable="true" dataLetter={rowSpace.currentTile.letter} dataPointValue={rowSpace.currentTile.pointValue} onDragStart={this.dragStartHandler} onDragEnd={this.dragStopHandler} />
                                            }
                                        </div>
                                    )
                                })
                            )
                        })}
                    </div>
                    <div id="tile-rack-frame">
                        <div id="tile-rack" onClick={this.tileRackClickEventHandler}>
                            {this.state.myCurrentTileList.map((tile, index) => {
                                return (
                                    (tile == null) ?
                                    null :
                                    <Tile onClick={this.clickHandler} style={{position: 'absolute', left: `${document.getElementById('tile-rack').getBoundingClientRect().left+5+(index*35)}px`, top: `${document.getElementById('tile-rack').getBoundingClientRect().top+5}px`}} draggable="true" dataLetter={tile.letter} dataPointValue={tile.pointValue} onDragStart={this.dragStartHandler} onDragEnd={this.dragStopHandler} />
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