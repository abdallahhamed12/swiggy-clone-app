const { add, subtract } = require('./math');

describe('Math utilities', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, -5)).toBe(15);
  });
});
