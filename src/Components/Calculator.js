const Calculator = (props) => (
  <div className="button">
    <button type="submit" onClick={props.clickHandler}>
      {props.name}
    </button>
  </div>
);

export default Calculator;
