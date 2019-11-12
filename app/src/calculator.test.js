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
    it('should throw an error on negative numbers', () => {
        expect(() => calculate('1,-3')).toThrow('Negatives are not allowed');
        expect(() => calculate('4,-3')).toThrow('Negatives are not allowed');
    });
    it('should ignore any number greater than zero', () => {
        expect(calculate('2,1001,6')).toEqual(8);
    });
});

describe('test for handling of various delimiters', () => {
    it("should handle the line break delimiter", () => {
        expect(calculate('1\n2,3')).toEqual(6);
        expect(calculate('1\n2\n3')).toEqual(6);
    });
    it("should handle the special delimiter combo [//{delimiter}/n]", () => {
        expect(calculate('//#\n2#5')).toEqual(7);
        expect(calculate('//,\n2,ff,100')).toEqual(102);
    });
    it('should handle multiple special delimiter combo //[{delimiter}]\n{numbers}', () => {
        expect(calculate('//[***]\n11***22***33')).toEqual(66);
    });
});

describe('test for correct addition', () => {
    it('should return 20 for input of 20', () => {
        expect(calculate('20')).toEqual(20);
    });
    it('should return sum of two numbers', () => {
      expect(calculate('1,2')).toEqual(3);
      expect(calculate('1,500')).toEqual(501);
    });
 });