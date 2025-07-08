const express = require('express');
const app = express();
const cors = require('cors');

const roleRoutes = require('./routes/roleRoutes');

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Route middleware
app.use('/api/roles', roleRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Role-Based Dashboard API');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
