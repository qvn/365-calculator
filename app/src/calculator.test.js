'use strict'
import calculate from './calculator.js'
describe('handling invalid inputs', () => {
    it('should treat empty input as 0', () => {
        expect(calculate('')).toEqual(0);
        expect(calculate(',')).toEqual(0);
        expect(calculate('1,')).toEqual(1);
        expect(calculate('1,2,,4,')).toEqual(7);
    });
    it('should treat invalid number as 0', () => {
        expect(calculate('5,tytyt')).toEqual(5);
        expect(calculate('s,4,2,t')).toEqual(6);
    });
    it('should not have a max number limit', () => {
        expect(calculate('1,2,3,4,5,6,7,8,9,10,11,12')).toEqual(78);
    });
});

describe('test for correct addition', () => {
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
 });