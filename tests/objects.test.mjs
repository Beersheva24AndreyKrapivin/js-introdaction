import { describe, it, expect } from 'vitest';
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
})