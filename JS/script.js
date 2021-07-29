
let myLibrary = [];

// FORM
const submit = document.querySelector("#submit");
let bkTitle = document.querySelector("#bk-title");
let bkAuthor = document.querySelector("#bk-author");
let bkGenre = document.querySelector("#bk-genre");
let bkPages = document.querySelector("#pages");
let bkRead = document.getElementsByName('read-radio');
let length = bkRead.length;
let mainRead;
const addBtn = document.querySelector("#addBtn");
// FORM-HOLDER QUERY
const formHolder = document.querySelector(".form-holder");

//FORM POPUP FUNTION
addBtn.addEventListener("click", () => {
  formHolder.style.display = "flex";
});

// WINDOW POPUP *CLOSE FUNCTION
window.addEventListener("click", (e) => {
  if (e.target == formHolder) {
    formHolder.style.display = "none";
  }
});

for (let i = 0; i < length; i++){
  if (bkRead[i].checked) {
    alert(bkRead[i].value);
    mainRead = bkRead[i].value;
    break;
  }
  
}

// BOOK CONSTRUCTOR
function Book(title, author, genre, pages, read) {
  title,
  author,
  genre,
  pages,
  read
}

// ADD BOOK TO LIBRARY ARRAY
/*function addBookToLibrary(e) {
  e.preventDefault();
  let myBook;
  if (
    bkTitle.value !== "" &&
    bkAuthor.value !== "" &&
    bkGenre.value !== "" &&
    bkPages.value !== "" &&
    bkRead.value !== ""
  ) {
    myBook = new book(
      bkTitle.value,
      bkAuthor.value,
      bkGenre.value,
      bkPages.value,
      mainRead.value
    );
    myLibrary.push(myBook);
  }
  document.forms[0].reset();
  formHolder.style.display = "none";

  //BOOK HOLDER
  const bkHolder = document.querySelector(".bk-holder");

  // bkHolder.style.display = "block";
  // CREATING CARD ELEMENTS
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const genre = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("h3");

  read.classList.add("card-subtitle");
  genre.classList.add("card-subtitle");
  pages.classList.add("card-subtitle");
  author.classList.add("card-subtitle");
  title.classList.add("card-subtitle");
  cardBody.classList.add("card-body");
  card.classList.add("card", "col-md-3", "flex-row");
  bkHolder.classList.add("row");

  // cardBody.append(title);
  cardBody.append(title, author, genre, pages, read);
  card.append(cardBody);
  bkHolder.append(card);
  if (myBook.read == 'yes'){
    return read.innerText = "Read: Yes";
  } else if (myBook.read == 'no') {
    return read.innerText = "Read: No";
  }
  pages.innerText = `Pages: ${myBook.pages}`;
  genre.innerText = `Genre: ${myBook.genre}`;
  title.innerText = `Title: ${myBook.title}`;
  author.innerText = `Author: ${myBook.author}`;
}










// BTN QUERY
/*const addBtn = document.querySelector("#addBtn");

// FORM-HOLDER QUERY
const formHolder = document.querySelector(".form-holder");

//FORM POPUP FUNTION
addBtn.addEventListener("click", () => {
  formHolder.style.display = "flex";
});

// WINDOW POPUP *CLOSE FUNCTION
window.addEventListener("click", (e) => {
  if (e.target == formHolder) {
    formHolder.style.display = "none";
  }
});



// BOOK OBJECT CONSTRUCTOR
function book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

// ADD BOOK FROM THE LIBRARY
const addBook = (e) => {
  e.preventDefault();
  if (
    bkTitle.value !== "" &&
    bkAuthor.value !== "" &&
    bkGenre.value !== "" &&
    bkPages.value !== "" &&
    bkRead.value !== ""
  ) {
    let myBook = new book(
      bkTitle.value,
      bkAuthor.value,
      bkGenre.value,
      bkPages.value,
      bkRead.value
    );
    myLibrary.push(myBook);
    console.log(bkRead.value)
  }
  document.forms[0].reset();
  displayBooks();
};

// Add new book from user input function
const newBook = (e) => {
  e.preventDefault();
  let myBook;
  if (
    bkTitle.value !== "" &&
    bkAuthor.value !== "" &&
    bkGenre.value !== "" &&
    bkPages.value !== "" &&
    bkRead.value !== ""
  ) {
    myBook = new book(
      bkTitle.value,
      bkAuthor.value,
      bkGenre.value,
      bkPages.value,
      bkRead.value
    );
    myLibrary.push(myBook);
  }
  document.forms[0].reset();
  formHolder.style.display = "none";

  //BOOK HOLDER
  const bkHolder = document.querySelector(".bk-holder");

  // bkHolder.style.display = "block";
  // CREATING CARD ELEMENTS
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const genre = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("h3");

  read.classList.add("card-subtitle");
  genre.classList.add("card-subtitle");
  pages.classList.add("card-subtitle");
  author.classList.add("card-subtitle");
  title.classList.add("card-subtitle");
  cardBody.classList.add("card-body");
  card.classList.add("card", "col-md-3", "flex-row");
  bkHolder.classList.add("row");

  // cardBody.append(title);
  cardBody.append(title, author, genre, pages, read);
  card.append(cardBody);
  bkHolder.append(card);
  read.innerText = myBook.read ? `Read: Yes` : `Read: No`;
  pages.innerText = `Pages: ${myBook.pages}`;
  genre.innerText = `Genre: ${myBook.genre}`;
  title.innerText = `Title: ${myBook.title}`;
  author.innerText = `Author: ${myBook.author}`;
};

//LOOPING FUNCTION
function displayBooks() {
  myLibrary.forEach((content) => {
    //BOOK HOLDER
    const bkHolder = document.querySelector(".bk-holder");

    // bkHolder.style.display = "block";
    // CREATING CARD ELEMENTS
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const genre = document.createElement("h3");
    const pages = document.createElement("h3");
    const read = document.createElement("h3");

    read.classList.add("card-subtitle");
    genre.classList.add("card-subtitle");
    pages.classList.add("card-subtitle");
    author.classList.add("card-subtitle");
    title.classList.add("card-subtitle");
    cardBody.classList.add("card-body");
    card.classList.add("card", "col-md-4", "flex-row");
    bkHolder.classList.add("row");

    // cardBody.append(title);
    cardBody.append(title, author, genre, pages, read);
    card.append(cardBody);
    bkHolder.append(card);

    read.innerText = content.read ? `Read: Yes` : `Read: No`;
    pages.innerText = `Pages: ${content.pages}`;
    genre.innerText = `Genre: ${content.genre}`;
    title.innerText = `Title: ${content.title}`;
    author.innerText = `Author: ${content.author}`;
  });
}

/

document.addEventListener("DOMContentLoaded", addBook);

console.log(bkRead);
document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", newBook);
});
*/
