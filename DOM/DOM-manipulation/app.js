// DOM Manipulation

// EVent Delegation

// It allows users to add/append a single event listners to a parent element that adds it to all of its present and future descendants that match a selector.

document.querySelector("#sports").addEventListener("click", function(e) {
  console.log(e.target.getAttribute('id') + " is clicked");

  const target = e.target;
  
  if(target.matches('li')) {
    target.style.backgroundColor = "lightgrey";
    target.style.color = "black";
  }

})

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby")

sports.appendChild(newSport)


