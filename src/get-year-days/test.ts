import { type Assertion, describe, expect, it } from 'vitest';
import { getYearDays } from './index';

const expectFunction = (year?: unknown): Assertion => expect(getYearDays(year as number));

const testFunction = (year: number, expected: number) => {
    expectFunction(year).toBe(expected);
};

describe('Leap Year', () => {
    it.each([
        [2023, 384],
        [2025, 384],
    ])('%i -> %i', testFunction);
});

describe('Non-leap Year', () => {
    it.each([
        [2024, 354],
        [2026, 354],
    ])('%i -> %i', testFunction);
});

describe('Exception Case', () => {
    it('return -1 if the given year is invalid', () => {
        expectFunction().toBe(-1);
        expectFunction(null).toBe(-1);
        expectFunction(Number.NaN).toBe(-1);
    });

    it('return -1 if the given year is out of boundary', () => {
        expectFunction(1899).toBe(-1);
        expectFunction(2101).toBe(-1);
    });
});
