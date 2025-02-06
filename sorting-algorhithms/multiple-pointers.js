const perfTimer = require('./perf-timer');

const testArray1 = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
const testArray2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// way to work through a sorted array
// this implementation is to look for a pair of numbers that returns 0 when combined

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // get sum of first index and last index initially
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            // shift test values on the end of the array left one
            right--;
        } else {
            // shift test values at the beginning of the array right one
            left++;
        }
    }
}

console.log(sumZero(testArray1));
console.log(perfTimer(testArray1, null, sumZero));

// Not using multiple pointers
const countUniqueValues = (arr) => {
    if (!arr.length) {
        return 0;
    }
    const uniqueValues = [];
    arr.forEach(value => {
        if (uniqueValues.indexOf(value) === -1) {
            uniqueValues.push(value);
        }
    });
    return uniqueValues.length;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues(testArray2));
console.log(countUniqueValues([]));
console.log('not mp performance');
console.log(perfTimer(testArray2, null, countUniqueValues));

const countUniqueValuesMP = (arr) => {
    if (!arr.length) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValuesMP([1,1,1,1,1,2]));
console.log(countUniqueValuesMP(testArray2));
console.log(countUniqueValuesMP([]));
console.log('MP Performance');
console.log(perfTimer(testArray2, null, countUniqueValuesMP));