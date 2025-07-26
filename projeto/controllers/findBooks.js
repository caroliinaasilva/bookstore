const books = require('../database')
const read = require('readline-sync')


const findBooks = () => {
const initialOption = read.question('Would you like find your book per Category? Y/N').toUpperCase()
    
    if (initialOption === 'Y') {
        const category = books.map (book => book.category)
        console.table(category)

const inputCategories = read.question('Please type a category as shown in the table above')
const confirmation = read.question(' are you sure ? Y/N').toUpperCase()  

    if (confirmation === 'Y'){
const sortedBooks = books.filter(book => book.category === inputCategories)
    console.table(sortedBooks)
}

} else {
    console.log(`It's ok, you can choose another one`)
}

} 


module.exports = findBooks
