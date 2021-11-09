let Calculator = require('../../src/calculator/calculator')

describe('Test Calculator class', function () {
    let calc = new Calculator();

    beforeEach(function () {
        console.log('Srart of the test');
    })

    it('Test sum function with the usual parameters', function () {
        expect(calc.add(10, 5)).toBe(15);
    });

    it('Test sum function with string parameters', function () {
        let isErr = false;
        try {
            calc.add('10', '5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test sum function with extra-large parameters', function () {
        let isErr = false;
        try {
            calc.add(999999999, 1);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-large value');
        }
        expect(isErr).toBe(true);
    });

    it('Test sum function with extra-small parameters', function () {
        let isErr = false;
        try {
            calc.add(-999999999, 1);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-small value');
        }
        expect(isErr).toBe(true);
    });

    it('Test sum function with empty parameters', function () {
        let isErr = false;
        try {
            calc.add(10);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Empty parameter');
        }
        expect(isErr).toBe(true);
    });

    it('Test subtract function with usual parameters', function () {
        expect(calc.subtract(10, 5)).toBe(5);
    });

    it('Test subtract function with string parameters', function () {
        let isErr = false;
        try {
            calc.subtract('10', '5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test subtract function with extra-large parameters', function () {
        let isErr = false;
        try {
            calc.subtract(1, 999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-large value');
        }
        expect(isErr).toBe(true);
    });

    it('Test subtract function with extra-small parameters', function () {
        let isErr = false;
        try {
            calc.subtract(1, -999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-small value');
        }
        expect(isErr).toBe(true);
    });

    it('Test subtract function with empty parameters', function () {
        let isErr = false;
        try {
            calc.subtract(5);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Empty parameter');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiply function with usual parameters', function () {
        expect(calc.multiply(10, 5)).toBe(50);
    });

    it('Test multiply function with string parameters', function () {
        let isErr = false;
        try {
            calc.multiply('10', '5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiply function with extra-large parameters', function () {
        let isErr = false;
        try {
            calc.multiply(999999999, 999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-large value');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiply function with extra-small parameters', function () {
        let isErr = false;
        try {
            calc.multiply(-999999999, -999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-small value');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiply function with empty parameters', function () {
        let isErr = false;
        try {
            calc.multiply();
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Empty parameter');
        }
        expect(isErr).toBe(true);
    });

    it('Test divide function with usual parameters', function () {
        expect(calc.divide(10, 5)).toBe(2);
    });

    it('Test divide function with string parameters', function () {
        let isErr = false;
        try {
            calc.divide('10', '5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test divide function with extra-large parameters', function () {
        let isErr = false;
        try {
            calc.divide(999999999, 999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-large value');
        }
        expect(isErr).toBe(true);
    });

    it('Test divide function with extra-small parameters', function () {
        let isErr = false;
        try {
            calc.divide(-999999999, -999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Extra-small value');
        }
        expect(isErr).toBe(true);
    });

    it('Test divide function with empty parameters', function () {
        let isErr = false;
        try {
            calc.divide();
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Empty parameter');
        }
        expect(isErr).toBe(true);
    });

    it('Test divide function with zero divisor', function () {
        let isErr = false;
        try {
            calc.divide(10, 0);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('The divisor cannot be zero');
        }
        expect(isErr).toBe(true);
    });
});