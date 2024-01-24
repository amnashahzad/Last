const express = require('express');
const app = express();

let users = require("./routes/users");
// Ensure the users route file exports an Express router

// Remove the incorrect require statement
// let addIser = require("");

// Ensure the users router is properly exported from './routes/users'
// app.use("/api/auth", users); // Use this if 'users' includes auth routes

app.use("/users", users); // Handles user-related routes

app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
