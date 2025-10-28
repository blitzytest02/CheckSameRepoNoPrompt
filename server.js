const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Evening endpoint
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
