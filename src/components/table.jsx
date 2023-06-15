import React, { Component, ReactPropTypes} from "react";
import Row from "./rows";

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            row: [],
        }
        this.addRow = this.addRow.bind(this);
    }

    addRow = () => {
        this.setState((prevState) => ({
            row: [...prevState.row, 1]
        }));
        console.log(this.state.row);
    };

    render(){
        return (
            <div>
                <div className="Grid">
                   {this.state.row.map(row =>
                    <Row count={row.length}>{row}</Row>
                   )}
                </div>
                <button onClick={this.addRow}>Add Row</button>
            </div>
        );
    }
}

export default Table

/**
 * const listItems = numbers.map((number) =>
  <li>{number}</li>
);
 */