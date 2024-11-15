/**
 * Returns true if the given value is an instance of Date.
 * @param {*} value - The value to check
 * @returns {boolean} True if the given value is a date
 *
 * @example
 * isDate(new Date())
 * //=> true
 *
 * @example
 * // => true
 * isDate(new Date(NaN))
 *
 * @example
 * // => false
 * isDate('2014-02-31')
 *
 * @example
 * // => false
 * isDate({})
 */
export function isDate(value: unknown): value is Date {
    return (
        value instanceof Date ||
        (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]')
    );
}
