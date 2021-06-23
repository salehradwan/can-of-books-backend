
const userModel = require('../models/User.model').userModel;

const getBooks = (request, response) => {

    const { email } = request.query;
    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const createBook = (request, response) => {
    // we need to get the email of the person and the cat name to add to that person

    // console.log(request.body)
    const { email, bookName, description, status } = request.body;
    // console.log('inside user email', email);
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            // here we are going to add the new cat
            // console.log('inside create book', userData);
            userData.books.push({ name: bookName,
                description,
                status
            });
            userData.save();
            response.json(userData);
        }
    })
}

const updateBook = (request, response) => {
    // console.log(request.params)
    const bookIndex = request.params.book_idx;
    const { email, bookName, description, status} = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1, { name: bookName,
                description,
                status
            });
            userData.save();
            response.send(userData)
        }

    });
}

const deleteBook = (request, response) => {
    // console.log(request.params)
    const bookIndex = request.params.book_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1);
            userData.save();
            response.send(userData)
        }

    });
}

module.exports ={ getBooks,
    createBook,
    updateBook,
    deleteBook}
