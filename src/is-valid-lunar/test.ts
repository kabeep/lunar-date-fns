import { expect, it } from 'vitest';
import { BASE_YEAR, MAXIMUM_LUNAR_DAY, MAXIMUM_LUNAR_MONTH, MAXIMUM_LUNAR_YEAR } from '../constants';
import { isValidLunar } from './index';

it('return true if the given value is a meaningful lunar date', () => {
    expect(isValidLunar({ year: 2024, month: 1, day: 1, isLeapMonth: false })).toBe(true);
});

it('return false if the given value is a unmeaning lunar date', () => {
    expect(isValidLunar({ year: BASE_YEAR - 1, month: 12, day: 29, isLeapMonth: false })).toBe(false);
    expect(
        isValidLunar({
            year: MAXIMUM_LUNAR_YEAR,
            month: MAXIMUM_LUNAR_MONTH,
            day: MAXIMUM_LUNAR_DAY + 1,
            isLeapMonth: false,
        }),
    ).toBe(false);
});

it('return false if the given value is an invalid lunar date', () => {
    expect(isValidLunar({ year: 1900, month: 1 })).toBe(false);
    expect(isValidLunar({})).toBe(false);
    expect(isValidLunar(null)).toBe(false);
    expect(isValidLunar(undefined)).toBe(false);
    expect(isValidLunar(0)).toBe(false);
});
