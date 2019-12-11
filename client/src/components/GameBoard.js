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
                                <div className={className} id={id} onDragOver={this.props.allowDrop} onDragEnter={this.props.dropTargetHandler}>
                                    <div className="game-board-space-info">
                                        <p>{rowSpace.mult}</p>
                                        <p>{rowSpace.mType}</p>
                                    </div>
                                    {
                                        !rowSpace.currentTile ? 
                                        null :
                                        <Tile style={{position: 'absolute', left: `${document.getElementById(`${id}`).getBoundingClientRect().left+5}px`, top: `${document.getElementById(`${id}`).getBoundingClientRect().top+5}px`}} draggable="true" dataletter={rowSpace.currentTile.letter} datapointvalue={rowSpace.currentTile.pointValue} onDragStart={this.props.dragStartHandler} onDragEnd={this.props.dragStopHandler} />
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