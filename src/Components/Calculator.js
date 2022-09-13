import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import calculate from "../logic/calculate";

const Calculator = () => {
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

      <div className="button-line1 buttons">
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="7" clickHandler={clickHandler} />
        <Button name="4" clickHandler={clickHandler} />
        <Button name="1" clickHandler={clickHandler} />
        <Button name="0" clickHandler={clickHandler} />
      </div>
      <div className="button-line2 buttons">
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
      </div>
      <div className="button-line3 buttons">
        <Button name="%" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
      </div>
      <div className="button-line4 buttons">
        <Button name="÷" clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default Calculator;
