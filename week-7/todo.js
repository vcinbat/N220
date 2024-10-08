// Create a variable to track the list of todo items
let todo = [];

// Create the addItem function
function addItem() {
  // Get the input from "item"
  const itemInput = document.getElementById("item").value;

  // Adds it to the list of todo items
  if (itemInput.trim()) {
    todo.push(itemInput.trim());

    // Updates the "list" ul tag to show all the items currently in the list
    const listElement = document.getElementById("list");
    listElement.innerHTML = todo.map((item) => `<li>${item}</li>`).join("");
  }

  // Clear the input field
  document.getElementById("item").value = "";
}

// Create the summarizeList function that outputs the following to the summary p tag
function summarizeList() {
  const summaryElement = document.getElementById("summary");

  //  This should show the total number of items in the list

  const totalItems = todo.length;
  // This should show the first item in the list
  const firstItem = totalItems > 0 ? todo[0] : "None";

  // This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.
  const lastItem = totalItems > 0 ? todo[totalItems - 1] : "None";

  // Outputs the new items to the summary list
  summaryElement.innerHTML =
    `Total Items: ${totalItems}<br />` +
    `First Item: ${firstItem}<br />` +
    `Last Item: ${lastItem}`;
}
