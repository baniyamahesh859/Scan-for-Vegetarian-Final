const express = require('express');
const router = express.Router();
const { connectDB } = require('../config/database');

// Route to check if an ingredient is vegetarian
router.get('/:name', async (req, res) => {
    const ingredientName = req.params.name.toLowerCase();
    console.log('Ingredient received from frontend:', ingredientName); // Log the ingredient received

    try {
        const db = await connectDB();
        console.log('Database connected successfully'); // Log successful database connection

        // Query the database
        const [rows] = await db.execute(
            'SELECT * FROM ingredients WHERE LOWER(name) = ?',
            [ingredientName]
        );

        if (rows.length > 0) {
            const ingredient = rows[0];
            console.log('Ingredient found:', ingredient); // Log the ingredient found
            res.json({ name: ingredient.name, isVegetarian: ingredient.is_vegetarian });
        } else {
            console.log('Ingredient not found in the database.'); // Log if no ingredient is found
            res.status(404).json({ message: 'Ingredient not found' });
        }
    } catch (error) {
        console.error('Error querying the database:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Export the router
module.exports = router;
