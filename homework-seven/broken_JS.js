// Correctly spelt "PlayerChoie"
let PlayerChoice = document.getElementsByClassName("choice");
// Fixed the array line by adding quotations
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

// Added a closing bracket at the end
function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  // Changed "result-descision" to "resultDecision" for naming consistency and added innerHTML
  // Removed Boolean and paranthesis from Boolean(CompDecision)
  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision;

  // Added "else if" to fix the condition statements
  // Replaced "=" with "==="
  // Changed num to numb because it was an incorrect variable
  // Replaced "-" with "-="
  if (numb === 0) {
    if (CompDecision === "Paper") {
      innerscore -= 1;
    } else if (CompDecision === "Scissors") {
      innerscore += 1;
    }
  } else if (numb === 1) {
    if (CompDecision === "Rock") {
      innerscore += 1;
    } else if (CompDecision === "Scissors") {
      innerscore -= 1;
    }
  } else if (numb === 2) {
    if (CompDecision === "Rock") {
      innerscore -= 1;
    } else if (CompDecision === "Paper") {
      innerscore += 1;
    }
  }

  // Changed "getElementByClassName" to "getElementByID" because it's the proper method for targeting a single element
  // Fixed the spelling of "innrscore"
  document.getElementById("Score").innerHTML = "Score: " + innerscore;
}
