// helper methods
const swapArrayPositions = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

// linear search
// accept an array and a value
// if the value is in the array return index of value
// if not - return -1
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
// linearSearch([10, 15, 20, 25, 30], 15)
console.log(linearSearch([10, 15, 20, 25, 30], 15));

// binary search is a divide and conquer algorithm
// it looks for the value in the middle of a sorted array
// if it isn't the number then it moves the end or start
// so that a new middle is established.
// **ONLY WORKS WITH SORTED ARRAYS
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== value && start <= end) {
        if(value < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5], 6));

// String Search
// search for a substring in a much larger string
// example: wowomgzomg larger string and omg substring
function subStringSearch(str, subStr) {
    let subStrCount = 0;
    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]);
        for (let j = 0; j < subStr.length; j++) {
            //console.log(subStr[j]);
            if (subStr[j] !== str[i + j]) {
                break;
            }

            if (j === subStr.length - 1) {
                subStrCount++;
            }
        }
    }
    return subStrCount;
}

// naive implementation of bubble sort
// O(n^2) Big O notation
function bubbleSortNaive(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortNaiveWithHelper(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swapArrayPositions(arr, j, j + 1);
        }
      }
    }
    return arr;
}

// Big O Notation O(n);
function bubbleSortWithBreak(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) { break };
    }
    return arr;
}

// Big O Notation O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swapArrayPositions(arr, i, min);
        }
    }
    return arr;
}

// Big O Notaion O(n^2)
// Works really well with incoming numbers
// Think real time data that has to be sorted
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}


// Bubble, Insertion, Selection comparisons for Big O

// Algorithm, Best,   Average, Worst,  Space Complexity
// Bubble     O(n)    O(n^2)   O(n^2)  O(1)
// Insertion  O(n)    O(n^2)   O(n^2)  O(1)
// Selection  O(n^2)  O(n^2)   O(n^2)  O(1)

const string1 = 'wowomgzomg';
const string2 = 'omg';

console.log(subStringSearch(string1, string2));
console.log(bubbleSortNaive([4, 8, 25, 98, 1]));
console.log(bubbleSortNaiveWithHelper([4, 8, 25, 98, 1]));
console.log(bubbleSortWithBreak([4, 8, 25, 98, 1]));
console.log(selectionSort([34, 22, 10, 4, 2]));
console.log(insertionSort([2, 1, 9, 76, 4]));
