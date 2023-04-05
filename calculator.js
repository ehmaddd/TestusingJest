class Calculator {
    constructor(value1=null, value2=null) {
        this.value1 = value1;
        this.value2 = value2;
    }
    add() {
        return this.value1 + this.value2;
    }
    subtract() {
        return this.value1 - this.value2;
    }
    divide() {
        return this.value1 / this.value2;
    }
    multiply() {
        return this.value1 * this.value2;
    }
    setValue(num1, num2) {
        this.value1 = num1;
        this.value2 = num2;
    }
  };

  module.exports = Calculator;