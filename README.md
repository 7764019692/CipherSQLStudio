# 🚀 CipherSQLStudio  
### Full-Stack SQL Practice Platform

CipherSQLStudio is a full-stack SQL practice platform where users can solve real SQL problems by writing and executing queries on a live PostgreSQL database.

This project is designed for **students, freshers, and interview preparation** and mimics a real-world SQL execution environment.

---

## ✨ Features

- 📘 SQL Assignments (Easy → Medium)
- 🧠 Real SQL Query Execution
- 🧩 VS-Code like SQL Editor (Monaco)
- 🐘 PostgreSQL for query execution
- 🍃 MongoDB for assignment storage
- ⚛️ React frontend with dark tech UI
- 🚀 Node.js + Express backend
- 🖥️ Fully runnable using CMD / Terminal

---

## 🧠 Tech Stack

**Frontend**
- React.js
- CSS (Dark Theme)
- Monaco Editor

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- PostgreSQL
- dotenv

---

## 📁 Project Structure

CipherSQLStudio/
├── client/ # React frontend
├── server/ # Node.js backend
└── README.md


---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (v18+)
- npm
- Git
- PostgreSQL (local)
- MongoDB Atlas account

---

## 🔽 Clone Repository

```bash
git clone https://github.com/7764019692/CipherSQLStudio.git
cd CipherSQLStudio
🖥️ Backend Setup
cd server
npm install
Create .env
echo PORT=5000 > .env
echo MONGODB_URI=YOUR_MONGODB_URI >> .env
PostgreSQL Setup
Start PostgreSQL service:

net start postgresql-x64-17
Create database & table:

"C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres
CREATE DATABASE ciphersqlstudio;
\c ciphersqlstudio

CREATE TABLE employees (
  id INT,
  name TEXT,
  salary INT
);

INSERT INTO employees VALUES
(1,'John',50000),
(2,'Jane',70000),
(3,'Bob',40000);
\q
Start Backend
npx nodemon app.js
✔ Output:

Server running on port 5000
MongoDB connected successfully
🌐 Frontend Setup
cd ../client
npm install
npm start
Open browser:

http://localhost:3000
🧪 How It Works
User selects an assignment

Writes SQL query

Query executes on PostgreSQL

Result is returned and displayed

Example Query:

SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
📌 API Endpoints
GET  /api/assignments
GET  /api/assignments/:id
POST /api/execute
👨‍💻 Author
Satyaki Kumar
GitHub: https://github.com/7764019692



