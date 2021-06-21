
const userModel = require('../models/User.model');

const getBooks = (request, response) => {

    const { email } = request.query;

    userModel.find({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

module.exports = getBooks;