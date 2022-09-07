import React, { Component } from "react";
import Calcultor from "./Components/Calculator";
import Input from "./Components/Input";
import "./App.css";
import calculate from "./logic/calculate";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((s) => calculate(s, e.target.textContent));
  }

  render() {
    return (
      <div className="App">
        <div className="input-line">
          <Input>
            {this.state.total}
            {this.state.operation}
            {this.state.next}
          </Input>
        </div>
        <div className="button-line1">
          <Calcultor name="AC" clickHandler={this.clickHandler} />
          <Calcultor name="7" clickHandler={this.clickHandler} />
          <Calcultor name="4" clickHandler={this.clickHandler} />
          <Calcultor name="1" clickHandler={this.clickHandler} />
          <Calcultor name="0" clickHandler={this.clickHandler} />
        </div>
        <div className="button-line2">
          <Calcultor name="+/-" clickHandler={this.clickHandler} />
          <Calcultor name="8" clickHandler={this.clickHandler} />
          <Calcultor name="5" clickHandler={this.clickHandler} />
          <Calcultor name="2" clickHandler={this.clickHandler} />
        </div>
        <div className="button-line3">
          <Calcultor name="%" clickHandler={this.clickHandler} />
          <Calcultor name="9" clickHandler={this.clickHandler} />
          <Calcultor name="6" clickHandler={this.clickHandler} />
          <Calcultor name="3" clickHandler={this.clickHandler} />
          <Calcultor name="." clickHandler={this.clickHandler} />
        </div>
        <div className="button-line4">
          <Calcultor name="÷" clickHandler={this.clickHandler} />
          <Calcultor name="x" clickHandler={this.clickHandler} />
          <Calcultor name="-" clickHandler={this.clickHandler} />
          <Calcultor name="+" clickHandler={this.clickHandler} />
          <Calcultor name="=" clickHandler={this.clickHandler} />
        </div>
      </div>
    );
  }
}
