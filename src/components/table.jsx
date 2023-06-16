import React, { Component, ReactPropTypes } from "react";
import Row from "./rows";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      columnCount: 0,
      rowCount: 0,
      color: "",
      mouseIsDown: false,
    };
    this.addRow = this.addRow.bind(this);
  }

  addRow = () => {
    const arr = [];
    for (let i = 0; i < this.state.columnCount; i++) {
      arr.push(1);
    }
    this.setState((prevState) => ({
      grid: [...prevState.grid, [...arr, 1]],
      rowCount: this.state.rowCount + 1,
    }));
    const n = this.state.rowCount + 1;
    console.log("Number of rows: " + n);
  };

  addColumn = () => {
    this.setState((prevState) => ({
      grid: prevState.grid.map((row) => [...row, 1]),
      columnCount: this.state.columnCount + 1,
    }));
    const n = this.state.columnCount + 2;
    console.log("Number of columns: " + n);
  };

  removeColumn = () => {
    this.setState(() => ({
      grid: this.state.grid.map((row) => {
        return row.slice(0, -1);
      }),
      columnCount: this.state.columnCount - 1,
    }));
    const n = this.state.columnCount;
    console.log("Number of columns: " + n);
  };

  removeRow = () => {
    this.setState(() => ({
      grid: this.state.grid.slice(0, -1),
      rowCount: this.state.rowCount - 1,
    }));
    const n = this.state.rowCount - 1;
    console.log("Number of rows: " + n);
  };

  selectColor = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  clickCell = (event) => {
    event.target.style.background = this.state.color;
  };

  mouseHover = (event) => {
    if (this.state.mouseIsDown) this.clickCell(event);
    console.log("Mouse is hovering over");
    console.log("Is mouse down: " + this.state.mouseIsDown);
  };

  mouseDown = () => {
    this.setState({
      mouseIsDown: true,
    });
    console.log("Mouse is Down");
  };

  mouseUp = () => {
    this.setState({
      mouseIsDown: false,
    });
    console.log("Mouse is Up");
  };

  render() {
    return (
      <div>
        <div
          onMouseOver={this.mouseHover}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onClick={this.clickCell}
          className="Grid"
        >
          {this.state.grid.map((row, index) => (
            <Row rows={row} key={index}></Row>
          ))}
        </div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <div>
          <select defaultValue={this.state.color} onChange={this.selectColor}>
            <option value="">None</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Table;

/**
 * const listItems = numbers.map((number) =>
  <li>{number}</li>
);
 */
