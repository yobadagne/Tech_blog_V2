const mysql = require('mysql2'); // Use mysql2 instead of mysql

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user_password',
    database: 'blog_platform',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
    }
    console.log('Connected to the database.');
});

module.exports = db;
