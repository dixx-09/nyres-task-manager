# 📝 NYRES Task Management System

A secure and user-friendly Task Management Web Application developed using the MERN backend stack (Node.js, Express.js, MongoDB) with a responsive HTML, CSS, and JavaScript frontend.

## 🚀 Project Overview

The NYRES Task Management System helps users efficiently manage their daily tasks through a simple and intuitive interface. Users can register, log in securely using JWT authentication, and perform task management operations such as adding, viewing, updating, and deleting tasks.

## ✨ Features

* 🔐 User Registration & Login
* 🔑 JWT-based Authentication
* ➕ Add New Tasks
* 📋 View All Tasks
* ✅ Mark Tasks as Completed
* ✏️ Update Existing Tasks
* 🗑️ Delete Tasks
* 👤 User-specific Task Management
* 🔒 Protected API Routes
* 📱 Responsive User Interface

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

## 📂 Project Structure

```text
NYRES/
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── register.html
│   ├── dashboard.html
│   ├── add-task.html
│   └── tasks.html
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the Server

```bash
node server.js
```

### 6. Open the Application

Open the frontend HTML files in your browser.

## 🔒 Authentication Flow

1. User registers with name, email, and password.
2. Password is securely hashed using bcrypt.
3. User logs in with credentials.
4. JWT token is generated and stored in localStorage.
5. Protected routes validate the JWT token before allowing access.

## 🎯 Learning Outcomes

This project helped in understanding:

* REST API Development
* User Authentication & Authorization
* JWT Token Handling
* MongoDB Integration
* CRUD Operations
* Express Middleware
* Frontend & Backend Integration
* Full Stack Application Development

## 👩‍💻 Author

**Disha Shenoy**

Course Completion Project – NYRES

## 📄 License

This project is developed for educational and learning purposes.
