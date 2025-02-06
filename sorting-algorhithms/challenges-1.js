const sameFrequency = (num1, num2) => {
    const freqCounter1 = {};
    const freqCounter2 = {};

    const num1Array =  num1.toString().split('');
    const num2Array = num2.toString().split('');
    if (num1Array.length !== num2Array.length) {
        return false;
    }

    for (let val of num1Array) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (let val of num2Array) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        // check the value
        if (!(key in freqCounter2)) {
            return false;
        }
        // check the frequency
        if (freqCounter2[key] !== freqCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(3589578, 5879385));

const areThereDuplicates = (...args) => {
    let left = 0;
    let right = args.length - 1;

    while (left < right) {
        // get sum of first index and last index initially
        
        if (args[left] === args[right]) {
            return true;
        } else if (args[left] > args[right]) {
            // shift test values on the end of the array left one
            right--;
        } else {
            // shift test values at the beginning of the array right one
            left++;
        }
    }
    return false;
}

const areThereDuplicatesUsingSet = (...args) => {
    return new Set(args).size !== args.length;
}

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(areThereDuplicatesUsingSet(1, 2, 3));
console.log(areThereDuplicatesUsingSet(1, 2, 2));
console.log(areThereDuplicatesUsingSet('a', 'b', 'c', 'a'));

console.log('========================= longest stubstring');

console.log(findLongestSubstring('thisisawesome'));

console.log('========================= averagePair');
// finds the average of two digits in an array and returns true if
// that array contains two digits that the average is equal to the number passed
function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
      let avg = (arr[start] + arr[end]) / 2;

      if (avg === num) {
        return true;  
      } else if (avg < num) {
        start++;
      } else {
        end--;
      } 
    }
    return false;
}

// takes two strings and finds if the first string is a subsequence of the 2nd string
// hello is in hello world as an example
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) {
        return true;
    }
    while (j < str2.length) {
      if (str2[j] === str1[i]) {
        i++;
      }
      if (i === str1.length) {
          return true;
      }
      j++;
    }
    return false;
}

function minSubArrayLen(arr, num) {
    let start = 0;
    let end = 0;
    let total = 0
    let minLen = Infinity;

    while(start < arr.length){
      if (total < num && end < arr.length) {
        total += arr[end];
        end++;
      } else if (total >= num) {
        minLen = Math.min(minLen, end - start);
        total -= arr[start];
        start++;
      } else {
        break;
      } 
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));