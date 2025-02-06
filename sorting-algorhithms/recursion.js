const countdown = (num) => {
    if (num <= 0) {
        console.log("All Done");
        return;
    }
    console.log(num);
    num--;
    countdown(num);
}

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}

const power = (num, exp) => {
    if (exp === 0) {
        return 1;
    }

    if (exp === 1) {
        return num;
    }

    return num * power(num, exp - 1);
}

const factorial = (num) => {
    if (num < 0) {
        return 0;
    }
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

const recursionWithClosureDetermineOdds = (arr) => {
    const result = [];

    function determineOdds(helperArr) {
        if (helperArr.length === 0) {
            return;
        }

        if (helperArr[0] % 2 !== 0) {
            result.push(helperArr[0]);
        }
        determineOdds(helperArr.slice(1));
    }
    determineOdds(arr);
    return result;
}

const fibWithRecursion = (num) => {
    let start = [1, 1];

    function doFib(number) {
        if (number === 0) {
            return start[num - 1];
        }
        start.push((start[start.length - 2]) + (start[start.length - 1]));
        doFib(number - 1);
    }
    
    doFib(num);
    return start[num - 1];
}

const fibWithPureRecursion = (num) => {
    if (num <= 2) {
        return 1;
    }

    return fibWithPureRecursion(num - 1) + fibWithPureRecursion(num - 2);
}

function pureRecusionDetermineOdds(arr) {
    let result = [];
    if (arr.length === 0) {
        return result;
    }
    if (arr[0] && arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = result.concat(pureRecusionDetermineOdds(arr.slice(1)));
    return result;
}

// Takes an array of strings and capitalizes the first letter of each string
// and returns that array.
function capitalizeFirst(arr) {
    let capitalizedResults = [];
    if (arr.length === 0) {
        return capitalizedResults;
    }

    const splitArray = arr[0].split('');
    splitArray[0] = splitArray[0].toUpperCase();
    capitalizedResults.push(splitArray.join(''));
    capitalizedResults = capitalizedResults.concat(capitalizeFirst(arr.slice(1)));
    return capitalizedResults;
}

// Takes an array of strings and capitalizes the entire string
// and returns the array
function capitalizeWords(arr) {
    let capitalizedResults = [];
    if (arr.length === 0) {
        return capitalizedResults;
    }
    const captilizedWord = arr[0].toUpperCase();
    capitalizedResults.push(captilizedWord);
    capitalizedResults = capitalizedResults.concat(capitalizeWords(arr.slice(1)));
    return capitalizedResults;
}

// This function takes an object and recursively looks at all properties
// if a property is an object it will call itself.
// If not, then it will test if it is a number type and if it is
// tests for being even. 
function nestedEvenSum(obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

// takes an object and recursively looks at all properties
// if a property is an object it will call itself
// If not, then it will test if it is a number type and if it is
// it will cast it as a string
function stringifyNumbers(obj) {
    const newObj = {};
    for (var key in obj) {
        // if number stringify it
        if (typeof obj[key] === 'number') {
            newObj[key] = JSON.stringify(obj[key]);
        // if object and not an array call stringifyNumbers again
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        // for everything else keep the original value
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const productOfArray = (arr) => {
    return arr.reduce((acc, currentValue) => acc * currentValue);
}

const isOdd = val => val % 2 !== 0;

// take a callback with an arr and return true if one item
// within the array meets the parameters of the callback and false it doesn't
const someRecursive = (arr, callback) => {
    if (arr.length === 0) {
        return false;
    }
    if (callback(arr[0])) {
        return true;
    }

    return someRecursive(arr.slice(1), callback);
}

// method able to take and mixed array with other arrays and flatten it into one array
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


// countdown(10);
// console.log(sumRange(10));
// console.log(factorial(5));
// console.log(recursionWithClosureDetermineOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(pureRecusionDetermineOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// const testArray = [];

// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));

// console.log(fibWithRecursion(10));
// console.log(fibWithPureRecursion(10));

//console.log(someRecursive([1,2,3,4], isOdd)); // true
//console.log(someRecursive([4,6,8,9], isOdd)); // true
//console.log(someRecursive([4,6,8], isOdd)) // false
//console.log(someRecursive([4,6,8], val => val > 10)); // false

console.log(stringifyNumbers(obj1));