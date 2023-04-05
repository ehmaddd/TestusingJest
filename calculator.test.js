const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Calculations', () => {
    calculator.setValue(5, 3);
    test(`${calculator.val1}+${calculator.val2}=${calculator.val1+calculator.val2}`, () => {
        expect(calculator.add()).toBe(calculator.value1+calculator.value2);
    });
    test(`${calculator.val1}-${calculator.val2}=${calculator.val1-calculator.val2}`, () => {
        expect(calculator.subtract()).toBe(calculator.value1-calculator.value2);
    });
    test(`${calculator.val1}*${calculator.val2}=${calculator.val1*calculator.val2}`, () => {
        expect(calculator.multiply()).toBe(calculator.value1*calculator.value2);
    });
    test(`${calculator.val1}/${calculator.val2}=${calculator.val1/calculator.val2}`, () => {
        expect(calculator.divide()).toBe(calculator.value1/calculator.value2);
    });


    calculator.setValue(5.5, 3.5);
    test(`${calculator.val1}+${calculator.val2}=${calculator.val1+calculator.val2}`, () => {
        expect(calculator.add()).toBe(calculator.value1+calculator.value2);
    });
    test(`${calculator.val1}-${calculator.val2}=${calculator.val1-calculator.val2}`, () => {
        expect(calculator.subtract()).toBe(calculator.value1-calculator.value2);
    });
    test(`${calculator.val1}*${calculator.val2}=${calculator.val1*calculator.val2}`, () => {
        expect(calculator.multiply()).toBe(calculator.value1*calculator.value2);
    });
    test(`${calculator.val1}/${calculator.val2}=${calculator.val1/calculator.val2}`, () => {
        expect(calculator.divide()).toBe(calculator.value1/calculator.value2);
    });


    calculator.setValue(0, 3);
    test(`${calculator.val1}+${calculator.val2}=${calculator.val1+calculator.val2}`, () => {
        expect(calculator.add()).toBe(calculator.value1+calculator.value2);
    });
    test(`${calculator.val1}-${calculator.val2}=${calculator.val1-calculator.val2}`, () => {
        expect(calculator.subtract()).toBe(calculator.value1-calculator.value2);
    });
    test(`${calculator.val1}*${calculator.val2}=${calculator.val1*calculator.val2}`, () => {
        expect(calculator.multiply()).toBe(calculator.value1*calculator.value2);
    });
    test(`${calculator.val1}/${calculator.val2}=${calculator.val1/calculator.val2}`, () => {
        expect(calculator.divide()).toBe(calculator.value1/calculator.value2);
    });
  });