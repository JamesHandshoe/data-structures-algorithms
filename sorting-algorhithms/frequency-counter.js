const perfTimer = require('./perf-timer');

// This implementation is O(n^2)
// as the inputs of same grow, so does
// the nested indexOf (loops through arr2 while looping through arr1)

// INITIAL solution
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    arr1.forEach((item) => {
        const correctIndex = arr2.indexOf(item ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.slice(correctIndex, 1);
    });
    return true;
}

const testArr1 = [1, 2, 3, 2];
const testArr2 = [9, 1, 4, 4];

console.log(same(testArr1, testArr2));

// REFACTORED solution

// This implementation is O(n^2)
// as the inputs of same grow, so does
// the nested indexOf (loops through arr2 while looping through arr1)

const sameRefactored = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const freqCounter1 = {};
    const freqCounter2 = {};
    
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    for (let key in freqCounter1) {
        // check the value
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        // check the frequency
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    return true;
}
console.log(sameRefactored(testArr1, testArr2));
console.log(perfTimer(testArr1, testArr2, same));

console.log(perfTimer(testArr1, testArr2, sameRefactored));
