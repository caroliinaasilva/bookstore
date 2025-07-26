const books = require('../database')
const read = require('readline-sync')

const listRecommendedBooks = () => {
    const initialOption = read.question('Would like to search for recommended books Y/N: ').toUpperCase()
    if (initialOption === 'Y') {
        const recomend = books.filter(book => book.recommends === true)
        console.table(recomend)
    } else {
        console.log('No problem, you can choose another option')
    }
}

module.exports = listRecommendedBooks