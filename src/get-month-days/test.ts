import { type Assertion, describe, expect, it } from 'vitest';
import { getMonthDays } from './index';

const expectFunction = (year?: unknown, month?: unknown): Assertion =>
    expect(getMonthDays(year as number, month as number));

const testFunction = (year: number, month: number, expected: number) => {
    expectFunction(year, month).toBe(expected);
};

describe('Non-leap Month', () => {
    it.each([
        [2024, 1, 29],
        [2025, 1, 30],
        [2026, 1, 30],
    ])('%i-%i -> %i', testFunction);
});

describe('Exception Case', () => {
    it('return -1 if the given year is invalid', () => {
        expectFunction().toBe(-1);
        expectFunction(null).toBe(-1);
        expectFunction({}).toBe(-1);
        expectFunction(Number.NaN, Number.NaN).toBe(-1);
    });

    it('return -1 if the given year is out of boundary', () => {
        expectFunction(1899).toBe(-1);
        expectFunction(2101).toBe(-1);
    });
});
