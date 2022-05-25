const booksByCategory = [
    {
        category: "Ficção Cientifica",
        books: [
            {
                title:"Duna",
                author:"Frank Herbert"
            },
            {
                title:"1984",
                author:"George Orwell"
            },
            {
                title:"Foundation",
                author:"Isaac Asimov"
            },
        ],
    },
    {
        category: "Fantasia",
        books: [
            {
                title:"Sociedade do Anel",
                author:"J.R.R. Tolkien"
            },
            {
                title:"Guerra dos Tronos",
                author:"George R.R. Martin"
            },
            {
                title:"Retorno do Rei",
                author:"J.R.R. Tolkien"
            },
        ],
    }
]

const totalCategories = booksByCategory.length;

console.log('O total de categorias é: ', totalCategories)
for(let category of booksByCategory){
    console.log('Total de livros da categoria ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }

    console.log('total de autores: ', authors.length)
}

countAuthors()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title);
            }
        }
    }

    console.log('Livros do autor '+author+': ', books.join(", "))
}

booksOfAuthor('Isaac Asimov');