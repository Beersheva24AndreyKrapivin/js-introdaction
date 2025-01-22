import { describe, it, expect, test } from 'vitest';
import { getOccurencesObject } from '../objects.mjs';

describe("getOccurencesObject", () => {
    it("string 'abcadab' should return '{a: 3, b: 2, c: 1, d: 1}'", () => {
        expect(getOccurencesObject("abcadab")).toEqual({a: 3, b: 2, c: 1, d: 1});
    })
    it("number 123451 should return '{1: 2, 2: 1, 3: 1, 4: 1, 5: 1}'", () => {
        expect(getOccurencesObject(123451)).toEqual({1: 2, 2: 1, 3: 1, 4: 1, 5: 1});
    })
    it("null should return '{}'", () => {
        expect(getOccurencesObject(null)).toEqual({});
    })
    it("empty string should return '{}'", () => {
        expect(getOccurencesObject("")).toEqual({});
    })
    it("number 0 should return '{0: 1}'", () => {
        expect(getOccurencesObject(0)).toEqual({0: 1});
    })
})

test("getOccurencesObject with destucturing", () => {
    const str = "aaabgbgc";
    let {a, b, g, c} = getOccurencesObject(str);
    expect(a).toBe(3);
    expect(b).toBe(2);
    expect(g).toBe(2);
    expect(c).toBe(1);
})
test("string with digits, spaces and hyphens", () => {
    const str = "1,d-     ";
    const res = getOccurencesObject(str);
    expect(res.d).toBe(1);
    expect(res[1]).toBe(1);
    expect(res[' ']).toBe(5);
})
test("test for object as key inside another object", () => {
    const x = {x:5};
    x.toString = function() {
        return `x:${this.x}`; //"x:" + this.x;
    };
    const y = {y:10};
    const obj1 = {};
    obj1[x] = 200;
    const obj2 = obj1;
    obj2[y] = 300;
    expect(obj2[x]).toBe(200);
    expect(obj1["[object Object]"]).toBe(300);
    expect(obj1[{z:100}]).toBe(300);
    console.log("printing object using log", x);
    console.log("printing object using method toString", x.toString());

})
