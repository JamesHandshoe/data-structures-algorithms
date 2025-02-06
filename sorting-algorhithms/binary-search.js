const search = (array, val) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentValue = array[middle];
        
        if (currentValue < val) {
            min = middle + 1;
        } else if (currentValue > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

const testArray = [1, 2, 3, 4, 5, 6];

console.log(search(testArray, 4));
console.log(search(testArray, 6));
console.log(search(testArray, 11));