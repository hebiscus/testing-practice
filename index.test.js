import { capitalize } from ".";
import { reverseString } from ".";
import { calculator } from ".";
import { caesarCipher } from ".";
import { analyzeArray } from ".";

it("first letter capitalisation", () => {
    expect(capitalize("kaczka")).toBe("Kaczka");
});

it("capitalisation multiple words", () => {
    expect(capitalize("Kaczka wahooo")).toBe("Kaczka wahooo");
});

it("works with single word", () => {
    expect(reverseString("abc")).toBe("cba");
});

it("works with multiple words", () => {
    expect(reverseString("sir that can't be")).toBe("eb t'nac taht ris");
});

it("adding basic", () => {
    let addFunction = calculator.add;
    expect(addFunction(2,2)).toBe(4);
});

it("adding negative", () => {
    let addFunction = calculator.add;
    expect(addFunction(-4322,-2)).toBe(-4324);
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

it("cipher looping array", () => {
    expect(caesarCipher("dropped my croissant", 20)).toBe("xlijjyx gs wlicmmuhn");
});

it("analyze basic array", () => {
    expect(analyzeArray([1,2,3])).toStrictEqual({length: 3, average: 2, min: 1, max: 3});
});

it("analyze more complicated array", () => {
    expect(analyzeArray([-5,100,25,50,15])).toStrictEqual({length: 5, average: 37, min: -5, max: 100});
});
