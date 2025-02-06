/**
 * Quick sort starts with a position and then compares the entire
 * array for values greater or lower and moves the first index into its 
 * position.  By doing this, we know that the left side is lower than our
 * start and the right is higher.  Then, we recursively handle the left
 * and right side arrays until it is sorted.  Meaning we have reached
 * the base case.
 * 
 */

const testArray = [4, 8, 2, 1, 5, 7, 6, 3];

const swapArrayPositions = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


function partition(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swapArrayPositions(arr, swapIndex, i);
        }
    }
    swapArrayPositions(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        // left side of array first
        quickSort(arr, left, pivotIndex - 1);
        // right side of array
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// partition(testArray);
console.log(quickSort(testArray));