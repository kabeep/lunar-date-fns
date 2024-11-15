import { BASE_DAY, BASE_MONTH, BASE_YEAR } from './constants';

/**
 * Returns the UTC timestamp of a base date, constructed using `BASE_YEAR`, `BASE_MONTH`, and `BASE_DAY`.
 * @returns {Date} The UTC timestamp of the 1900-01-31 00:00:00 (default).
 *
 * @example
 * // => -2206396800000 (for BASE_YEAR=1900, BASE_MONTH=1, BASE_DAY=31)
 * getBaseDate()
 */
function getBaseDate(): number {
    return Date.UTC(BASE_YEAR, BASE_MONTH - 1, BASE_DAY);
}

export default getBaseDate;
