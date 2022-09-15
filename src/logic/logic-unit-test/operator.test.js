import operate from '../../__mocks__/operate';

jest.mock('../operate.js');

describe('this is a mock test for the operator function ', () => {
  test('throws an error if we pass a wrong operation', () => {
    expect(() => operate('1', '2', '&')).toThrow("Unknown operation '&'");
  });

  test("returns the right answer when the operation is '+' ", () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test("returns the right answer when the operation is '-'", () => {
    expect(operate('45', '32', '-')).toBe('13');
  });

  test('returns the right quotient when the operation is "÷" ', () => {
    expect(operate('60', '30', '÷')).toBe('2');
  });

  test('returns the right value when the operation is "x" ', () => {
    expect(operate('6', '30', 'x')).toBe('180');
  });

  test('when divisor is 0, return Infinity ', () => {
    expect(operate('6', '0', '÷')).toBe('Infinity');
  });

  test('when the operation is modulo', () => {
    expect(operate('6', '5', '%')).toBe('1');
  });
});
