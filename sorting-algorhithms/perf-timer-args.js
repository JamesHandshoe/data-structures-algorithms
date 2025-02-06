const { performance } = require('perf_hooks');

const perfTimerWithArgs = (arr1, arr2, callBack, callBackArg) => {
    const timeStart = performance.now();
    let methodResults;
    if (arr1 && arr2) {
        methodResults = callBack(arr1, arr2, callBackArg);
    } else {
        methodResults = callBack(arr1, callBackArg);
    }
    
    const timeEnd = performance.now();
    return {
        totalTime: (timeEnd - timeStart) * 1000,
        results: methodResults
    }
}

module.exports = perfTimerWithArgs;