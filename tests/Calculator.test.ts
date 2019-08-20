import Calculator from '../src/Calculator';

describe('calculateDistance', function() {
  it('distance', function() {
    let result = Calculator.GetDistance([1, 4], [4, 4]);
    expect(result).toBe(1.0606601717798212);
  });
  it('distance', function() {
    let result = Calculator.GetDistance([4, 4], [3, 2]);
    expect(result).toBe(2.449489742783178);
  });
  it('distance', function() {
    let result = Calculator.GetDistance([3, 2], [5, 1]);
    expect(result).toBe(1.5);
  });
});

describe('calculateClosestPoints', function() {
  it('fourCoordinates', function() {
    let result = Calculator.GetClosestPoints([[1, 4], [4, 4], [3, 2], [5, 1]]);
    expect(result).toStrictEqual([[1, 4], [4, 4]]);
  });
  it('threeCoordinates', function() {
    let result = Calculator.GetClosestPoints([[1, 4], [4, 4], [3, 2]]);
    expect(result).toStrictEqual([[1, 4], [4, 4]]);
  });
});

describe('calculateFarthestPoints', function() {
  it('fourCoordinates', function() {
    let result = Calculator.GetFarthestPoints([[1, 4], [4, 4], [3, 2], [5, 1]]);
    expect(result).toStrictEqual([[4, 4], [3, 2]]);
  });
  it('threeCoordinates', function() {
    let result = Calculator.GetFarthestPoints([[1, 4], [4, 4], [3, 2]]);
    expect(result).toStrictEqual([[4, 4], [3, 2]]);
  });
});
