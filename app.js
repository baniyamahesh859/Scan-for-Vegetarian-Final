const express = require('express');
const cors = require('cors');
const ingredientsRouter = require('./routes/ingredients');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/ingredients', ingredientsRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
