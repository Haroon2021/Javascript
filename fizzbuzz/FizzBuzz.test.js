const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('should say Fizz when passed 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should say Buzz when passed 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('Should return FizzBuzz when given 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return the same number inputted if 2', () => {
        expect(fizzBuzz(2)).toBe(2);
    });
});


