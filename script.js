const library = [];

function Book(title, author, pages, readStatus, id){
  if (!new.target) {
    throw new Error("Book must be called with 'new'");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}
function addToLibrary(title, author, pages, readStatus) {
  const theBook = new Book(title, author, pages, readStatus);
  library.push(theBook);
}

addToLibrary("Don Quixote", "Miguel de Cervantes", 550, "read");
addToLibrary("Wuthering Heights", "Emily Brontë", 728, "not read");
addToLibrary("The Lord of the Rings", "by J.R.R. Tolkien", 1000, "not read");

   const container = document.getElementById("books_container");
   
function displayBooks() {
  for (const books of library){
    const bookLists = document.createElement('p');
    const toggleReadStatus = document.createElement('span');
    const deleteBookCard = document.createElement('span');
    deleteBookCard.innerText = "Delete";
    deleteBookCard.className = 'delete-btn';
    toggleReadStatus.textContent = 'change read status ';
    deleteBookCard.setAttribute("data-id", books.id);
    
    function removeBook(id) {
  const index = library.findIndex(book => book.id === id);
  if (index !== -1) {
    library.splice(index, 1); // Remove book from array
    container.innerHTML = '';
    displayBooks(); // Refresh UI
  }
}

    deleteBookCard.addEventListener("click", () =>{
      removeBook(books.id);
    });
    
    toggleReadStatus.addEventListener("click", () => {
      if (books.readStatus === 'read') {
        books.readStatus = 'not read';
      } else if (books.readStatus === 'not read'){
        books.readStatus = 'read';
      }
      container.innerHTML = '';
      displayBooks();
    });
    bookLists.innerHTML = `Title: ${books.title} <br>
    by<br>
    Author: ${books.author}<br> 
    Pages: ${books.pages} pages<br><br>
    ${books.readStatus}<br><br>`;
    container.appendChild(bookLists);
    bookLists.appendChild(toggleReadStatus);
    bookLists.appendChild(deleteBookCard)
  }
}
displayBooks();
const modalBtn = document.querySelector("[data-open-modal]");
const dialogModal = document.querySelector("[data-modal]");
modalBtn.addEventListener("click", ()=>{
  dialogModal.showModal();
});
dialogModal.addEventListener("click", e => {
  const dialogDimensions = dialogModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialogModal.close();
  }
});
const newBookForm = document.querySelector('form');
newBookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const author_input = document.getElementById('author');
    const title_input = document.getElementById('title');
    const pages_input = document.getElementById('pages');
    const read_status_check = document.getElementById('read-status');
    const readStatusChecked = read_status_check.checked ? "read" : "not read";
    addToLibrary(author_input.value, title_input.value, pages_input.value,
    readStatusChecked);
    container.innerHTML = '';
      displayBooks();
      dialogModal.close();
      newBookForm.reset();
});
