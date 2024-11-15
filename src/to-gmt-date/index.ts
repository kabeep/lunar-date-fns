/**
 * Converts a given `Date` object to a GMT date, removing any time information. This function sets the time to
 * `00:00:00` UTC for the specified date, effectively stripping off the time part.
 * @param {Date} date - The `Date` object to convert.
 * @returns {Date} A new `Date` object representing the same day in GMT with the time set to `00:00:00`.
 *
 * @example
 * // => Date representing '2024-01-01T00:00:00.000Z'
 * toGMTDate(new Date('2024-01-01T00:00:00.000Z+08:00'))
 *
 * @example
 * // => Date representing '2024-01-01T00:00:00.000Z'
 * toGMTDate(new Date('2024-01-01T00:00:00.000Z-08:00'))
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function toGMTDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}
