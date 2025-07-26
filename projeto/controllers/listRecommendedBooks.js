const books = require('../database')
const read = require ('readline-sync')

const listRecommendedBooks = () => {
const initialOption = read.question ('Would like to search for recommended books Y/N').toUpperCase()
    if (initialOption === 'Y') {
const recomend = books.filter(books => books.recommends === true)
console.log(recomend)
    }
}

module.exports = listRecommendedBooks