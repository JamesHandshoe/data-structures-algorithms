const perfTimerWithArgs = require('./perf-timer-args');

// Pattern used to keep track of a subset of data in an array / string

// O(n^2) implementation
const maxSubarraySlowSum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// O(n) implementation
const maxSubarrayFastSum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

const testArray = [2, 6, 9, 2, 1, 8, 5, 6, 3];
console.log(maxSubarraySlowSum(testArray, 3));
console.log(perfTimerWithArgs(testArray, null, maxSubarraySlowSum, 3));
console.log(maxSubarrayFastSum(testArray, 3));
console.log(perfTimerWithArgs(testArray, null, maxSubarrayFastSum, 3));