import { expect, it } from 'vitest';
import { BASE_DAY, BASE_MONTH, BASE_YEAR, MAXIMUM_YEAR } from '../_lib/constants';
import { isValidSolar } from './index';

it('return true if the given value is a meaningful date', () => {
    expect(isValidSolar(new Date())).toBe(true);
});

it('return false if the given value is a unmeaning date', () => {
    expect(isValidSolar(new Date(BASE_YEAR, BASE_MONTH - 1, BASE_DAY - 1))).toBe(false);
    expect(isValidSolar(new Date(MAXIMUM_YEAR + 1, 0, 1))).toBe(false);
});
