// Modules, Imports and Exports in JS
import moment from "moment";

import { get } from 'lodash';


const o = {
  a: {
    b: {
      c: 7
    }
  }
}

console.log(get(o, 'a.b.c'))

console.log(moment().format('YYYY-MM-DD'))


const spices = [
  { id: 1, name: 'Black Pepper' },
  { id: 2, name: 'Tumeric' },
  { id: 3, name: 'Cumin' },
  { id: 4, name: 'Coriander' },
  { id: 5, name: 'Chili Powder' }
];

const veggieDrawer = [
  '3 apples',
  '2 bad tomatoes',
  'fresh celery',
  '4 good onions',
  '1 bad onion',
  'rotten cilantro',
  '2 rotten red peppers',
  'garlic'
];

const spice = spices.find(spice => {
  return spice.name === 'Coriander';
});

const spiceIndex = spices.findIndex(spice => {
  return spice.name === 'Coriander';
});

const filteredSpices = spices.filter(spice => {
  // will return a brand new array with item that get a truthy response or value
  return spice.id === 4;
})

// reduce function on arrays is the most general purpose of all of them.
// It can stand in for filter and map and even do more than that
// Unlike filter and map, reduce can reduce anything
// initialValue arg will be of the same form as your result.

function reducer(bucket, item, index, array) {
  // console.log(bucket, item)
  if(item.includes('bad') || item.includes('rotten')) {
    return bucket;
  }

  const count = parseInt(item)

  bucket.veggies.push(item);
  bucket.howMany += isNaN(count) ? 1 : count;

  if(index === array.length - 1) {
    return `You have ${bucket.howMany} veggies: ${bucket.veggies.join(", ")}`
  }

  return bucket;
}


// const initialValue = []
const initialValue = {
  veggies: [],
  howMany: 0
}
const goodVeggies = veggieDrawer.reduce(reducer, initialValue)

// console.log("result", goodVeggies)

// console.log(spice)
// console.log(spiceIndex)