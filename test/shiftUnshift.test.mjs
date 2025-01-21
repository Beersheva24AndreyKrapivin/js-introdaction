import { describe, it, expect } from 'vitest';
import { stringShift, stringUnshift } from '../conversion-functions.mjs';

describe("Shift - unshift test cases", () => {
    it("big shifting and unshifting test for undefind", () => {
        let source = "null";
        const shift = 100_000_000;
        const shiftedSource = stringShift(source, shift);
        const unshiftedSource = stringUnshift(shiftedSource, shift);
        expect(unshiftedSource).toBe("null");
    })
    it("shift is a string containig number", () => {
        expect(stringShift(123, "1")).toBe("234");
    })
    it("alternative flow for shift negative", () => {
        expect(stringShift("123", -4)).toBe("123");
    })
    it("alternative flow for shift is not a number", () => {
        expect(stringShift("123", "ab")).toBe("123");
        expect(stringShift("123", NaN)).toBe("123");
        expect(stringShift("123",)).toBe("123");
    })
    it("shifting number", () => {
        expect(parseInt(stringShift(123, 1))).toBe(234);
    })
    it("shifting undefined", () => {
        expect(stringUnshift(undefined, 1)).toBeUndefined();
    })
    it("shift null", () => {
        expect(stringShift(null, 1)).toBeNull();
    })
})