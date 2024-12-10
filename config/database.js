const mysql = require('mysql2/promise');

// Database connection
const connectDB = async () => {
    try {
        console.log('Attempting to connect to the database...');
        const connection = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'mk112233',
            database: 'ingredients',
        });
        console.log('MySQL connected successfully!');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        console.error('Check your database credentials and ensure MySQL is running.');
        process.exit(1);
    }
};


module.exports = { connectDB };
