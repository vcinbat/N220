### Final Project Outline

### Final Project Name:

Random Username Generator with Login Form & Task Mananagement

### GitHub Link

https://github.com/vcinbat/N220/tree/main/final-project

## Major Features

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
  - Create a string of 6 alphanumeric characters.
  - Prefix the string with "User" for uniqueness.
- If the username input field is empty, populate it with the generated username.

**Data Types**:

- `generatedUsername`: `String`
- `characterPool`: `Array` containing allowed characters.

**Events**:

- On button click:
  - Trigger the username generation logic.
  - Update the username input field with the generated value.

---

### 3. Dashboard (Dynamic Welcome Message)

**DOM References**:

- Welcome message section: `<div id="welcome-message">`
- User profile section: `<div id="user-profile">`

**Logic**:

- Display a welcome message that includes the user's username after login.
- The username is retrieved from the login input and is only valid during the session (stored in a JavaScript variable).

**Data Types**:

- `username`: `String`

**Events**:

- On "Login" button click:
  - Display a personalized welcome message based on the entered or generated username.

---

## Example Code Snippet: Random Username Generation

```js
function generateUsername() {
  const randomPart = Math.random().toString(36).substring(2, 8);
  const username = `User${randomPart}`;
  document.getElementById("username").value = username;
}
document
  .getElementById("generate-username")
  .addEventListener("click", generateUsername);
```
