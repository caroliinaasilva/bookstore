const books = require('../database')
const read = require('readline-sync')

const listUnreadBooks = () => {
    const initialOption = read.question('Would you like to see unread books? Y/N: ').toUpperCase()

    if (initialOption === 'Y') {
        const unreadBooks = books.filter(book => book.read === false)
        console.table(unreadBooks)
    } else {
        console.log(`It's ok, you can choose another option`)
    }
}

module.exports = listUnreadBooks