import { type Assertion, describe, expect, it } from 'vitest';
import {
    BASE_DAY,
    BASE_MONTH,
    BASE_YEAR,
    MAXIMUM_LUNAR_DAY,
    MAXIMUM_LUNAR_MONTH,
    MAXIMUM_LUNAR_YEAR,
} from '../_lib/constants';
import { type LunarDate } from '../types';
import { toSolar } from './index';

const createVerifier = (year: number, month: number, day: number) => (value: Date | -1) => {
    return value !== -1 && year === value.getFullYear() && month === value.getMonth() + 1 && day === value.getDate();
};

const expectFunction = (input?: unknown): Assertion => expect(toSolar(input as LunarDate));

const testFunction = (lunarDate: LunarDate, year: number, month: number, day: number) => {
    expectFunction(lunarDate).toSatisfy(createVerifier(year, month, day));
};

describe('Beginning and end of lunar year', () => {
    it.each([
        [{ year: 1900, month: 1, day: 1, isLeapMonth: false }, 1900, 1, 31],
        [{ year: 1900, month: 12, day: 30, isLeapMonth: false }, 1901, 2, 18],
        [{ year: 2024, month: 1, day: 1, isLeapMonth: false }, 2024, 2, 10],
        [{ year: 2024, month: 12, day: 29, isLeapMonth: false }, 2025, 1, 28],
        [{ year: 2100, month: 1, day: 1, isLeapMonth: false }, 2100, 2, 9],
        [{ year: 2100, month: 12, day: 1, isLeapMonth: false }, 2100, 12, 31],
    ])('%o -> %i-%i-%i', testFunction);
});

describe('Lunar leap month', () => {
    it.each([
        [{ year: 2020, month: 4, day: 1, isLeapMonth: true }, 2020, 5, 23],
        [{ year: 2020, month: 4, day: 29, isLeapMonth: true }, 2020, 6, 20],
        [{ year: 2023, month: 2, day: 1, isLeapMonth: true }, 2023, 3, 22],
        [{ year: 2023, month: 2, day: 29, isLeapMonth: true }, 2023, 4, 19],
    ])('%o -> %i-%i-%i', testFunction);
});

describe('Meaningful lunar date of 29-day months and 30-day months', () => {
    it.each([
        [{ year: 2024, month: 12, day: 29, isLeapMonth: false }, 2025, 1, 28],
        [{ year: 2025, month: 1, day: 30, isLeapMonth: false }, 2025, 2, 27],
        [{ year: 2025, month: 7, day: 30, isLeapMonth: false }, 2025, 9, 21],
        [{ year: 2025, month: 8, day: 29, isLeapMonth: false }, 2025, 10, 20],
    ])('%o -> %i-%i-%i', testFunction);
});

describe('Exception Case', () => {
    it('return -1 if the given lunar date is out of boundary', () => {
        expectFunction({ year: BASE_YEAR, month: BASE_MONTH, day: BASE_DAY - 1, isLeapMonth: false }).toBe(-1);
        expectFunction({
            year: MAXIMUM_LUNAR_YEAR,
            month: MAXIMUM_LUNAR_MONTH,
            day: MAXIMUM_LUNAR_DAY + 1,
            isLeapMonth: false,
        }).toBe(-1);
    });

    it('return -1 if the given lunar date is incorrect', () => {
        // Not a leap month
        expectFunction({ year: 2025, month: 1, day: 1, isLeapMonth: true }).toBe(-1);
        // Is a 29-day leap month
        expectFunction({ year: 2025, month: 6, day: 30, isLeapMonth: true }).toBe(-1);
        // Is a 29-day month
        expectFunction({ year: 2024, month: 12, day: 30, isLeapMonth: false }).toBe(-1);
    });

    it('return -1 if the given lunar date is invalid', () => {
        expectFunction().toBe(-1);
        expectFunction({}).toBe(-1);
    });
});
