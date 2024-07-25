// unit test is the process of checking small unit of codes to deliver information early
// unit test means we are testing small blocks of code i.e. basic functions, basic classes so we can easily identify errors.
// allows us to catch errors early.

// Basic unit test using jest

function sum(a, b) {
  return a + b;
}

function myFunction(input) {                                                                                                       
  if(typeof input !== 'number') {
    throw new Error('Invalid Input')
  }
}

function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter')
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('peanut butter'), 1000)    
  })
}

// MOCK FUNCTIONS AND SPIES
// Mocks are fake implementations of real functions and spies are tools that are used to track the behaviours of those functions
// they track behaviours such like whether a function has been called or how many times it as been called and the arguements it was called with.

// Mocking is used to isolate the unit of code been tested it basically allows you to replace a complex or slow or unavailable dependency with simpler version.
// jest.fn is a way of creating a mock function implemented to return a specific value or perform a specific function

// const mockCallback = jest.fn( x => 42 + x )




module.exports = { sum, myFunction, fetchData, fetchPromise };