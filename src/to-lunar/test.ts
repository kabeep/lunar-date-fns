import { type Assertion, describe, expect, it } from 'vitest';
import { BASE_DAY, BASE_MONTH, BASE_YEAR, MAXIMUM_YEAR } from '../constants';
import { type LunarDate } from '../types';
import { toLunar } from './index';

const expectFunction = (input?: unknown): Assertion => expect(toLunar(input as Date));

const testFunction = (year: number, month: number, day: number, expected: LunarDate | -1) => {
    expectFunction(new Date(year, month - 1, day)).toStrictEqual(expected);
};

describe('Beginning and end of solar year', () => {
    it.each([
        [1900, 1, 31, { year: 1900, month: 1, day: 1, isLeapMonth: false }],
        [1900, 12, 31, { year: 1900, month: 11, day: 10, isLeapMonth: false }],
        [2024, 1, 1, { year: 2023, month: 11, day: 20, isLeapMonth: false }],
        [2024, 12, 31, { year: 2024, month: 12, day: 1, isLeapMonth: false }],
        [2100, 1, 1, { year: 2099, month: 11, day: 21, isLeapMonth: false }],
        [2100, 12, 31, { year: 2100, month: 12, day: 1, isLeapMonth: false }],
    ])('%i-%i-%i -> %o', testFunction);
});

describe('Lunar leap month', () => {
    it.each([
        [2020, 5, 23, { year: 2020, month: 4, day: 1, isLeapMonth: true }],
        [2020, 6, 20, { year: 2020, month: 4, day: 29, isLeapMonth: true }],
        [2023, 3, 22, { year: 2023, month: 2, day: 1, isLeapMonth: true }],
        [2023, 4, 19, { year: 2023, month: 2, day: 29, isLeapMonth: true }],
    ])('%i-%i-%i -> %o', testFunction);
});

describe('Solar leap month', () => {
    it.each([
        [2024, 2, 29, { year: 2024, month: 1, day: 20, isLeapMonth: false }],
        [2028, 2, 29, { year: 2028, month: 2, day: 5, isLeapMonth: false }],
    ])('%i-%i-%i -> %o', testFunction);
});

describe('Exception Case', () => {
    it.each([
        [BASE_YEAR, BASE_MONTH, BASE_DAY - 1, -1],
        [MAXIMUM_YEAR + 1, 1, 1, -1],
    ] as const)('return -1 because %i-%i-%i is out of boundary', testFunction);

    it('return -1 if the given date is invalid', () => {
        expectFunction().toBe(-1);
        expectFunction({}).toBe(-1);
    });
});
