const totalPizzas = 4;
const slicesPerPizza = 8;
let slicesThatStudentCanEat = 2.5;

slicesThatStudentCanEat = 1.5;
slicesThatStudentCanEat = 0.5;
const totalSlices = totalPizzas * slicesPerPizza;
const pizzaLeftover = totalSlices % slicesThatStudentCanEat;

console.log("Teacher Left With", pizzaLeftover);

const studentsFedWithPizza =
  (totalSlices - pizzaLeftover) / slicesThatStudentCanEat;
console.log("Students Fed", studentsFedWithPizza);
