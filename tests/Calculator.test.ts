import Calculator from '../src/Calculator';

describe('calculateDistance', function() {
  it('distance', function() {
    let result = Calculator.GetDistance([1, 4], [4, 4]);
    expect(result).toBe(1.0606601717798212);
  });
});

describe('calculatePoints', function() {
  let coord = [[1, 4], [4, 4], [3, 2], [5, 1]];
  it('closest', function() {
    let result = Calculator.GetClosestPoints(coord);
    expect(result).toStrictEqual([[1, 4], [4, 4]]);
  });

  it('farthest', function() {
    let result = Calculator.GetFarthestPoints(coord);
    expect(result).toStrictEqual([[4, 4], [3, 2]]);
  });
});
