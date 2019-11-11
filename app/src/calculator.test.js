'use strict'
import calculate from './calculator.js'
describe('handling invalid inputs', () => {
    it('should treat empty input as 0', () => {
        expect(calculate('')).toEqual(0);
        expect(calculate(',')).toEqual(0);
        expect(calculate('1,')).toEqual(1);
    });
    it('should treat invalid number as 0', () => {
        expect(calculate('5,tytyt')).toEqual(5);
    });
    it('should raise an exception if more than two numbers are provided', () => {
        expect(() => {calculate('1,2,3');}).toThrow();
    });
    it('should return 20 for input of 20', () => {
        expect(calculate('20')).toEqual(20);
        expect(calculate(20)).toEqual(20);
    });
    it('should return sum of two numbers', () => {
      expect(calculate('1,-3')).toEqual(-2);
      expect(calculate('1,2')).toEqual(3);
      expect(calculate('1,5000')).toEqual(5001);
      expect(calculate('4,-3')).toEqual(1);
    });
  })