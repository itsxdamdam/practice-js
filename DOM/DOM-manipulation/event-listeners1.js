// DOM Manipulation

// Event Listeners

// element.addEventListner("click", function)

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
  alert("I go too love o");
};

buttonTwo.addEventListener("click", alertBtn)

// Mouseover

const newBgColor = document.querySelector('.box-3');

function changeBgColor() {
  newBgColor.style.backgroundColor = "gold";
}

newBgColor.addEventListener("mouseover", changeBgColor)