// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors module

const app = express();
const port = 3002; // Change to your desired port

// Use cors middleware
app.use(cors());

// Endpoint to fetch currency data
app.get('/api/currencyInfo/:currency', async (req, res) => {
  const { currency } = req.params;

  try {
    // Fetch currency data from the specified URL
    const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
    const currencyData = response.data[currency];

    res.json(currencyData);
  } catch (error) {
    console.error('Error fetching currency data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Default route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Currency Server!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
