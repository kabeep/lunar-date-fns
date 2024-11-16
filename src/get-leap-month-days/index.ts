import { BASE_YEAR, LUNAR_DATA } from '../_lib/constants';
import { getLeapMonth } from '../get-leap-month';

/**
 * Returns days in a lunar leap month if there is a leap month in the year otherwise return 0
 * @param {number} year - lunar year
 * @returns {number} Days in lunar leap month
 *
 * @example
 * // => 29
 * getLeapMonthDays(2023)
 *
 * @example
 * // => 0
 * getLeapMonthDays(2024)
 */
export function getLeapMonthDays(year: number): number {
    if (!getLeapMonth(year)) return 0;

    return LUNAR_DATA[year - BASE_YEAR] & 0x1_00_00 ? 30 : 29;
}
