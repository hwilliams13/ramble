import React from 'react';

import Tile from './Tile.js'

import axios from 'axios';



class GameBoard extends React.Component {

    render() {
        return(
            <div id="game-board">
                {this.props.gameBoard.map((row, gridX) => {
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
        )
    }
}

export default GameBoard;