import { StringCalculator } from "./src/StringCalculator";

describe("string calculator", () => {
  const calc = new StringCalculator();

  it("should return zero when empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  it("given number we should return the same number", () => {
    expect(calc.add("42")).toBe(42);
  });

  it("should calculate the sum of multiple numbers", () => {
    expect(calc.add("5,15,100")).toBe(120);
  });

  it("Should support different delimiters", () => {
    expect(calc.add("1,2\n3")).toBe(6);
  });
});
