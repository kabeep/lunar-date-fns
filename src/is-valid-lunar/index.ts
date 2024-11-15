import { BASE_MONTH, BASE_YEAR, MAXIMUM_LUNAR_DAY, MAXIMUM_LUNAR_MONTH, MAXIMUM_LUNAR_YEAR } from '../_lib/constants';
import getLeapMonth from '../_lib/get-leap-month';
import getLeapMonthDays from '../_lib/get-leap-month-days';
import getMonthDays from '../_lib/get-month-days';
import { isPlainObject } from '../is-plain-object';
import type { LunarDate } from '../types';

/**
 * Checks if a given lunar date is valid. A lunar date consists of a year, month, and day, and optionally a leap month
 * flag. This function ensures that the lunar date is an object with valid year, month, and day values, and that the
 * date falls within the valid lunar calendar range.
 * @param {*} lunar - The lunar date to check. It should be an object with properties `year`, `month`, `day`, and
 *     optionally `isLeapMonth`.
 * @returns {boolean} True if the lunar date is valid, otherwise false.
 *
 * @example
 * // => true
 * isValidLunar({ year: 2024, month: 1, day: 1 })
 *
 * @example
 * // => true
 * isValidLunar({ year: 2024, month: 1, day: 1, isLeapMonth: false })
 *
 * @example
 * // => false
 * isValidLunar({ year: 2025, month: 1 })
 *
 * @example
 * // => false
 * isValidLunar({ year: 2100, month: 12, day: 2 })
 */
export function isValidLunar(lunar: unknown): lunar is LunarDate {
    if (
        !isPlainObject<Partial<LunarDate>>(lunar) ||
        typeof lunar.year !== 'number' ||
        typeof lunar.month !== 'number' ||
        typeof lunar.day !== 'number' ||
        lunar.month < 0 ||
        lunar.day <= 0
    ) {
        return false;
    }

    const isLeapMonth = Boolean(lunar.isLeapMonth);
    if (
        (isLeapMonth && getLeapMonth(lunar.year) !== lunar.month) ||
        lunar.day > (isLeapMonth ? getLeapMonthDays(lunar.year) : getMonthDays(lunar.year, lunar.month))
    ) {
        return false;
    }

    const baseDate = Date.UTC(BASE_YEAR, BASE_MONTH - 1, 1);
    const targetDate = Date.UTC(lunar.year, lunar.month - 1, lunar.day);
    const maximumDate = Date.UTC(MAXIMUM_LUNAR_YEAR, MAXIMUM_LUNAR_MONTH - 1, MAXIMUM_LUNAR_DAY);

    // Interval [1900-01-01, 2100-12-1]
    return targetDate >= baseDate && targetDate <= maximumDate;
}
