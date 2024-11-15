import { BASE_YEAR, LUNAR_DATA } from './constants';

/**
 * Returns the number of days in a non-leap month of lunar
 * @param {number} year - lunar year
 * @param {number} month - lunar month
 * @returns {number} Days in lunar non-leap month
 *
 * @example
 * // => 29
 * getLeapMonth(2024, 12)
 *
 * @example
 * // => 30
 * getLeapMonth(2025, 1)
 */
function getMonthDays(year: number, month: number): number {
    return LUNAR_DATA[year - BASE_YEAR] & (0x1_00_00 >> month) ? 30 : 29;
}

export default getMonthDays;
