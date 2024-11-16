import getBaseDate from '../_lib/get-base-date';
import { MAXIMUM_YEAR } from '../constants';
import { isValidDate } from '../is-valid-date';
import { toGMTDate } from '../to-gmt-date';

/**
 * Checks if a given date is a valid solar date within the range from January 31, 1900 to December 31, 2100. This
 * function first ensures that the date is a valid `Date` object and then checks whether it falls within the specified
 * range.
 * @param {*} date - The value to check.
 * @returns {boolean} True if the date is a valid solar date, otherwise false.
 *
 * @example
 * // => true
 * isValidSolar(new Date('2025-01-1T00:00:00Z'))
 *
 * @example
 * // => false
 * isValidSolar(new Date('1900-01-30T00:00:00Z'))
 *
 * @example
 * // => false
 * isValidSolar(new Date('2101-01-01T00:00:00Z'))
 */
export function isValidSolar(date: unknown): date is Date {
    if (!isValidDate(date)) return false;

    const baseDate = getBaseDate();
    const targetDate = toGMTDate(date).getTime();
    const maximumDate = Date.UTC(MAXIMUM_YEAR, 11, 31);

    // Interval [1900-01-31, 2101-01-01)
    return targetDate >= baseDate && targetDate <= maximumDate;
}
