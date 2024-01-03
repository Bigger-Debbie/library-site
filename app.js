const modal = document.querySelector('.book-modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-btn');
const myLibrary = [];

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
})

