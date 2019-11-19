import React from 'react';

class Tile extends React.Component {

    render() {
        
        return (
            <div className="tile" draggable="true" onClick={this.props.onClick} style={this.props.style} dataLetter={this.props.dataLetter} dataPointValue={this.props.dataPointValue} onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd}>
                <p>{this.props.dataLetter}</p>
                <p>{this.props.dataPointValue}</p>
            </div>
        )
    }
}

export default Tile;