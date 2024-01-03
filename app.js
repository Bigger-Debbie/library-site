const modal = document.querySelector('.book-modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-btn');
const bookForm = document.querySelector('#book-form');
const gridContainer = document.querySelector('.grid-container');
const myLibrary = [];

openModal.addEventListener('click', () => {
    modal.showModal();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.close();
    bookForm.reset();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = Number(document.getElementById("pages").value);
    let read = document.getElementById("read").value;

    let newChild = document.createElement('div');
    newChild.setAttribute('class', 'child')
    gridContainer.appendChild(newChild);
});