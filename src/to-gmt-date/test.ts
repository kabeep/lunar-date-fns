import { expect, it } from 'vitest';
import { toGMTDate } from './index';

it('returns GMT Date if the given value is a date object in other timezones', () => {
    expect(toGMTDate(new Date('2024-01-01 00:00:00.000-08:00'))).toStrictEqual(new Date('2024-01-01 00:00:00.000Z'));
});
