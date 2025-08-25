# 🐘 Minimalist PostgreSQL Query Script with Node.js

A clean and beginner-friendly project that demonstrates **how to connect to a PostgreSQL database using Node.js**.  
It uses the [pg (node-postgres)](https://node-postgres.com/) library to handle database connections and queries, and environment variables for secure configuration.  

This project is intentionally **minimalist** — making it a great starting point for students, backend developers, or anyone learning how to integrate PostgreSQL into a Node.js application.

---

## 📖 Table of Contents
1. [Features](#-features)  
2. [Technologies Used](#-technologies-used)  
3. [Project Structure](#-project-structure)  
4. [Getting Started](#-getting-started)  
5. [Sample Code](#-sample-code-appjs)  
6. [How It Works](#-how-it-works)  
7. [Example Output](#-example-output)  
8. [Use Cases](#-use-cases)  
9. [Future Improvements](#-future-improvements)  
10. [License](#-license)  

---

## ✨ Features

- 🔑 **Environment Variable Support** — Credentials managed via `.env` file for better security.  
- 🗄️ **Database Connectivity** — Easily connect to PostgreSQL instances.  
- 📝 **Sample Query Execution** — Executes a `SELECT * FROM users` query.  
- 🛡 **Error Handling** — Handles both connection and query errors gracefully.  
- 🧩 **Minimal & Extensible** — Designed as a small, readable script you can expand into a larger app.  

---

## 🛠 Technologies Used

- **Node.js** → JavaScript runtime environment  
- **pg (node-postgres)** → PostgreSQL client for Node.js  
- **dotenv** → Secure environment variable management  

---

## 📂 Project Structure

```bash
.
├── node_modules/        # Installed dependencies
├── .env.exp             # Example environment file
├── .gitattributes       # Git configuration
├── app.js               # Main Node.js script
├── package-lock.json    # Auto-generated lock file
└── package.json         # Project metadata and dependencies
