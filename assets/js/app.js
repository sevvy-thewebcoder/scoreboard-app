// let homeAddOne = document.getElementById("home-add-one");
// let homeAddTwo = document.getElementById("home-add-two");
// let homeAddThree = document.getElementById("home-add-three");
// let guestAddOne = document.getElementById("guest-add-one");
// let guestAddTwo = document.getElementById("guest-add-two");
// let guestAddThree = document.getElementById("guest-add-three");
let scoreCardHome = document.getElementById("scores-home");
let scoreCardGuest = document.getElementById("scores-guest");

let scoreHome = 0;
let scoreGuest = 0;

function addOneHome() {
  scoreHome += 1;
  scoreCardHome.textContent = scoreHome;
}
function addTwoHome() {
  scoreHome += 2;
  scoreCardHome.textContent = scoreHome;
}
function addThreeHome() {
  scoreHome += 3;
  scoreCardHome.textContent = scoreHome;
}
function addOneGuest() {
  scoreGuest += 1;
  scoreCardGuest.textContent = scoreGuest;
}
function addTwoGuest() {
  scoreGuest += 2;
  scoreCardGuest.textContent = scoreGuest;
}
function addThreeGuest() {
  scoreGuest += 3;
  scoreCardGuest.textContent = scoreGuest;
}

function newGame() {
  scoreHome = 0;
  scoreGuest = 0;
  scoreCardHome.textContent = scoreHome;
  scoreCardGuest.textContent = scoreGuest;
}