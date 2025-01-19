import {describe, it, expect} from 'vitest';
import { myParseInt } from '../conversion-functions.mjs';
//Unit test is AAA - Arranging / Act / Assertion
describe("myParseInt test suit", () => {
   it("reqular string with positive integer number", () => {
        const strNum = "12"; //Arranging
        const res = myParseInt(strNum) + 2; //Act
        expect(res).toBe(14); //Assertion
   }) ;
   it ("reqular string with negative integer number", () => {
    expect(myParseInt("-12")).toBe(-12);
   });
   it ("string with  number following +", () => {
    expect(myParseInt("+12")).toBe(12)
   });
   it ("undefined", () => {
    expect(myParseInt()).toBeNaN();
   });
   it ("null", () => {
    expect(myParseInt(null)).toBeNaN();
   });
   it ("float number inside a string", () => {
    expect(myParseInt("12.35")).toBe(12);
   });
   it("string beginning with the space", () => {
    expect(myParseInt(" 12")).toBe(12);
   }),
   it ("space in middle", () => {
    expect(myParseInt("12 35")).toBe(12);
   });
   it ("first symbol is not a number", () => {
    expect(myParseInt("a1")).toBeNaN()
   });
   it ("string begins from ++", () => {
    expect(myParseInt("++12")).toBeNaN()
   });
   it ("space following -", () => {
    expect(myParseInt("- 12")).toBeNaN();
   })
})