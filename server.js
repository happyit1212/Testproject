const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Replace with your MySQL username
    password: '',      // Replace with your MySQL password
    database: 'mydatabase' // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get data from MySQL
app.get('/api/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);

//     // Open index.html in the default browser
//     open(`http://localhost:${PORT}`);
// });

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/submit-keywords', (req, res) => {
    const inputValue = req.body['inputValue'];

    console.log(inputValue);

    // SQL query to get all rows from the book table
    const sqlQuery = 'SELECT * FROM book';

    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        // Find the first row where the Title starts with inputValue
        const matchingRow = results.find(row => {
            return row.Title && row.Title.startsWith(inputValue);
        });

        console.log(matchingRow);

        if (matchingRow) {
            // If a matching row is found, return it
            res.status(200).json({ message: 'Matching row found', data: matchingRow });
        } else {
            // If no matching row is found, return a 404
            res.status(404).json({ message: 'No matching title found' });
        }
    });
});

