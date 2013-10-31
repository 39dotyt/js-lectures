module.exports = function (n) {
  var previous = 0
    , prePrevious = 1
    , current
    , sequence = [];
  for (var i = 0; i < n; ++i) {
    current = previous + prePrevious;
    sequence.push(current);
    prePrevious = previous;
    previous = current;
  }
  return sequence;
};