import React from 'react';

class Tile extends React.Component {

    render() {
        return (
            <div className="tile" draggable="true">
                <p>{this.props.dataLetter}</p>
                <p>{this.props.dataPointValue}</p>
            </div>
        )
    }
}

export default Tile;