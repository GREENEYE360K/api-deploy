const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Define port - Heroku will provide a PORT environment variable
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to your simple Node.js API!',
    status: 'API is running'
  });
});

// Sample API endpoints
app.get('/api/items', (req, res) => {
  // Example data
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  
  // In a real app, you would save this to a database
  console.log('Received new item:', newItem);
  
  res.status(201).json({
    message: 'Item created successfully',
    item: newItem
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});