class Calculator {
    constructor() {
        this.result;
    }

    add = (a, b) => {
        if (a === undefined || b === undefined) throw new Error('Empty parameter');
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Unsupported parameter type');
        if (a > 99999999 || b > 99999999) throw new Error('Extra-large value');
        if (a < -99999999 || b < -99999999) throw new Error('Extra-small value');
        this.result = a + b;
        console.log(`The sum of ${a} and ${b} is equal to ${this.result}`);
        return this;
    }

    subtract = (a, b) => {
        if (a === undefined || b === undefined) throw new Error('Empty parameter');
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Unsupported parameter type');
        if (a > 99999999 || b > 99999999) throw new Error('Extra-large value');
        if (a < -99999999 || b < -99999999) throw new Error('Extra-small value');
        this.result = a - b;
        console.log(`The difference between ${a} and ${b} is equal to ${this.result}`);
        return this;
    }

    multiply = (a, b) => {
        if (a === undefined || b === undefined) throw new Error('Empty parameter');
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Unsupported parameter type');
        if (a > 99999999 || b > 99999999) throw new Error('Extra-large value');
        if (a < -99999999 || b < -99999999) throw new Error('Extra-small value');
        this.result = a * b;
        console.log(`The product of ${a} and ${b} is equal to ${this.result}`);
        return this;
    }

    divide = (a, b) => {
        if (a === undefined || b === undefined) throw new Error('Empty parameter');
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Unsupported parameter type');
        if (a > 99999999 || b > 99999999) throw new Error('Extra-large value');
        if (a < -99999999 || b < -99999999) throw new Error('Extra-small value');
        if (b === 0) throw new Error('The divisor cannot be zero');
        this.result = a / b;
        console.log(`The quotient of ${a} and ${b} is equal to ${this.result}`);
        return this;
    }

    getResult() {
        return this.result;
    }
}

module.exports = Calculator;