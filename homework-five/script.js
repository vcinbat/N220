// Start the story
const storyElement = document.getElementById("story");

// Decision 1 with Choice 1 & Choice 2
const initialAction =
  prompt(`An evil dragon has kidnapped the princess. You approach the castle. How will you enter?
\n (Enter the number of your choice)
\n 1. Sneak through the front gate
\n 2. Climb the wall`);

// Choice 1/Decision 2
if (initialAction === "1") {
  storyElement.innerHTML +=
    "<br>You chose to sneak through the front gate and encountered a guard.";

  // Choice 1/Decision 4
  const guardAction = prompt(`Do you:
\n 1. Try to distract the guard
\n 2. Wait for him to leave`);

  // Choice 1 /Decision 8
  if (guardAction === "1") {
    storyElement.innerHTML +=
      "<br>You decided to distract the guard by throwing a rock.";

    // Choice 1 / Decision 10
    const enterCastle = confirm(
      `The guard goes towards the sound of the rock hitting the ground. Do you enter the castle now?`
    );

    if (enterCastle) {
      // Choice 1/Decision 10: Mission Accomplished
      storyElement.innerHTML +=
        "<br>You slipped past the guard and entered the castle, finding the princess!";
    } else {
      // Choice 1 /Decision 10: Mission Failure
      storyElement.innerHTML +=
        "<br>You hid and waited for too long, and another guard spotted you. The mission failed.";
    }
  } else {
    // Choice 2/Decision 9
    storyElement.innerHTML +=
      "<br>You waited for a few minutes, and eventually the guard left to check another spot.";

    const enterCastleClear = confirm(
      `The coast is now clear. Do you enter the castle now?`
    );

    if (enterCastleClear) {
      // Choice 2/Decision 9: Mission Accomplished
      storyElement.innerHTML +=
        "<br>You entered the castle swiftly, avoiding detection. You found the princess!";
    } else {
      // Choice 2/Decision 9: Mission Failure
      storyElement.innerHTML +=
        "<br>You hesitated for too long, and another guard spotted you! The mission failed.";
    }
  }
} else {
  // Choice 2/Decision 3
  storyElement.innerHTML +=
    "<br>You decided to climb the wall and reach a small open window.";

  // Choice 1/Decision 6 & Choice 2/Decision 7
  const windowAction = prompt(`Do you:
\n 1. Enter through the window
\n 2. Search for another way in`);

  if (windowAction === "1") {
    // Choice 1/Decision 6
    storyElement.innerHTML +=
      "<br>You quietly slipped through the window and found yourself in a hallway.";

    const hallwayProceed = confirm(`Do you proceed down the hallway?`);

    if (hallwayProceed) {
      // Choice 1/Decision 6: Mission Accomplished
      storyElement.innerHTML +=
        "<br>You carefully made your way down the hallway and found the princess's room!";
    } else {
      // Choice 1/Decision 6: Mission Failure
      storyElement.innerHTML +=
        "<br>You hesitated, and a guard found you wandering the hall. The mission failed.";
    }
  } else {
    // Choice 2/Decision 7
    storyElement.innerHTML +=
      "<br>You looked around and found a hidden door leading to a staircase.";

    const takeStaircase = confirm(`Do you take the staircase?`);

    if (takeStaircase) {
      // Choice 2/Decision 7: Mission Success
      storyElement.innerHTML +=
        "<br>You climbed the staircase and reached the princess's tower room.";
    } else {
      // Choice 2/Decision 7: Mission Failure
      storyElement.innerHTML +=
        "<br>You decided against taking the staircase and were spotted by a patrolling guard. The mission failed.";
    }
  }
}
