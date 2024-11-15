import { BASE_YEAR } from '../_lib/constants';
import getBaseDate from '../_lib/get-base-date';
import getLeapMonth from '../_lib/get-leap-month';
import getLeapMonthDays from '../_lib/get-leap-month-days';
import getMonthDays from '../_lib/get-month-days';
import getYearDays from '../_lib/get-year-days';
import { isValidLunar } from '../is-valid-lunar';
import type { LunarDate, Optionalize } from '../types';

/**
 * Converts a given lunar date to a solar (Gregorian) date. The function calculates the corresponding solar year,
 * month, and day from the lunar date. If the lunar date is invalid or out of range, it returns -1.
 * @param {LunarDate} lunar - The lunar date object to convert. It should be a valid `LunarDate` object.
 * @returns {Date | -1} A `Date` object representing the corresponding solar date, or -1 if the lunar date is invalid.
 *
 * @example
 * // => 2025-01-30T00:00:00.000Z
 * toSolar({ year: 2025, month: 1, day: 30, isLeapMonth: false })
 *
 * @example
 * // => -1
 * toSolar({ year: 1900, month: 1, day: 30, isLeapMonth: false })
 */
export function toSolar(lunar: Optionalize<LunarDate, 'isLeapMonth'>): Date | -1 {
    if (!isValidLunar(lunar)) return -1;

    let offset = 0;
    let isLeapProcessed = false;
    const leapMonth = getLeapMonth(lunar.year);

    for (let year = BASE_YEAR; year < lunar.year; year++) {
        offset += getYearDays(year);
    }

    for (let month = 1; month < lunar.month; month++) {
        offset += getMonthDays(lunar.year, month);

        if (!isLeapProcessed && leapMonth <= month && leapMonth > 0) {
            offset += getLeapMonthDays(lunar.year);
            isLeapProcessed = true;
        }
    }

    if (leapMonth === lunar.month) {
        offset += getMonthDays(lunar.year, lunar.month);
    }

    offset += lunar.day - 1;

    const baseDate = getBaseDate();
    const timezoneOffset = new Date().getTimezoneOffset() * 60_000;

    return new Date(baseDate + offset * 86_400_000 + timezoneOffset);
}
