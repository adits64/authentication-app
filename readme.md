# AuthFlow - Frontend Authentication 

## Overview
**AuthFlow** is a modern, responsive authentication system built with **HTML, CSS, and vanilla JavaScript**, without any frameworks or libraries.  
It includes:

- Register & Login functionality with validation  
- LocalStorage-based user data storage  
- Password show/hide toggle  
- Welcome dashboard displaying the logged-in user's name  
- Hamburger menu with options like Logout, Profile, Settings  

Later you can add:  
- Weather card using user's city  
- Latest news section  
- Grid-based responsive layout  

---

## 🛠 Features

### 1. Registration
- Full name, email, password, confirm password, city  
- Validations:
  - Name required
  - Email format check
  - Password length >= 6
  - Password match confirmation
  - Duplicate email check
- Error messages below respective inputs

### 2. Login
- Email and password
- Validates user existence
- Password matching
- Redirects to Welcome page after successful login

### 3. Dashboard / Welcome Page
- Displays **Welcome message** with user's name
- Hamburger menu with:
  - Logout button
  - Profile
  - Settings
- Option to show/hide menu on click

### 4. UI Features
- Modern clean design with gradients
- Input error highlighting
- Password visibility toggle
- Responsive layout ready

---

## 📂 Project Structure

auth-project/
│
├── index.html -> Login page
├── register.html -> Register page
├── welcome.html -> Dashboard / Welcome page
│
├── css/
│ ├── global.css -> Shared styles (colors, fonts, buttons)
| ├── home.css   -> welcome page(landing page)
│ ├── login.css -> Login page specific styles
│ └── register.css -> Register page specific styles
| ├── welcome.css -> for user welcome after login
│
├── scripts/
│ ├── common/
│ │ └── common.js -> Reusable error and clearError functions
│ │
│ ├── login/
│ │ └── login.js -> Login logic
│ │
│ └── welcome/
│ └── welcome.js -> Welcome page JS (menu, user display)
│
│
└── README.md