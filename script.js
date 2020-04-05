
// Using Vanilla Js for the DOM manipulation

const home = document.getElementsByClassName("nothingToDisplay")


const aurora = document.getElementById("aurora").addEventListener("click", displayAurora);
const constellation = document.getElementById("constellation").addEventListener("click", displayConstellation);
const earth = document.getElementById("earth").addEventListener("click", displayEarth);
const eva = document.getElementById("eva").addEventListener("click", displayEva);


// Display Aurora once Aurora Borealis Clicked


// Looping each Class Name and giving it the same eventListener

for (var k=0; k<home.length; k++){
 home[k].addEventListener("click", clearDisplay);
}

function clearDisplay() {
  let textToDisplay = document.getElementById("text");
  textToDisplay.innerHTML = "";
  removeEventListener('click', clearDisplay);

    }

// Display Aurora once Aurora Borealis Clicked

function displayAurora() {
  let textToDisplay = document.getElementById("text");
  textToDisplay.innerHTML = "Aurora Borealis";

    }

// Display constellation once constellation Clicked

function displayConstellation() {
    let textToDisplay = document.getElementById("text");
    textToDisplay.innerHTML = "Constellation";
  
      }

// Display Earth once Earth Orbit Clicked

function displayEarth() {
    let textToDisplay = document.getElementById("text");
    textToDisplay.innerHTML = "Earth Orbit";
  
      }


// Display Eva once Eva Clicked

 function displayEva() {
        let textToDisplay = document.getElementById("text");
        textToDisplay.innerHTML = "Eva";
      
          }

