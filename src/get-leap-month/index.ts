import { BASE_YEAR, LUNAR_DATA } from '../_lib/constants';

/**
 * Return the lunar leap month in the year otherwise return 0
 * @param {number} year - lunar year
 * @returns {number} Leap month in a lunar year
 *
 * @example
 * // => 3
 * getLeapMonth(2023)
 *
 * @example
 * // => 0
 * getLeapMonth(2024)
 */
export function getLeapMonth(year: number): number {
    return LUNAR_DATA[year - BASE_YEAR] & 0xf;
}
