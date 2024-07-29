var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when calculating 5!', () => {
      // Setup
      const input = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });

    it('returns 6 when calculating 3!', () => {
      // Setup
      const input = 3;
      const expectedResult = 6;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });

    it('returns 1 when calculating 0!', () => {
      // Setup
      const input = 0;
      const expectedResult = 1;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });
  });
});
