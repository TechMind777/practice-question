//https://www.interviewkickstart.com/blogs/interview-questions/advanced-node-js-interview-questions

// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define another route for a different endpoint
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// module.exports = abc or module.exports = {}