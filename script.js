var view = {

  //this methode take a string message and display it
  // in the message display area

  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit")
  },

  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss")
  },
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");



var ships = [
  { locations: ["31", "41", "51"], hits: ["", "", ""] },
  { locations: ["14", "24", "34"], hits: ["", "", ""] },
  { locations: ["00", "01", "02"], hits: ["hit", "", ""] },
];

var ship2 = ships[1];
var locations = ship2.locations;
console.log("location is " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
  console.log("ouch, hit on third ship at location one");
} 

var ship1 = ships[0];
var locations = ship1.locations;
console.log("location is " + locations[0]);
