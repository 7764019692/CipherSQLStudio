4# 🚀 CipherSQLStudio  
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

Copyright (c) 2025 Satyaki Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software for learning, personal projects, and educational use, including
without limitation the rights to use, copy, modify, merge, and publish,
subject to the following conditions:

1. This software may NOT be used for commercial purposes without explicit
   written permission from the author.

2. Any public use, fork, or redistribution must clearly credit the original
   author and repository.

3. The Software is provided "AS IS", without warranty of any kind, express or
   implied, including but not limited to the warranties of merchantability,
   fitness for a particular purpose and noninfringement.

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.




