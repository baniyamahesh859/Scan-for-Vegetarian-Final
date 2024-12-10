const { connectDB } = require('./config/database');

const testDatabaseConnection = async () => {
    try {
        const db = await connectDB();
        const [rows] = await db.execute('SHOW TABLES;');
        console.log('Tables in the database:', rows);
        db.end();
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

testDatabaseConnection();
