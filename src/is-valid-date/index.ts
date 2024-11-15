import { isDate } from '../is-date';

/**
 * Checks if the given value is a valid Date object. A valid date is an instance of `Date` and has a non-NaN time value.
 * @param {*} date - The value to check.
 * @returns {boolean} True if the value is a valid Date, otherwise false.
 *
 * @example
 * // => true
 * isValidDate(new Date())
 *
 * @example
 * // => false
 * isValidDate(new Date(NaN))
 *
 * @example
 * // => false
 * isValidDate('2014-02-31')
 */
export function isValidDate(date: unknown): date is Date {
    return isDate(date) && !Number.isNaN(date.getTime());
}
