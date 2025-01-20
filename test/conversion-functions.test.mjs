import { describe, it, expect, test } from 'vitest';
import { myParseInt, myToStringFromIntNumber, myParseIntRadix } from '../conversion-functions.mjs';
test("standart parseInt method with some wrong value", () => {
    expect(parseInt(10, 1)).toBeNaN();
})
test("standart parseInt method with out radix", () => {
    expect(parseInt(10)).toBe(10);
})
test("standart parseInt method with radix equaled null", () => {
    expect(parseInt(10, null)).toBeNaN;
})
describe("myParseIntRadix test suit", () => {
    it("myParseIntRadix test suit", () => {
        expect(myParseIntRadix("10", 10)).toBe(10);
        expect(myParseIntRadix("f", 36)).toBe(15);
        expect(myParseIntRadix("z", 36)).toBe(35);
        expect(myParseIntRadix("3", 2)).toBeNaN;
        expect(myParseIntRadix("1010", 2)).toBe(10);
    })
})
test("swap primitives", () => {
    let a = 10;
    let b = 20;
    [a, b] = [b, a];
    expect(a).toBe(20);
    expect(b).toBe(10);
})
describe("equal operators", () => {
    it("simple equality operator ==", () => {
        expect(12 == '12').toBeTruthy();
    })
    it("strong equlity operator ===", () => {
        expect(12 === '12').toBeFalsy();
    })
})
//Unit test is AAA - Arranging / Act / Assertion
describe("myParseInt test suit", () => {
    it("parameter is number 0", () => {
        expect(myParseInt(0)).toBe(parseInt(0));
    })
    it("parameter is object of class number", () => {
        expect(myParseInt(new Number(3))).toBe(parseInt(new Number(3)));
    })
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
