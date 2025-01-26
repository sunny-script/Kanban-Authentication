# Kanban Board with JWT Authentication

## 📌 Project Overview
This project enhances an existing Kanban board application by adding secure authentication using **JSON Web Tokens (JWT)**. Users can securely log in, manage their tasks, and experience session management with token-based authentication.

### 🌟 Key Features
- **Secure Login Page**: Username and password authentication with JWT.
- **Session Management**:
  - Tokens are stored securely in local storage for subsequent authenticated requests.
  - Automatic logout after session expiration.
- **Error Handling**: Informative error messages for invalid credentials.
- **Protected Routes**: Access to the Kanban board is restricted to authenticated users.
- **Responsive Deployment**: Fully deployed and operational on Render.

---

## 🧑‍💻 User Story

**AS A** member of an agile team,  
**I WANT** a Kanban board with a secure login page,  
**SO THAT** I can securely access and manage my work tasks.

---

## ✅ Acceptance Criteria

- **GIVEN** a Kanban board with a secure login page:
  - **WHEN** I load the login page  
    **THEN** I am presented with form inputs for username and password.
  - **WHEN** I enter valid credentials  
    **THEN** I am authenticated using JWT and redirected to the main Kanban board page.
  - **WHEN** I enter invalid credentials  
    **THEN** I am presented with an error message indicating that the credentials are incorrect.
  - **WHEN** I successfully log in  
    **THEN** a JWT is securely stored in local storage for authenticated requests.
  - **WHEN** I log out  
    **THEN** the JWT is removed from local storage, and I am redirected to the login page.
  - **WHEN** I access the Kanban board without authentication  
    **THEN** I am redirected to the login page.
  - **WHEN** I remain inactive for a defined period  
    **THEN** my session expires, the JWT is invalidated, and I am redirected to the login page.

---

## 🧪 Testing Instructions

### Valid Login:
- Enter valid credentials and verify redirection to the Kanban board.
- Check that the JWT is stored in local storage.

### Invalid Login:
- Enter incorrect credentials and verify that an error message is displayed.

### Protected Routes:
- Attempt to access the Kanban board without logging in and ensure you are redirected to the login page.

### Session Expiration:
- Remain inactive for the defined period and verify that the session expires, logging you out automatically.

---

## 🛡️ Deployment

This application is fully deployed and operational on Render:

- **Render URL**: [Kanban Board on Render](https://kanban-authentication-22r7.onrender.com/)
- **Repo URL**: [Kanban Board Repo](https://github.com/sunny-script/Kanban-Authentication)

---

## 🛠️ Tools and Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: PostgreSQL
- **Deployment**: Render
- Wouldn't have been possible without the help of TAs, tutors, and ChatGPT! Thank you!
