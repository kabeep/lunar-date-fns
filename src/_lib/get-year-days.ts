import { BASE_YEAR, LUNAR_DATA } from './constants';
import getLeapMonth from './get-leap-month';
import getLeapMonthDays from './get-leap-month-days';

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
 */
function getYearDays(year: number): number {
    let sum = 348;
    const yearData = LUNAR_DATA[year - BASE_YEAR];
    for (let i = 0x80_00; i > 0x8; i >>= 1) {
        sum += yearData & i ? 1 : 0;
    }

    return sum + (getLeapMonth(year) ? getLeapMonthDays(year) : 0);
}

export default getYearDays;
