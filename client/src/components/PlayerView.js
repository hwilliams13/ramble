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
        score: {
            player1: 0,
            player2: 0,
        },
        myCurrentTileList: [],
        myPlayer: '',
        currentPlayPointValue: 0,
        tileBeingPlayed: {}
    }

    targetSPace = {
        targetX: 0,
        targetY: 0
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
        const { gameInstanceId } = this.props.match.params;
        const myCurrentTileList = [...this.state.myCurrentTileList];
        const remainingTileList = [...this.state.remainingTileList];
        const remainingTileAmount = remainingTileList.length;
        const tileAmountAlreadyInHand = myCurrentTileList.length
        const playAreaElement = document.querySelector("#play-area")
        for (let i = 0; i < (7 - tileAmountAlreadyInHand); i++) {
            let tileDrawn = remainingTileList.splice((Math.floor(Math.random()*remainingTileAmount)), 1)[0];
            myCurrentTileList.push(tileDrawn);
            let tileElement = document.createElement("div");
            tileElement.setAttribute("class", "tile");
            tileElement.setAttribute("draggable", "true");
            tileElement.data = 5;
            tileElement.innerHTML = tileDrawn.letter;
            tileElement.style.position = "absolute";
            tileElement.style.left = `${355+(i*35)}px`;
            tileElement.style.top = "710.25px";
            tileElement.addEventListener('drag', this.dragHandler);
            tileElement.addEventListener('dragend', this.dragStopHandler);
            playAreaElement.appendChild(tileElement);
       }

        this.setState({myCurrentTileList: myCurrentTileList});
        axios.put(`/api/gameInstance/${gameInstanceId}`, {remainingTileList})
            .then((response) => {
                console.log(response);
                this.setState({remainingTileList: remainingTileList});
            })
    }

    // spaceEnterEventHandler = (e) => {
    //     console.log(e.clientX);
    //     console.log(e.target);
    //     console.log(e.target.getAttribute("id"));
    //     const targetXY = e.target.getAttribute("id").split("-");
    //     console.log(targetXY);
    //     const targetX = targetXY[0];
    //     const targetY = targetXY[1];
    //     const targetSpace = this.state.gameBoard[targetX][targetY];
    //     console.log(targetSpace);
    //     console.log(e.target.getBoundingClientRect());
    // }

    tileRackClickEventHandler = (e) => {
        console.log(e.target.getBoundingClientRect());
    }

    // clickToMoveHandler = (e) => {
    //     const targetElement = e.target;
    //     targetElement.style.left = "800px";
    //     targetElement.style.top = "600px";
    // }

    // startDragHandler = (e) => {
    //     console.log(e.clientX);
    //     const targetElement = e.target;
    //     let offsetX = e.clientX;
    //     let offsetY = e.clientY;
    //     let coordX = targetElement.style.left;
    //     let coordY = targetElement.style.top;
    //     this.dragHandler(e, offsetX, offsetY, coordX, coordY);
    // }

    // dragHandler = (e, coordX, coordY, offsetX, offsetY) => {
    //     console.log(e.clientX);
    //     let targetElement = e.target;
    //     targetElement.style.left = `${coordX+e.clientX-offsetX}px`;
    //     targetElement.style.top = `${coordY+e.clientY-offsetY}px`;
    //     console.log(targetElement.style.left);
    // }

    allowDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    // startDragHandler = (e) => {
    //     const targetElement = e.target;
    //     console.log(typeof(targetElement))
    //     let elXStart = parseInt(targetElement.style.left);
    //     let elYStart = parseInt(targetElement.style.top);
    //     let mouseXStart = e.clientX;
    //     let mouseYStart = e.clientY;
    //     console.log(elXStart);
    //     console.log(mouseXStart);
    //     this.dragObject(e, elXStart, elYStart, mouseXStart, mouseYStart);
    // }

    // dragObject = (e, elXStart, elYStart, mouseXStart, mouseYStart) => {
        
    //         const targetElement = e.target;
    //         let mouseXEnd = e.clientX;
    //         let mouseYEnd = e.clientY;
    //         targetElement.style.left = elXStart+(mouseXEnd-mouseXStart)+'px';
    //         targetElement.style.top = elYStart+(mouseYEnd-mouseYStart)+'px';
        
    // }

    // startDragHandler = (e) => {
    //     const targetElement = e.target;
    //     const elXStart = parseInt(targetElement.style.left);
    //     const elYStart = parseInt(targetElement.style.top);
    //     const mouseXStart = e.clientX;
    //     const mouseYStart = e.clientY;
    //     console.log(mouseXStart);
    //     const moveTileData = {...this.state.moveTileData};
    //     moveTileData.targetElement = targetElement;
    //     moveTileData.elXStart = elXStart;
    //     moveTileData.elYStart = elYStart;
    //     moveTileData.mouseXStart = mouseXStart;
    //     moveTileData.mouseYStart = mouseYStart;
    //     this.setState({moveTileData: moveTileData});
    // }

    // dragHandler = (e) => {
    //     const moveTileData = {...this.state.moveTileData};
    //     moveTileData.mouseXEnd = e.clientX;
    //     moveTileData.mouseYEnd = e.clientY;
    //     moveTileData.targetElement.style.left = moveTileData.elXStart+(moveTileData.mouseXEnd-moveTileData.mouseXStart)+'px';
    //     moveTileData.targetElement.style.top = moveTileData.elYStart+(moveTileData.mouseYEnd-moveTileData.mouseYStart)+'px';
    //     this.setState({moveTileData: moveTileData});
    // }
    dragStartHandler = (e) => {
        // e.dataTransfer.setData("id", e.target.id);
        const tileBeingPlayed = e.target;
        // tileInPlay.playingTile = true;
        this.setState({tileBeingPlayed: tileBeingPlayed});
    }

    dragHandler = (e) => {
        const tileBeingPlayed = e.target;
        // const elX = parseInt(targetElement.style.left);
        // const elY = parseInt(targetElement.style.top);
        // console.log(e.clientX);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        tileBeingPlayed.style.left = mouseX+'px';
        tileBeingPlayed.style.top = mouseY+'px';
    }

    dragStopHandler = (e) => {
        const tileBeingPlayed = e.target;
        const mouseXEnd = e.clientX;
        const mouseYEnd = e.clientY;
        tileBeingPlayed.style.left = mouseXEnd+'px';
        tileBeingPlayed.style.top = mouseYEnd+'px';
        // const tileInPlay = {...this.state.tileInPlay};
        // tileInPlay.playingTile = false;
        // this.setState({tileInPlay: tileInPlay});
        console.log(this.targetSPace.targetX);
        const gameBoard = [...this.state.gameBoard];
        gameBoard[this.targetSPace.targetX][this.targetSPace.targetY].currentTile = {...this.state.tileBeingPlayed};
        this.setState({gameBoard: gameBoard});
    }

    dropTargetHandler = (e) => {
        console.log(e.clientX);
        // const targetClass = e.target.getAttribute("class").split(" ")[0];
        // console.log(targetClass);
        // if (this.state.tileInPlay.playingTile) {
        //     return false;
        // }
        console.log(e.target.getAttribute("class"));
        if(e.target.getAttribute("class") == null) {
            return false;
        }
        // console.log(e.target.getAttribute("id"));
        const targetXY = e.target.getAttribute("id").split("-");
        // console.log(targetXY);
        const targetX = targetXY[0];
        const targetY = targetXY[1];
        // const targetSpace = this.state.gameBoard[targetX][targetY];
        // console.log(targetSpace);
        // console.log(e.target.getBoundingClientRect());
        this.targetSPace.targetX = targetX;
        this.targetSPace.targetY = targetY;
        console.log(this.targetSPace.targetX);
        // const gameBoard = [...this.state.gameBoard];
        // gameBoard[targetX][targetY].currentTile = {...this.state.tileBeingPlayed};
        // this.targetSPace = {...gameBoard[targetX][targetY]};
        // this.setState({gameBoard: gameBoard});
    }

    // dropHandler = (e) => {
    //     e.preventDefault();
    //     let data = e.dataTransfer.getData("id");
    //     e.target.appendChild(document.getElementById(data));
    //     console.log(e.target);
    //     // if(e.target.getAttribute("class") == null) {
    //     //     return false;
    //     // }
    //     // // console.log(e.target.getAttribute("id"));
    //     // const targetXY = e.target.getAttribute("id").split("-");
    //     // // console.log(targetXY);
    //     // const targetX = targetXY[0];
    //     // const targetY = targetXY[1];
    //     // // const targetSpace = this.state.gameBoard[targetX][targetY];
    //     // // console.log(targetSpace);
    //     // // console.log(e.target.getBoundingClientRect());
    //     // const gameBoard = [...this.state.gameBoard];
    //     // gameBoard[targetX][targetY].currentTile = {...this.state.tileBeingPlayed};
    //     // this.setState({gameBoard: gameBoard});
    // }

    render() {

        return (
            <div id="player-view">
                <h3 id="player-view-header">{this.props.match.path.split('/')[2]}</h3>
                {/* <GameBoard gameBoard={this.state.gameData.gameInstance.gameBoard} gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                {/* <GameBoard gameInstanceId={this.state.gameData.gameInstance._id} /> */}
                <div id="play-area">
                    <div id="game-board">
                        {this.state.gameBoard.map((row, gridY) => {
                            return (
                                row.map((rowSpace, gridX) => {
                                    return (
                                        <div className={`game-board-space ${rowSpace.mType}-${rowSpace.mult}`} id={`${gridX}-${gridY}`} onDragOver={this.allowDrop} onDragEnter={this.dropTargetHandler}>
                                            {/* <p>{rowSpace.mult}</p>
                                            <p>{rowSpace.mType}</p>
                                            <p>{rowSpace.currentTile}</p> */}
                                        </div>
                                    )
                                })
                            )
                        })}
                    </div>
                    <div id="tile-rack-frame">
                        <div id="tile-rack" onClick={this.tileRackClickEventHandler}></div>
                        <button onClick={this.drawTiles}>Draw</button>
                    </div>
                    <p className="tile" id="tile-id" style={{position: 'absolute', left: '849px', top: '662.5px'}} draggable="true" onDragStart={this.dragStartHandler} onDrag={this.dragHandler} onDragEnd={this.dragStopHandler}>T</p>
                </div>
                <Link to={'/lobby'}><button onClick={this.leaveMatch}>Leave Game</button></Link>
            </div>
        )
    }
}

export default PlayerView;