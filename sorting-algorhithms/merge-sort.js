function mergeSortedArrays(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    // work through both arrays and compare values
    // then push into results according to whichever is bigger
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    // if arr1 is greater than arr2 push the results 
    // because we know that it is sorted
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // if arr2 is greater than arr1 push the results
    // because we know that it is sorted
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let midpoint = Math.floor(arr.length / 2);
    const leftSide = mergeSort(arr.slice(0, midpoint));
    const rightSide = mergeSort(arr.slice(midpoint));
    return mergeSortedArrays(leftSide, rightSide);
}
console.log(mergeSortedArrays([1, 10, 50], [2, 14, 99, 100]));

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));