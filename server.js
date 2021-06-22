const express = require('express') // require the express package
const app = express();
const mongoose = require('mongoose');
const {
    getBooks,
    createBook,
    updateBook,
    deleteBook
} = require('./controller/book.controller');
// const getBooks = require('./controller/book.controller');
require('dotenv').config();
const PORT = process.env.PORT;
const {seedUserData} = require('./models/User.model');
const cors = require('cors'); // enable the communication between the frontend and the backend
app.use(cors());
// this method is used to decode our request body sent by the post or put methods
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myFavouriteBook',  
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// seedUserData();

// Our Book Routes
// Read route, get all the books by the user email
app.get('/books', getBooks);
// Create route, which will receive new books to be added for the user
app.post('/book', createBook);
// Update route, will will receive the book id that we want to update, and its info in the body payload
app.put('/book/:book_idx', updateBook);
// Delete route, which will delete the cat by its index
app.delete('/book/:book_idx', deleteBook)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});