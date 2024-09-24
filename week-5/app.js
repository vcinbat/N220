// Coding Challenge

//Objects

//1.
const codeChallenge = {
  courseNumber: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolledStudents: 18,

  getAvailability: function () {
    return (this.totalSeats = this.enrolledStudents) !== 0;
    return this.totalSeats > this.enrolledStudents;
  },
};

//1. Are seats available?
console.log(`N220 Open: ${codeChallenge.getAvailability()}, `);

//2. Two more students
codeChallenge.enrolledStudents += 2;
console.log(`Total Students ${codeChallenge.enrolledStudents}`);

//3. Check availability again
console.log(`N220 Open: ${codeChallenge.getAvailability}`);

// BUILT-IN OBJECTS
var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Width: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += codeChallenge.courseTitle;

document.querySelector("#domain").innerHTML += "Hi";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"), 100);
console.log((100).replace("0", "2"), 100);
console.log((100).replace("0", "2"), 100);
console.log()
