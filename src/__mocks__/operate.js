export default function operate(numberOne, numberTwo, operation) {
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  
  if (operation === '+') {
    return (numberOne + numberTwo).toString();
  }
  if (operation === '-') {
    return (numberOne - numberTwo).toString();
  }
  if (operation === 'x') {
    return (numberOne * numberTwo).toString();
  }
  if (operation === '÷') {
    try {
      return (numberOne / numberTwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return (numberOne % numberTwo).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
