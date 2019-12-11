import React from 'react';

class Tile extends React.Component {

    render() {
        
        return (
            <div className="tile" draggable="true" onClick={this.props.onClick} style={this.props.style} dataletter={this.props.dataletter} datapointvalue={this.props.datapointvalue} onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd}>
                <p>
                    {
                        (this.props.dataletter === '') ?
                        ' ' :
                        this.props.dataletter
                    }
                </p>
                <p>{this.props.datapointvalue}</p>
            </div>
        )
    }
}

export default Tile;