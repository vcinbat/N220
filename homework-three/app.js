function calculateInterest() {
  // Retrieve user input values
  var principle = parseFloat(document.getElementById("principle").value);
  var rate = parseFloat(document.getElementById("rate").value) / 100; //Divide interest rate by 100
  var time = parseFloat(document.getElementById("time").value);

  var totalInterest = principle * rate * time;
  var grandTotal = principle + totalInterest;

  var resultText = `
With a beginning principal of $${principle.toFixed(2)} and a growth rate of ${(
    rate * 100
  ).toFixed(2)}% for ${time} years, 
your total interest will be $${totalInterest.toFixed(
    2
  )} with a grand total of $${grandTotal.toFixed(2)}.
`;

  document.getElementById("result").innerHTML = resultText;
}
