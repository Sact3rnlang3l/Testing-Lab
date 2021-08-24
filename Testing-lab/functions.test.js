const { test, expect } = require("@jest/globals");
const { return_two, greeting, add, mult, div, sub } = require("./functions.js");

test("Should return the number 2", () => {
  expect(return_two()).toEqual(2);
}),
  test("Greeting should return Hello 'name'", () => {
    expect(greeting("Jame")).toEqual("Hello, Jame");
    expect(greeting("Jill")).toEqual("Hello, Jill");
  }),
  describe("Math Stuffs", () => {
    test("Should return sum of two numbers", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(5, 9)).toEqual(14);
    }),
      test("Should multiply 2 numbers", () => {
        expect(mult(1, 2)).toEqual(2);
        expect(mult(2, 4)).toEqual(8);
      }),
      test("Should divide numbers", () => {
        expect(div(8, 4)).toEqual(2);
        expect(div(16, 8)).toEqual(2);
      }),
      test("Subtraction times", () => {
        expect(sub(2, 1)).toEqual(1);
        expect(sub(18, 8)).toEqual(10);
      });
  });
