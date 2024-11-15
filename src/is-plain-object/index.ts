import baseGetTag from '../_lib/base-get-tag';

/**
 * Checks if the given value is a plain object. A plain object is an object created by `{}` or `new Object()`.
 * It doesn't check for instances of classes or other objects created via constructors.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a plain object, otherwise false.
 *
 * @example
 * // => true
 * isPlainObject({})
 *
 * @example
 * // => true
 * isPlainObject(new Object())
 *
 * @example
 * // => false
 * isPlainObject([])
 *
 * @example
 * // => false
 * isPlainObject(new Map())
 */
export function isPlainObject<T extends Record<string, unknown> = Record<string, unknown>>(value: any): value is T {
    if (baseGetTag(value) !== '[object Object]') {
        return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const constructor = Object.hasOwn(proto as Record<string, unknown>, 'constructor') && proto.constructor;
    return (
        typeof constructor === 'function' &&
        constructor instanceof constructor &&
        Function.prototype.toString.call(Object) === Function.prototype.toString.call(constructor)
    );
}
