import { BASE_YEAR, LUNAR_DATA, MAXIMUM_LUNAR_YEAR } from '../constants';
import { getLeapMonth } from '../get-leap-month';
import { getLeapMonthDays } from '../get-leap-month-days';

/**
 * Return the number of days in this lunar year
 * @param {number} year - lunar year
 * @returns {number} Days in lunar year
 *
 * @example
 * // => 354
 * getYearDays(2024)
 *
 * @example
 * // => 384
 * getYearDays(2025)
 *
 * @example
 * // => -1
 * getYearDays(1899)
 */
export function getYearDays(year: number): number {
    if (!year || year < BASE_YEAR || year > MAXIMUM_LUNAR_YEAR) return -1;

    let sum = 348;
    const yearData = LUNAR_DATA[year - BASE_YEAR];
    for (let i = 0x80_00; i > 0x8; i >>= 1) {
        sum += yearData & i ? 1 : 0;
    }

    return sum + (getLeapMonth(year) ? getLeapMonthDays(year) : 0);
}
