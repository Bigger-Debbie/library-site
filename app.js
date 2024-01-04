const modal = document.querySelector('.book-modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-btn');
const bookForm = document.querySelector('#book-form');
const gridContainer = document.querySelector('.grid-container');
const books = [
    {
        'title': 'Lord of the Rings',
        'by': 'J.R.R Tolkien',
        'read': false,
        'pages': 1216
    }
]

openModal.addEventListener('click', () => {
    modal.showModal();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.close();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = Number(document.getElementById("pages").value);
    let read = document.getElementById("read").checked;
    
    if (read) {
        read = true;
    } else {
        read = false;
    }

    let newBook = new Book(title, author, pages, read)
    books.push(newBook);
    console.log(books);
    createBookCard(newBook);
    bookForm.reset();   
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBookCard(book) {
    let card = document.createElement('div');
    card.setAttribute('class', 'child');

    let header = document.createElement('h1');
    header.textContent = `${book.title}`;
    let vertDiv = document.createElement('div');
    vertDiv.setAttribute('class', 'vert-div');
    let authInfo = document.createElement('h2');
    authInfo.textContent = `By: ${book.author}`;
    authInfo.setAttribute('class', 'info');
    let readInfo = document.createElement('h2');
    readInfo.textContent = `Read Before: ${book.read === true ? 'Yes' : 'No'}`;
    readInfo.setAttribute('class', 'info');
    let pageInfo = document.createElement('h2');
    pageInfo.textContent = `Pages: ${book.pages}`;
    pageInfo.setAttribute('class', 'info');
    let resetBtn = document.createElement('button');
    resetBtn.setAttribute('class', 'btn info-reset');
    resetBtn.textContent = 'Read Reset';

    card.appendChild(header);
    card.appendChild(vertDiv);
    card.appendChild(authInfo);
    card.appendChild(readInfo);
    card.appendChild(pageInfo);
    card.appendChild(resetBtn);
    gridContainer.appendChild(card);
}