import { expect, it } from 'vitest';
import { isDate } from './index';

it('returns true if the given value is a date object', () => {
    expect(isDate(new Date())).toBe(true);
});

it('returns true if the given value is an Invalid Date', () => {
    expect(isDate(new Date(Number.NaN))).toBe(true);
});

it('returns false if the given value is not a date object', () => {
    expect(isDate(Date.now())).toBe(false);
    expect(isDate(new Date().toISOString())).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(0)).toBe(false);
});
