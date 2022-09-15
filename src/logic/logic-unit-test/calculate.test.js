import calculate from '../../__mocks__/calculate';
jest.mock('../calculate');

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('This tests concern the calculate method', () => {
  test("when 'AC' button is clicked ", () => {
    expect(calculate(object, 'AC')).toEqual(object);
  });

  describe('These tests run if the button clicked is a number', () => {
    test('returns an empty object if the button is 0 and the next property value is also 0 ', () => {
      let obj = { ...object, next: '0' };
      expect(calculate(obj, '0')).toEqual({});
    });

    test('update next if there is an operation', () => {
      let obj = { ...object, next: null, operation: '+' };
      expect(calculate(obj, '9')).toEqual({ ...obj, next: '9' });
    });

    test('if no operation, update next and clear value ', () => {
      let obj = { ...object };
      expect(calculate(obj, '2')).toEqual({ next: '2', total: null });
    });
  });

  describe('if the button name is "."', () => {
    test('if obj.next is true and obj.next includes "."', () => {
      let obj = { ...object, next: '0.8787' };
      expect(calculate(obj, '.')).toEqual({ ...obj });
    });

    test('obj.operation', () => {
      let obj = { ...object, operation: '+' };
      expect(calculate(obj, '.')).toEqual({ ...obj, next: '0.' });
    });
  });

  describe('if the button name is "=" ', () => {
    test('if obj.next && obj.operation', () => {
      let obj = { total: '3', next: '87', operation: '+' };
      expect(calculate(obj, '=')).toEqual({
        total: '90',
        next: null,
        operation: null,
      });
    });

    test('if one of obj.next or obj.operation are missing ', () => {
      let obj = { ...object, total: '3', next: '87' };
      expect(calculate(obj, '=')).toEqual({});
    });

    test('if user pressed an operation after pressing "="', () => {
      let obj = { ...object, total: '34' };
      expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
    });
  });

  describe('user pressed an operation and there is an existing operation ', () => {
    test('if obj.total is true and obj.next is false', () => {
      let obj = { ...object, operation: '-', total: '32' };
      expect(calculate(obj, '+')).toEqual({
        ...obj,
        operation: '+',
      });
    });

    test('if total is false ', () => {
      let obj = { ...object, operation: '-' };
      expect(calculate(obj, 'x')).toEqual({ total: 0, operation: 'x' });
    });

    test('if all are true ', () => {
      let obj = { operation: '+', total: '3', next: '87' };
      expect(calculate(obj, '-')).toEqual({
        total: '90',
        next: null,
        operation: '-',
      });
    });
  });

  test("The user hasn't typed a number yet, just save the operation", () => {
    let obj = { ...object };
    expect(calculate(obj, '+')).toEqual({ operation: '+' });
  });
});
