/**
 * Calculates first elementsCount Fibonacci sequence elements
 * @param {Number} elementsCount Specifies amount of elements to calculate
 * @returns {Array} Array with calculated elements
 */
module.exports = function (elementsCount) {
  var previous = 1 // previous element in sequence
    , prePrevious = 0 // pre-previous element in sequence
    , current // current element in sequence
    , sequence = []; // sequence array
  for (var i = 0; i < elementsCount; ++i) {
    current = previous + prePrevious; // current element value is a sum of two previous values
    sequence.push(current); // adds current element to sequence array
    prePrevious = previous; // now previous element becomes pre-previous
    previous = current; // and current becomes previous
  }
  return sequence;
};