import React, { Component } from "react";
import Calcultor from "./Components/Calculator";
import Input from "./Components/Input";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="input-line">
          <Input />
        </div>
        <div className="button-line1">
          <Calcultor name="AC" />
          <Calcultor name="7" />
          <Calcultor name="4" />
          <Calcultor name="1" />
          <Calcultor name="0" />
        </div>
        <div className="button-line2">
          <Calcultor name="+/-" />
          <Calcultor name="8" />
          <Calcultor name="5" />
          <Calcultor name="2" />
        </div>
        <div className="button-line3">
          <Calcultor name="%" />
          <Calcultor name="9" />
          <Calcultor name="6" />
          <Calcultor name="3" />
          <Calcultor name="." />
        </div>
        <div className="button-line4">
          <Calcultor name="\" />
          <Calcultor name="x" />
          <Calcultor name="-" />
          <Calcultor name="+" />
          <Calcultor name="=" />
        </div>
      </div>
    );
  }
}
