/**
 * hash helper function - only works on strings
 * Collisions will occur.
 * Two Strategies for Collisions
 * -Separate Chaining (multiple values at the index)
 *  -at each index in the array store values using a more sophisticated
 *   data structure (e.g. an array or linked list)
 *  -Allows storing multiple key-value pairs at the same index
 *  -Nested arrays but allows more storage than just the array length
 * 
 * -Linear Probing (one value at the index)
 *  -when a collision occurs search through the array for an empty 
 *   slot
 *  -bound to the array length
 * 
 */

function hash(key, arrayLength) {
    let total = 0;
    // prime helps prevent hashing collisions
    const PRIME_FOR_HASH = 31;
    // helps with big O by limiting the string length during the hash
    const MAX_STRING_LENGTH = 100;
    for (let i = 0; i < Math.min(key.length, MAX_STRING_LENGTH); i++) {
        // map a to 1, b to 2, c to 3 etc.
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME_FOR_HASH + value) % arrayLength;
    }
    return total;
}

module.exports = hash;