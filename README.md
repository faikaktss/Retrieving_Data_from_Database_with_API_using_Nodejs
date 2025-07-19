.# Minimalist PostgreSQL Query Script with Node.js

## About

This project is a minimalist script that demonstrates how to connect to a PostgreSQL database and execute a simple SQL `SELECT` query using **Node.js** and the **pg (Node-Postgres)** library.  
Database connection details are securely managed through environment variables (`.env`).  
This script can be used in larger Node.js applications.

## Features

- Connects to a PostgreSQL database using credentials from `.env`
- Executes a `SELECT * FROM users` SQL query
- Logs the retrieved data in the console
- Gracefully handles connection and query errors

## Technologies Used

- Node.js
- pg (node-postgres)
- dotenv

## Project Structure

```
.
├── node_modules/
├── .env.exp
├── .gitattributes
├── app.js
├── package-lock.json
└── package.json
```

## Sample Code (app.js)

```js
const { Client } = require('pg'); // Import pg Client
require('dotenv').config(); // Load .env file

const client = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
});

client.connect()
    .then(() => {
        console.log("Veritabanına bağlandı");
    })
    .catch(err => console.log("Bağlantı hatası", err));

client.query('SELECT * FROM users', (err, res) => {
    if (err) {
        console.log('Sorgu hatası', err);
    } else {
        console.log(res.rows);
    }
    client.end();
});
```

## Setup

1. Install dependencies:
    ```bash
    npm install
    ```

2. Create a `.env` file with the following content:
    ```env
    DATABASE_USER=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_NAME=your_database
    ```

3. Run the application:
    ```bash
    node app.js
    ```

## License

This project is open-source and free to use.
