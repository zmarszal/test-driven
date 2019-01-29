const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('If an empty array is passed in it returns an empty array', () => {
    twoSum([], 2).to.equal([]);
  })
})
