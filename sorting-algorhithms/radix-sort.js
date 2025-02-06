// helper method to extract the digit from a number 
// in a specific position
// numbers are different than strings
function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

// helper method to determine the length of number
function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let mostDigits = 0;
    arr.forEach(num => {
        mostDigits = Math.max(mostDigits, digitCount(num));
    });
    return mostDigits;
}

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(radixSort([23, 345, 5678, 12, 2345, 9876]));


