const express = require('express');
const app = express();

app.use(express.json());

let books = [];

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Book API");
});

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.send("Book added successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});