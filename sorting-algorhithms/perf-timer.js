const { performance } = require('perf_hooks');

const perfTimer = (arr1, arr2, callBack) => {
    const timeStart = performance.now();
    let methodResults;
    if (arr1 && arr2) {
        methodResults = callBack(arr1, arr2);
    } else {
        methodResults = callBack(arr1);
    }
    
    const timeEnd = performance.now();
    return {
        totalTime: (timeEnd - timeStart) * 1000,
        results: methodResults
    }
}

module.exports = perfTimer;