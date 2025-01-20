import { describe, it, expect, test } from 'vitest';
import { myParseInt, myToStringFromIntNumber } from '../conversion-functions.mjs';
//Unit test is AAA - Arranging / Act / Assertion
describe("myParseInt test suit", () => {
    it("reqular string with positive integer number", () => {
        const strNum = "12"; //Arranging
        const res = myParseInt(strNum) + 2; //Act
        expect(res).toBe(14); //Assertion
    });
    it("reqular string with negative integer number", () => {
        expect(myParseInt("-12")).toBe(-12);
    });
    it("string with  number following +", () => {
        expect(myParseInt("+12")).toBe(12)
    });
    it("undefined", () => {
        expect(myParseInt()).toBeNaN();
    });
    it("null", () => {
        expect(myParseInt(null)).toBeNaN();
    });
    it("float number inside a string", () => {
        expect(myParseInt("12.35")).toBe(12);
    });
    it("string beginning with the space", () => {
        expect(myParseInt(" 12")).toBe(12);
    }),
        it("space in middle", () => {
            expect(myParseInt("12 35")).toBe(12);
        });
    it("first symbol is not a number", () => {
        expect(myParseInt("a1")).toBeNaN()
    });
    it("string begins from ++", () => {
        expect(myParseInt("++12")).toBeNaN()
    });
    it("space following -", () => {
        expect(myParseInt("- 12")).toBeNaN();
    })
})

describe("myToStringFromIntNumber test suit", () => {
    it("reqular string with negative integer number", () => {
        expect(myToStringFromIntNumber(12.35)).toBe("12");
    });
    it("reqular string with negative integer number", () => {
        expect(myToStringFromIntNumber("12.35")).toBe("12");
    });
    it("string with  number following +", () => {
        expect(myToStringFromIntNumber()).toBe("")
    });
    it("undefined", () => {
        expect(myToStringFromIntNumber(-12)).toBe("-12");
    });
    it("undefined", () => {
        expect(myToStringFromIntNumber("-12")).toBe("-12");
    });
    it("null", () => {
        expect(myToStringFromIntNumber("+12")).toBe("12");
    });
    it("float number inside a string", () => {
        expect(myToStringFromIntNumber(+12)).toBe("12");
    });
    it("float number inside a string", () => {
        expect(myToStringFromIntNumber("a1")).toBe("");
    });
    it("float number inside a string", () => {
        expect(myToStringFromIntNumber("1a")).toBe("1");
    });
})

describe ("equal operators", () => {
    it("simple equality operator ==", () => {
        expect(12 == '12').toBeTruthy();
    })
    it("strong equlity operator ===", () => {
        expect(12 === '12').toBeFalsy();
    })
})