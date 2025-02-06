function normalReturn() {
  return "a";
}

function setTimeoutReturn() {
  setTimeout(() => {
    return 'b';
  }, 500);
}

function setTimeoutReturnCallback(callback) {
    setTimeout(() => {
      return callback('b');
    }, 500);
  }

function promiseReturn() {
  return new Promise((resolve, reject) => {
    resolve("c");
  });
}

async function returnSettimeoutWrapper() {
    const promise = new Promise(resolve => {
        const value = setTimeoutReturn();
    });
    return promise;
}

async function returnall() {
  const returnedValues = [];
  
  const firstResolve = normalReturn();
  returnedValues.push(firstResolve);
  const secondResolve = setTimeoutReturnCallback(setTimeoutCallback);
  returnedValues.push(secondResolve);
  const thirdResolve = await promiseReturn();
  returnedValues.push(thirdResolve);

  return new Promise((resolve) => resolve(returnedValues));
}

async function setTimeoutCallback(value) {
    const returnedValues = [];
  
    const firstResolve = normalReturn();
    returnedValues.push(firstResolve);
    returnedValues.push(value);
    const thirdResolve = await promiseReturn();
    returnedValues.push(thirdResolve);

    console.log(returnedValues);
    // return new Promise((resolve) => resolve(returnedValues));
}

setTimeoutReturnCallback(setTimeoutCallback);


// (async () => console.log(await returnall()))();

