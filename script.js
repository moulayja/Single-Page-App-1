// alert('hello from Js') Connecting my Js



// Using Vanilla Js for the DOM manipulation

const aurora = document.getElementById("aurora").addEventListener("click", displayAurora);
const constellation = document.getElementById("constellation").addEventListener("click", displayConstellation);
const earth = document.getElementById("earth").addEventListener("click", displayEarth);
const eva = document.getElementById("eva").addEventListener("click", displayEva);


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





