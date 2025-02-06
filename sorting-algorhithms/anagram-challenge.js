const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const freqCounter1 = {};
    const freqCounter2 = {};

    for (let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }

    for (let char of str2) {
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
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

const test1 = validAnagram('texttwisttime', 'timetwisttext');
console.log(test1);