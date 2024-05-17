// DOM Manipulation

// Styling Elements

// const title = document.querySelector("#main-heading")

// title.style.color = 'red';

// console.log(title)

const listItems = document.querySelectorAll('.list-items')
// console.log(listItems)

// for(i = 0; i < listItems.length; i++)  {
//   console.log("stuff")
//   listItems[i].style.fontSize = '5rem';
// }

// Creating Element

const ul = document.querySelector('ul')
const li = document.createElement('li')

// Adding Elements to ul

ul.append(li)

// Modifying the text

const firstListItem = document.querySelector('.list-items')

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = "X-men";

// Modifying attributes and classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'))

li.classList.add('list-items')
// li.classList.remove('list-items')

// console.log(li.classList.contains("list-items"))

// Remove Elements

li.remove()