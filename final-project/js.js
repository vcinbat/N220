// Get references to DOM elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const generateUsernameButton = document.getElementById("generate-username");
const dashboard = document.getElementById("dashboard");
const loggedUser = document.getElementById("logged-user");
const logoutButton = document.getElementById("logout");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Variables to store user state and tasks
let currentUser = null;
let tasks = [];

// Generate a random username when the button is clicked
generateUsernameButton.addEventListener("click", () => {
  const randomPart = Math.random().toString(36).substring(2, 8);
  const username = `User${randomPart}`;
  usernameInput.value = username;
});

// Handle user login
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate username
  if (!username) {
    alert("Username cannot be empty");
    return;
  }

  // Validate password
  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    alert(
      "Password must be at least 8 characters long, contain a number, and an uppercase letter."
    );
    return;
  }

  // Set the current user and display the dashboard
  currentUser = username;
  loggedUser.textContent = username;
  dashboard.style.display = "block";
});

// Handle user logout
logoutButton.addEventListener("click", () => {
  currentUser = null;
  dashboard.style.display = "none";
  usernameInput.value = "";
  passwordInput.value = "";
});

// Add a new task to the task list
addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();

  // Validate task text
  if (!taskText) {
    alert("Task cannot be empty");
    return;
  }

  // Create a task object and add it to the task array
  const task = { text: taskText, complete: false };
  tasks.push(task);
  renderTasks();
  newTaskInput.value = "";
});

// Render the task list in the UI
function renderTasks() {
  // Updates the task list UI based on the current tasks array
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task ${task.complete ? "complete" : ""}`;
    taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTask(${index})">${
      task.complete ? "Undo" : "Complete"
    }</button>
                <button onclick="removeTask(${index})">Remove</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  });
}

// Toggle the completion status of a task
function toggleTask(index) {
  tasks[index].complete = !tasks[index].complete;
  renderTasks();
}

// Remove a task from the task list
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
