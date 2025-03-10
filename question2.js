const express = require('express'); // Import Express
const app = express(); // Create an Express app
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
  res.send ('Express is working! Toring, Lorenz Lord' ); // Send Json response
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000'); // Log a message when the server starts
});
