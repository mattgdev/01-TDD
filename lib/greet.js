'use strict';

const greet = module.exports = {};

greet.hi = (str) => {
  if (typeof str !== 'string') return null; 
  if (!str) return null;
  return `hello ${str}`;
};

