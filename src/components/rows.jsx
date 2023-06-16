import React, { Component, ReactPropTypes} from "react";
import Cell from "./cell";

class Row extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Row">
              {this.props.rows.map((cell, index) => (
                  <Cell key={index}>{cell}</Cell>
              ))}
            </div>
        );
    }
}

export default Row

// pass function as a prop to rows 