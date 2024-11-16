import getBaseDate from '../_lib/get-base-date';
import { BASE_YEAR, MAXIMUM_YEAR } from '../constants';
import { getLeapMonth } from '../get-leap-month';
import { getLeapMonthDays } from '../get-leap-month-days';
import { getMonthDays } from '../get-month-days';
import { getYearDays } from '../get-year-days';
import { isValidSolar } from '../is-valid-solar';
import { toGMTDate } from '../to-gmt-date';
import type { LunarDate } from '../types';

/**
 * Converts a given solar (Gregorian) date to a lunar (Chinese) date. The function calculates the corresponding lunar
 * year, month, day, and whether the month is a leap month. If the solar date is invalid or out of range, it returns
 * -1.
 * @param {Date} date - The solar date to convert. It should be a valid JavaScript `Date` object.
 * @returns {LunarDate | -1} A LunarDate object representing the corresponding lunar date, or -1 if the solar date is
 *     invalid.
 *
 * @example
 * // => { year: 2024, month: 2, day: 10, isLeapMonth: false }
 * toLunar(new Date('2024-01-01'))
 *
 * @example
 * // => -1
 * toLunar(new Date('1900-01-30'))
 *
 * @example
 * // => -1
 * toLunar(new Date('2101-01-01'))
 */
export function toLunar(date: Date): LunarDate | -1 {
    if (!isValidSolar(date)) return -1;

    const baseDate = getBaseDate();
    const targetDate = toGMTDate(date).getTime();

    let offset = Math.floor((targetDate - baseDate) / 86_400_000);

    let year: number;
    let month: number;
    let isLeapMonth = false;

    let yearDays = 0;
    for (year = BASE_YEAR; year <= MAXIMUM_YEAR && offset > 0; year++) {
        yearDays = getYearDays(year);
        offset -= yearDays;
    }

    if (offset < 0 && year--) offset += yearDays;

    const leapMonth = getLeapMonth(year);

    let monthDays = 0;
    for (month = 1; month < 13 && offset > 0; month++) {
        if (leapMonth > 0 && month === leapMonth + 1 && !isLeapMonth) {
            monthDays = getLeapMonthDays(year);
            isLeapMonth = Boolean(month--);
        } else {
            monthDays = getMonthDays(year, month);
        }

        if (isLeapMonth && month === leapMonth + 1) isLeapMonth = false;

        offset -= monthDays;
    }

    if (offset === 0 && leapMonth > 0 && month === leapMonth + 1) {
        isLeapMonth = !isLeapMonth && Boolean(month--);
    }

    if (offset < 0 && month--) offset += monthDays;

    const day = offset + 1;

    return { year, month, day, isLeapMonth };
}
