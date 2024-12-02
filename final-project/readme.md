### Final Project Name:

Random Username Generator with Login Form

### GitHub Link

https://github.com/vcinbat/N220/blob/main/final-project/readme.md

### Major Features

### 1. Login Form

**DOM References**:

- Username input field: `<input id="username">`
- Password input field: `<input id="password">`
- Generate Username button: `<button id="generate-username">`
- Login button: `<button id="login">`

**Logic**:

- Validate username:
  - If empty, prompt the user to enter a username.
  - If the user clicks "Generate Username," create and autofill a random username in the input field.
- Validate password:
  - Ensure it is at least 8 characters long.
  - Ensure it contains at least one uppercase letter and one number.

**Data Types**:

- `username`: `String`
- `password`: `String`

**Events**:

- On "Generate Username" button click:
  - Generate a random username and autofill the username input field.
- On "Login" button click:
  - Validate username and password.
  - Provide feedback if invalid.

---

### 2. Random Username Generator

**DOM References**:

- Generate Username button: `<button id="generate-username">`
- Username display area: `<input id="username">`

**Logic**:

- Randomly generate a username:
  - Create a sequence of 6 alphanumeric characters.
  - Prefix the sequence with "User" for uniqueness.
- If the username input field is empty, populate it with the generated username.

**Data Types**:

- `generatedUsername`: `String`
- `characterPool`: `Array` containing allowed characters.

**Events**:

- On button click:
  - Trigger the username generation logic.
  - Update the username input field with the generated value.

---

### 3. Dashboard

**DOM References**:

- Welcome message container: `<div id="welcome-message">`
- User profile section: `<div id="user-profile">`

**Logic**:

- Display a welcome message that includes the user's username after login.
- Include options to edit the username or log out.

**Data Types**:

- `username`: `String` (stored after login).
- `session`: `Object` for tracking logged-in state.

**Events**:

- On page load:
  - Check if a user is logged in.
  - Display the username in the welcome message.

---

## Example Code Snippet: Random Username Generation

function generateUsername() {
const randomPart = Math.random().toString(36).substring(2, 8);
const username = `User${randomPart}`;
document.getElementById('username').value = username;
}
document.getElementById('generate-username').addEventListener('click', generateUsername);
