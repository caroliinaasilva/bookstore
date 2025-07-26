const books = require ('../database')
const read = require ('readline-sync')



const listSortedBooks = () => {
const initialOption = read.question('Would like to see books per pages quantity? Y/N').toUpperCase()    
    if (initialOption === 'Y'){
const pages = books.sort((a, b) =>{
return a.pages - b.pages
        
})
console.table(pages)

} else {
    console.log(`It's ok, you can choose another one`)
}

}

module.exports = listSortedBooks()