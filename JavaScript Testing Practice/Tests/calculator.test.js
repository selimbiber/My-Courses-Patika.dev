import Calculator from "../Scripts/calculator";

describe("Calculator basic operations", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  test("Add", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Subtract", () => {
    expect(calculator.subtract(8, 2)).toBe(6);
  });

  test("Multiply", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test("Divide", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("Add when is undefined", () => {
    expect(calculator.add()).toBe(NaN);
  });
  test("Subtract when is undefined", () => {
    expect(calculator.subtract()).toBe(NaN);
  });
  test("Divide when is undefined", () => {
    expect(calculator.divide()).toBe(NaN);
  });
  test("Multiply when is undefined", () => {
    expect(calculator.multiply()).toBe(NaN);
  });
});
