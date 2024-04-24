const calculations = require("./calculator");

//Define a group of tests using Jest's describe function

describe("Calculator tests", () => {
   

  test("adding 1 + 2 should return 3", () => {
    //Call the sum function with the inputs 1 and 2 and expect the output to be 3
    const result = calculations.sum(1, 2);
    expect(result).toEqual(3);
  });

  test("adding 1 + -3 should return -2", () => {
    expect(calculations.sum(1, -3)).toBe(-2);
  });

  test("entering only one param should return NaN", () => {
    expect(calculations.sum(1)).toBe(NaN);
  });

  test("subtracting 17 - 5 should return 12", () => {
    const result = calculations.diff(17, 5);
    expect(result).toBe(12);
  });

  test("multipyling 7*8 should return 56", () => {
    const result = calculations.product(7, 8);
    expect(result).toBe(56);
  });

  test("multipyling 7* -8 should return -56", () => {
    const result = calculations.product(7, -8);
    expect(result).toBe(-56);
  });

  test("multipyling -7* -8 should return 56", () => {
    const result = calculations.product(-7, -8);
    expect(result).toBe(56);
  });

  test("multipyling -7* 8 should return -56", () => {
    const result = calculations.product(-7, 8);
    expect(result).toBe(-56);
  });

  test("divide 12/3 should return 4", () => {
    const result = calculations.divide(12, 3);
    expect(result).toBe(4);
  });

  test("divide 1/3 should return close to .33", () => {
    const result = calculations.divide(1, 3);
    expect(result).toBeCloseTo(0.33);
  });
});
