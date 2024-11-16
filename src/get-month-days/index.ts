import { BASE_YEAR, LUNAR_DATA, MAXIMUM_LUNAR_YEAR } from '../_lib/constants';

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
 *
 * @example
 * // => -1
 * getLeapMonth(1899, 13)
 */
export function getMonthDays(year: number, month: number): number {
    if (!year || year < BASE_YEAR || year > MAXIMUM_LUNAR_YEAR || !month || month > 12 || month < 1) {
        return -1;
    }

    return LUNAR_DATA[year - BASE_YEAR] & (0x1_00_00 >> month) ? 30 : 29;
}
