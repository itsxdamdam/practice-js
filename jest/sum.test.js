const { sum, myFunction, fetchData, fetchPromise } = require('./sum');

// jest matchers
// 1. only use toBe when we are dealing with numbers, strings and booleans (primitive data types)

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// });

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4)
// })

// 2. toEqual is used when comparing values of objects or arrays
// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 })
// })

// 3. Falsy Values: used to check if a value is null, undefined, false, 0 , blank or nan
// test('null is falsy', () => {
//   const n = null;
//   expect(n).toBeFalsy();
// })

// test('0 is falsy', () => {
//   const n = 0;
//   expect(n).toBeFalsy();
// })

// 4. Truthy Value: used to check if a value is not null, undefined, false, 0, blank or nan
// test('one is truthy', () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// })

// 5. toThrow: if a function throws an error
// test('throws on invalid input', () => {
//   expect(() => {
//     myFunction('ghdrghjk');
//   }).toThrow()
// })

// testing asynchronous code
// asynchronous code allows for execution of some operations in the background without blocking the main execution thread.

// 1. testing callbacks

// done signals to jest that the test is complete
// test('the data is peanut butter', done => {
//   function callback(data) {
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch(error) {
//       done(error)
//     }
//   }

//   fetchData(callback);
// })


// 2. testing promise

// test('the data is peanut butter', () => {
//     return expect(fetchPromise()).resolves.toBe('peanut butter');
//   }
// )

// test('the fetch fails with an error', () => {
//   return exoect(fetchPromise()).rejects.toThrow('error')
// }) 

// 3. Testing Async/Await function

// async signifies that this function is asynchronous
// await is keyword used alongside await

// test('the data is peanut butter', async () => {
//   const data = await fetchPromise();
//   expect(data).toBe ('peanut butter')
// })

// Mock Function

// test('mock implementation of a basic function', () => {
//   const mock = jest.fn(x => 42 + x);
//   expect(mock(1)).toBe(43);
//   expect(mock).toHaveBeenCalledWith(1);
// });

// jest.spy
test('spying on a method of an object', () => {
  const video = {
    play() {
      return true;
    },
  }

  // when you create a spy on a function jest replaces the spied function with a mock function allowing you track calls and arguments e.t.c.

  const spy = jest.spyOn(video, 'play');
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore(); //used to restore the original implementation of the that function
})