const read = require ('readline-sync')
const findBooks = require ('./controllers/findBooks')
const listRecommendedBooks = require ('./controllers/listRecommendedBooks')
const listSortedBooks = require ('./controllers/listSortedBooks')
const listUnreadBooks = require ('./controllers/listUnreadBooks')


const answer =  read.question(`
===================MENU====================
1 - CATEGORY: Finding books for category
2 - TO ORDER: Ordering books for pages quantity
3 - RECOMMENDED: Finding recommended books
4 - WISH LIST: Finding unred books 

5 - EXIT

Type a number[1-5]:
`)

switch(answer) {
    case '1':
        findBooks()
     break
    case '2':
       listSortedBooks()
    break   
    case '3':
        listRecommendedBooks()
    break
    case '4':
        listUnreadBooks()
    break    
        
}
