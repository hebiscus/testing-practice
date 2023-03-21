import { capitalize } from ".";
import { reverseString } from ".";
import { calculator } from ".";
import { caesarCipher } from ".";
import { analyzeArray } from ".";

it("first letter capitalisation", () => {
    expect(capitalize("kaczka")).toBe("Kaczka");
});

it("reverse the string", () => {
    expect(reverseString("abc")).toBe("cba");
});

it("calculator adding", () => {
    let addFunction = calculator.add;
    expect(addFunction(2,2)).toBe(4);
});

it("calculator subtracting", () => {
    let subtractFunction = calculator.subtract;
    expect(subtractFunction(2,2)).toBe(0);
});

it("calculator dividing", () => {
    let divideFunction = calculator.divide;
    expect(divideFunction(2,2)).toBe(1);
});

it("calculator multiplying", () => {
    let multiplyFunction = calculator.multiply;
    expect(multiplyFunction(2,2)).toBe(4);
});

it("cipher", () => {
    expect(caesarCipher("As you wish sire!", 5)).toBe("Fx dtz bnxm xnwj!");
});


it("analyze array", () => {
    expect(analyzeArray([1,2,3])).toStrictEqual({length: 3, average: 2, min: 1, max: 3});
});
