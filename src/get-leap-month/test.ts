import { type Assertion, describe, expect, it } from 'vitest';
import { getLeapMonth } from './index';

const expectFunction = (input?: unknown): Assertion => expect(getLeapMonth(input as number));

const testFunction = (year: number, expected: number) => {
    expectFunction(year).toBe(expected);
};

describe('Leap Year', () => {
    it.each([
        [2023, 2],
        [2025, 6],
    ])('%i -> %i', testFunction);
});

describe('Non-leap Year', () => {
    it.each([
        [2022, 0],
        [2024, 0],
    ])('%i -> %i', testFunction);
});

describe('Exception Case', () => {
    it('return 0 if the given year is invalid', () => {
        expectFunction(Number.NaN).toBe(0);
        expectFunction(null).toBe(0);
        expectFunction().toBe(0);
    });

    it('return 0 if the given year is out of boundary', () => {
        expectFunction(1899).toBe(0);
        expectFunction(2101).toBe(0);
    });
});
