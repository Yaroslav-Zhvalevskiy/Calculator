function Calculator() {
    this._result = null;

    this.getLastResult = () => {
        console.log(`The last result is equal to ${this._result}`);
        return this._result;
    }

    this.sum = (a, b) => {
        this._result = a + b;
        console.log(`The sum of ${a} and ${b} is equal to ${this._result}`);
        return this._result;
    }

    this.subtraction = (a, b) => {
        this._result = a - b;
        console.log(`The difference between ${a} and ${b} is equal to ${this._result}`);
        return this._result;
    }

    this.multiply = (a, b) => {
        this._result = a * b;
        console.log(`The product of ${a} and ${b} is equal to ${this._result}`);
        return this._result;
    }

    this.divide = (a, b) => {
        this._result = a / b;
        console.log(`The quotient of ${a} and ${b} is equal to ${this._result}`);
        return this._result;
    }
}

module.exports = Calculator;