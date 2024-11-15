import { expect, it } from 'vitest';
import { isValidDate } from './index';

it('returns true if the given value is a date object', () => {
    expect(isValidDate(new Date())).toBe(true);
});

it('returns false if the given value is an invalid Date', () => {
    expect(isValidDate(new Date(Number.NaN))).toBe(false);
});
