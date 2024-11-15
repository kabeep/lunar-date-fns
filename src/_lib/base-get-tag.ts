type TypeTag =
    | '[object Array]'
    | '[object ArrayBuffer]'
    | '[object AsyncFunction]'
    | '[object Boolean]'
    | '[object Date]'
    | '[object Error]'
    | '[object Function]'
    | '[object GeneratorFunction]'
    | '[object Map]'
    | '[object Null]'
    | '[object Number]'
    | '[object Object]'
    | '[object RegExp]'
    | '[object Set]'
    | '[object String]'
    | '[object Symbol]'
    | '[object Undefined]'
    | '[object WeakMap]'
    | '[object WeakSet]';

/**
 * @description Returns the internal `[[Class]]` tag of the given value.
 * This function is useful for determining the type of a value, including built-in types like `Array`, `Map`, `Set`,
 *     etc.
 * @param value - The value to check.
 * @returns The internal `[[Class]]` tag of the value, one of the predefined `TypeTag` strings.
 *
 * @example
 * // => '[object Array]'
 * baseGetTag([])
 *
 * @example
 * // => '[object Map]'
 * baseGetTag(new Map())
 *
 * @example
 * // => '[object Number]'
 * baseGetTag(42)
 */
function baseGetTag(value: any): TypeTag {
    return Object.prototype.toString.call(value) as TypeTag;
}

export default baseGetTag;
