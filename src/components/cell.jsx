import React, { Component, ReactPropTypes} from "react";

class Cell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<span className="cell"></span>);
    }
}

export default Cell