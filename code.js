function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read}`;
  };
}
let firstBook = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'read');
 console.log(firstBook.info());
