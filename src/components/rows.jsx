import React, { Component, ReactPropTypes} from "react";
import Cell from "./cell";

class Row extends Component{
    constructor(props){
        super(props);
        this.state = {
            cells: []
        }
        this.addColumn = this.addColumn.bind(this);
    }

    addColumn = () => {
        this.setState((prevState) => ({
            cells: [...prevState.cells, this.props.count],
        }));
    };

    render(){
        return (
          <div>
            1
            <div className="Grid">
              {this.state.cells.map((cell) => (
                <Cell>{cell}</Cell>
              ))}
            </div>
          </div>
        );
    }
}

export default Row

// pass function as a prop to rows 