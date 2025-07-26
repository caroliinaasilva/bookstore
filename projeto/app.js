const books = require ('./database')
const read = require ('readline-sync')


const answer =  read.question(`
===================MENU====================
1 - CATEGORY: Finding books for category
2 - TO ORDER: Ordering books for pages quantity
3 - RECOMMENDED: Finding recommended books
4 - WISH LIST: Finding unred books 

5 - EXIT

Type a number[1-5]:
    


`)

console.log(answer)
