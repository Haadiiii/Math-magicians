import React, { useState } from "react";
import Calcultor from "./Components/Calculator";
import Input from "./Components/Input";
import "./App.css";
import calculate from "./logic/calculate";

const App = () => {
  const [state, setState] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const clickHandler = (e) => {
    setState((s) => calculate(s, e.target.textContent));
  };

  const { total, operation, next } = state;

  return (
    <div className="App">
      <div className="input-line">
        <Input>
          {total}
          {operation}
          {next}
        </Input>
      </div>
      <div className="button-line1">
        <Calcultor name="AC" clickHandler={clickHandler} />
        <Calcultor name="7" clickHandler={clickHandler} />
        <Calcultor name="4" clickHandler={clickHandler} />
        <Calcultor name="1" clickHandler={clickHandler} />
        <Calcultor name="0" clickHandler={clickHandler} />
      </div>
      <div className="button-line2">
        <Calcultor name="+/-" clickHandler={clickHandler} />
        <Calcultor name="8" clickHandler={clickHandler} />
        <Calcultor name="5" clickHandler={clickHandler} />
        <Calcultor name="2" clickHandler={clickHandler} />
      </div>
      <div className="button-line3">
        <Calcultor name="%" clickHandler={clickHandler} />
        <Calcultor name="9" clickHandler={clickHandler} />
        <Calcultor name="6" clickHandler={clickHandler} />
        <Calcultor name="3" clickHandler={clickHandler} />
        <Calcultor name="." clickHandler={clickHandler} />
      </div>
      <div className="button-line4">
        <Calcultor name="÷" clickHandler={clickHandler} />
        <Calcultor name="x" clickHandler={clickHandler} />
        <Calcultor name="-" clickHandler={clickHandler} />
        <Calcultor name="+" clickHandler={clickHandler} />
        <Calcultor name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default App;
