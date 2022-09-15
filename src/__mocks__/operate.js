export default function operate(num1, num2, operation) {
  const numberOne = Number(num1);
  const numberTwo = Number(num2);

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
