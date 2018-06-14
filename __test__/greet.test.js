'use strict';

const greet = require('../lib/greet');
const math = require('../lib/arithmetic');

describe('testing #greet', () => {
  describe('testing #greet.hi', () => {
    test('greet.hi should return Hello Judy', () => {
      expect(greet.hi('world')).toEqual('hello world');
    });

    test('should return null in case of no input', () => {
      expect(greet.hi('')).toBeNull();
    });
  });

  describe('testing #greet.add', () => {
    test('math.add should return the sum of x and y', () => {
      expect(math.add(3, 5)).toEqual(8);
    });

    test('math.sub should return the sum of x and y', () => {
      expect(math.sub(5, 5)).toEqual(0);
    });
  });
});

