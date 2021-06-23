
const mongoose = require('mongoose');
const bookSchema = require('./Book.model');

const userSchema = new mongoose.Schema({
    email: { unique: true,
        type: String 
    },
    books: [bookSchema]
});

const userModel = mongoose.model('users', userSchema);

const seedUserData = () => {
    const newUser = new userModel({
        email: 'aburadwansaleh@gmail.com',
        books: [
            {   name: 'Aleph',
                description: 'The book tells the story of his own epiphany while on a pilgrimage through Asia in 2006 on the Trans-Siberian Railway',
                status: 'Published'
            },
            {
                name: 'The Catcher in the Rye',
                description: 'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951',
                status: 'NotPublished'
            },
            {
                name: 'Pride and Prejudice',
                description: 'Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. Its humour lies in its honest depiction of manners, education, marriage, and money during the Regency era in England.',
                status: 'Published'
            }
           
        ]
    });
    newUser.save();
};

module.exports = {seedUserData, userModel};

