// Variable for buttons 


const startStopBtn = document.querySelector("#startStopBtn")

const resetBtn = document.querySelector("#resetBtn")

// const timer = document.querySelector("#timer")

// startStopBtn.addEventListener("click", function(e) {

//   console.log(timer.innerHTML)

// })

// Varables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped"

// Stop watch function

function stopWatch() {
  seconds++

  if(seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1) {
      minutes = 0;
      hours++
    }
  }

  if(seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds
  }

  if(minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes
  }

  if(seconds < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours
  }

  let displayTimer = document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}

startStopBtn.addEventListener("click", function() {

  if(timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1);
    document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started"
  } else {
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped"
  }

})

resetBtn.addEventListener('click', function() {

  window.clearInterval(timerInterval);

  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById('timer').innerHTML = "00:00:00"
  document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped"
})