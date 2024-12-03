// Dating Section
const tickets = 3;
const price = 14;
const total = tickets * price;
document.getElementById("ticketNum").innerText = `Tickets: ${tickets}`;
document.getElementById("ticketCost").innerText = `Cost: $${price}`;
document.getElementById("ttCost").innerText = `Total: $${total}`;

// Shopping Section
const balance = 235.87;
const sweater = 55;
const shirt = 35;
const pants = 75;
const jacket = 70;
const shoes = 60;

const outfitCost = shirt + pants + shoes;
const newBalance = balance - outfitCost;
const canBuyJacket = newBalance >= jacket;

document.getElementById(
  "bank"
).innerText = `After purchasing the outfit, my bank account balance is $${newBalance.toFixed(
  2
)}.`;
document.getElementById("addJacket").innerText = `Add Jacket: ${canBuyJacket}`;

// Pizza Section
const pizzas = 4;
const slices = 8;
let studentSlice = 2.5;
const totalSlices = pizzas * slices;
const fedStudents = Math.floor(totalSlices / studentSlice);
const leftover = totalSlices % studentSlice;

document.getElementById(
  "profPizza"
).innerText = `Students: ${fedStudents}\nRector: ${leftover}`;

// Monty's Mega Bar Section
const adult = 12;
const child = 6;
const drink = 1.5;

const mealCost = 2 * adult + child + 3 * drink;
document.getElementById("Monty").innerText = `$${mealCost}`;

// Average Tips Section
const tips = [202.45, 134.97, 256.63, 178.22];
const totalTips = tips.reduce((acc, tip) => acc + tip, 0);
const avgTips = totalTips / tips.length;

document.getElementById(
  "tips"
).innerText = `Weekly Tip Average: $${avgTips.toFixed(4)}`;
