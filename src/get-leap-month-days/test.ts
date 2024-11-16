import { type Assertion, describe, expect, it } from 'vitest';
import { getLeapMonthDays } from './index';

const expectFunction = (input?: unknown): Assertion => expect(getLeapMonthDays(input as number));

const testFunction = (year: number, expected: number) => {
    expectFunction(year).toBe(expected);
};

describe('Leap Month', () => {
    it.each([
        [2023, 29],
        [2025, 29],
    ])('%i -> %i', testFunction);
});

describe('Non-leap Month', () => {
    it.each([
        [2024, 0],
        [2026, 0],
    ])('%i -> %i', testFunction);
});

describe('Exception Case', () => {
    it('return 0 if the given year is invalid', () => {
        expectFunction().toBe(0);
        expectFunction(null).toBe(0);
        expectFunction(Number.NaN).toBe(0);
    });

    it('return 0 if the given year is out of boundary', () => {
        expectFunction(1899).toBe(0);
        expectFunction(2101).toBe(0);
    });
});
