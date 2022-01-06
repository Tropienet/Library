const display = document.querySelector(".displayButton");
const container = document.querySelector(".container");
const newBookButton = document.querySelector(".newBookButton");

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//addBookToLibrary.prototype = Object.create(Book.prototype);

function displayBooks(){
    for(let i = 0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
    }
}

display.addEventListener('click', () =>{
    removeDisplayFromPage();
    displayBooksOnPage();
})


function displayBooksOnPage(){
    for(let i = 0;i<myLibrary.length;i++){
        console.log("Button works");
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPageCount = document.createElement('p');
        const bookReadStatus = document.createElement('p');
        bookTitle.textContent = `Book title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Book author: ${myLibrary[i].author}`;
        bookPageCount.textContent = `Book page count: ${myLibrary[i].pages}`;
        bookReadStatus.textContent = `Book read status: ${myLibrary[i].read}`;
        bookCard.setAttribute('class', 'bookCard');
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPageCount);
        bookCard.appendChild(bookReadStatus);
        container.appendChild(bookCard);
    }
}

newBookButton.addEventListener('click', () =>{
    addNewBook();
})

function addNewBook(){
    const newBookForm = document.createElement('form');
    newBookForm.setAttribute('class', 'newBook');
    getTitle(newBookForm);
    getAuthor(newBookForm);
    getPages(newBookForm);
    getReadStatus(newBookForm);
    createNewBookButton(newBookForm);
    
    container.appendChild(newBookForm);
    console.log("succesfuly created newBook Form");
}


function getTitle(bookForm){
    const inputDescription = document.createElement('p');
    inputDescription.textContent = "Please enter the title of the book";
    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'title');

    bookForm.appendChild(inputDescription);
    bookForm.appendChild(titleInput);
}

function getAuthor(bookForm){
    const inputDescription = document.createElement('p');
    inputDescription.textContent = "Please enter the Author of the book";
    const authorInput = document.createElement('input');
    authorInput.setAttribute('class', 'author');

    bookForm.appendChild(inputDescription);
    bookForm.appendChild(authorInput);
    
}

function getPages(bookForm){
    const inputDescription = document.createElement('p');
    inputDescription.textContent = "Please enter the Number of pages of the book";
    const pageCountInput = document.createElement('input');
    pageCountInput.setAttribute('class', 'pageCount');

    bookForm.appendChild(inputDescription);
    bookForm.appendChild(pageCountInput); 
}


function getReadStatus(bookForm){
    const inputDescription = document.createElement('p');
    inputDescription.textContent = "Please enter have you read the book";
    const readStatus = document.createElement('input');
    readStatus.setAttribute('class', 'readStatus');

    bookForm.appendChild(inputDescription);
    bookForm.appendChild(readStatus); 
}

function addBookToLibrary(){
    console.log("addBookTolibrary starts");
    const currentBook = new Book("", "", "", "");
    getBookContentToAddToLibrary(currentBook);
    
    myLibrary.push(currentBook);
    
 }

 function getBookContentToAddToLibrary(book){
     const title = document.querySelector('.title');
     const author = document.querySelector('.author');
     const pageCount = document.querySelector('.pageCount');
     const readStatus = document.querySelector('.readStatus');

     book.title = title.value;
     
     book.author = author.value;
     
     book.pages = pageCount.value;
     book.read = readStatus.value;
 }

 function createNewBookButton(bookForm){
     const newBookButtonOnForm = document.createElement('button');
     newBookButtonOnForm.textContent = "Add book to library";
     newBookButtonOnForm.setAttribute('class', 'newBookButtonOnForm');

     newBookButtonOnForm.addEventListener('click', () =>{
        console.log("newBook button works");
        addBookToLibrary();
        deleteForm();
        deleteNewBookButton();
     })


     container.appendChild(newBookButtonOnForm);
     console.log("succesfuly created newBook FormButton");
 }

 function deleteForm(){
     const form = document.querySelector('.newBook');
     form.remove();
 }

 function deleteNewBookButton(){
     const newBookButton = document.querySelector('.newBookButtonOnForm');
     newBookButton.remove();
 }

 function removeDisplayFromPage(){
     const buttonForRemovingDisplay = document.createElement('button');
     container.appendChild(buttonForRemovingDisplay);
    buttonForRemovingDisplay.textContent= "Remove display from page";
     buttonForRemovingDisplay.addEventListener('click', ()=>{
        const bookCard = document.querySelector('.bookCard');
        bookCard.remove();
        buttonForRemovingDisplay.remove();
     })

 }