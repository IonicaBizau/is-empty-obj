"use strict";

/**
 * isEmptyObj
 * Check if an object is empty or not. This will throw if you don't pass an object.
 *
 * @name isEmptyObj
 * @function
 * @param {Object|Array} input The input object.
 * @return {Boolean} `true` if the object doesn't have any keys. `false` otherwise.
 */
module.exports = function isEmptyObj (input) {
    if (typeof input === "object" && input !== null) {
        return Object.keys(input).length === 0;
    }
    throw new TypeError("Please provide an object.");
};
