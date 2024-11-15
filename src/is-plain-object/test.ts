import { expect, it } from 'vitest';
import { isPlainObject } from './index';

it('returns true if the given value is a plain object', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ key: 'value' })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true); // Null prototype
});

it('returns false if the given value is not a plain object', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    // eslint-disable-next-line prefer-regex-literals
    expect(isPlainObject(new RegExp(''))).toBe(false);
    expect(isPlainObject(() => true)).toBe(false);
    expect(isPlainObject(42)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
});
