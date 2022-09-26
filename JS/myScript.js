// // LIBRARY ARRAY
// let Library = [];

// const submit = document.querySelector('#submit');
// let bkTitle = document.querySelector('#bk-title');
// let bkAuthor = document.querySelector('#bk-author');
// let bkGenre = document.querySelector('#bk-genre');
// let bkPages = document.querySelector('#pages');
// let bkRead = document.getElementsByName('read-radio');

// // CARD ELEMENTS
// let cardBody;
// let card;
// let title;
// let author;
// let genre;
// let pages;
// let read;
// let delBtn;

// //BOOK HOLDER
// const bkHolder = document.querySelector('.bk-holder');

// // ADDBTN ON PAGE
// const addBtn = document.querySelector('#addBtn');

// // FORM HOLDER VARIABLE
// const formHolder = document.querySelector('.form-holder');

// // BOOK OBJECT CONSTRUCTOR
// function Book(title, author, genre, pages) {
//   this.title = title;
//   this.author = author;
//   this.genre = genre;
//   this.pages = pages;
// }

// Book.prototype.info = function () {
//   console.log(`${title} by ${author}, has ${pages} pages`);
// };

// function deleteCard(el) {
//   if (el.classList.contains('delete-btn')) {
//     el.parentNode.parentNode.remove();
//     // console.log('removed')
//   }
// }

// // FUNCTION TO CLOSE FORM POPUP
// function closeFormPopup() {
//   window.addEventListener('click', (e) => {
//     if (e.target == formHolder) {
//       formHolder.style.display = 'none';
//     }
//   });
// }

// // FUNCTION CALLED TO ADD BOOK
// function clickAddBook() {
//   // DISPLAYS FORM POPUP
//   addBtn.addEventListener('click', () => {
//     formHolder.style.display = 'flex';
//   });

//   // CALLS THE FUNCTION TO CLOSE THE FORM POPUP
//   closeFormPopup();
// }

// // CREATING CARD ELEMENTS
// function createCard() {
//   card = document.createElement('div');
//   cardBody = document.createElement('div');
//   title = document.createElement('h2');
//   author = document.createElement('h3');
//   genre = document.createElement('h3');
//   pages = document.createElement('h3');
//   //   read = document.createElement('h3');
//   delBtn = document.createElement('a');

//   delBtn.classList.add('btn', 'btn-danger', 'delete-btn');
//   //   read.classList.add('card-subtitle');
//   genre.classList.add('card-subtitle');
//   pages.classList.add('card-subtitle');
//   author.classList.add('card-subtitle');
//   title.classList.add('card-subtitle');
//   cardBody.classList.add('card-body');
//   card.classList.add('card', 'col-md-3', 'flex-row');
//   bkHolder.classList.add('row');

//   cardBody.append(title, author, genre, pages, /*read,*/ delBtn);
//   card.append(cardBody);
//   bkHolder.append(card);
// }

// // INSERTS VALUE FROM OBJ INTO TEMPLATE HTML
// function insertIntoCard(obj) {
//   title.innerText = `Title: ${obj.title}`;
//   author.innerText = `Author: ${obj.author}`;
//   genre.innerText = `Genre: ${obj.genre}`;
//   pages.innerText = `Pages: ${obj.pages}`;
// }

// // DELETE BTN INITIALISATION
// function deleteIniti() {
//   delBtn.innerText = `Delete`;
//   cardBody.addEventListener('click', (e) => {
//     deleteCard(e.target);
//   });
// }

// // FUNCTION THAT LOOPS THROUGH THE LIBRARY AND DISPLAYS TO THE WINDOW
// function displayBook(obj) {
//   createCard();
//   insertIntoCard(obj);
//   deleteIniti();
// }

// function displayAllBooks() {
//   for (const book in myLibrary) {
//     createCard();
//     insertIntoCard(book);
//     deleteIniti();
//   }
// }

// function addBookToLibrary(e) {
//   e.preventDefault();

//   if (
//     bkTitle.value !== '' &&
//     bkAuthor.value !== '' &&
//     bkGenre.value !== '' &&
//     bkPages.value !== ''
//   ) {
//     const aBook = new Book(
//       bkTitle.value,
//       bkAuthor.value,
//       bkGenre.value,
//       bkPages.value
//     );
//     console.log(bkAuthor.value);
//     Library.push(aBook);
//     document.forms[0].reset();
//     formHolder.style.display = 'none';

//     //   DISPLAY BOOKS
//     console.log(aBook);
//     displayBook(aBook);
//   }
// }

// // THIS FUNCTION RUNS WHEN START OF THE PAGE #IT'S AN IIFYM
// (function startProgram() {
//   clickAddBook();
//   document.addEventListener('DOMContentLoaded', () => {
//     submit.addEventListener('click', addBookToLibrary);
//   });
//   // displayBooks();
// })();

// LIBRARY ARRAY
let Library = [];

const submit = document.querySelector('#submit');
let bkTitle = document.querySelector('#bk-title');
let bkAuthor = document.querySelector('#bk-author');
let bkGenre = document.querySelector('#bk-genre');
let bkPages = document.querySelector('#pages');
let bkRead = document.getElementsByName('checkbox').checked;
var radios = document.getElementsByName('read-radio');

// CARD ELEMENTS
let cardBody;
let card;
let title;
let author;
let genre;
let pages;
let read;
let delBtn;

//BOOK HOLDER
const bkHolder = document.querySelector('.bk-holder');

// ADDBTN ON PAGE
const addBtn = document.querySelector('#addBtn');

// FORM HOLDER VARIABLE
const formHolder = document.querySelector('.form-holder');

// BOOK OBJECT CONSTRUCTOR
function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readTogggle = function () {
  if (this.read == true) {
    this.read = false;
  } else {
    this.read = true;
  }
};

function radioLoop() {
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      bkRead = radios[i].value;

      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
}

function deleteCard(el) {
  if (el.classList.contains('delete-btn')) {
    el.parentNode.parentNode.remove();
    // console.log('removed')
  }
}

// FUNCTION TO CLOSE FORM POPUP
function closeFormPopup() {
  window.addEventListener('click', (e) => {
    if (e.target == formHolder) {
      formHolder.style.display = 'none';
    }
  });
}

// FUNCTION CALLED TO ADD BOOK
function clickAddBook() {
  // DISPLAYS FORM POPUP
  addBtn.addEventListener('click', () => {
    formHolder.style.display = 'flex';
  });

  // CALLS THE FUNCTION TO CLOSE THE FORM POPUP
  closeFormPopup();
}

// CREATING CARD ELEMENTS
function createCard() {
  card = document.createElement('div');
  cardBody = document.createElement('div');
  title = document.createElement('h2');
  author = document.createElement('h3');
  genre = document.createElement('h3');
  pages = document.createElement('h3');
  read = document.createElement('h3');
  delBtn = document.createElement('a');

  delBtn.classList.add('btn', 'btn-danger', 'delete-btn');
  read.classList.add('card-subtitle');
  genre.classList.add('card-subtitle');
  pages.classList.add('card-subtitle');
  author.classList.add('card-subtitle');
  title.classList.add('card-subtitle');
  cardBody.classList.add('card-body');
  card.classList.add('card', 'col-md-3', 'flex-row');
  bkHolder.classList.add('row');

  cardBody.append(title, author, genre, pages, read, delBtn);
  card.append(cardBody);
  bkHolder.append(card);
}

// INSERTS VALUE FROM OBJ INTO TEMPLATE HTML
function insertIntoCard(obj) {
  title.innerText = `Title: ${obj.title}`;
  author.innerText = `Author: ${obj.author}`;
  genre.innerText = `Genre: ${obj.genre}`;
  pages.innerText = `Pages: ${obj.pages}`;
  console.log(obj.read);
  if (obj.read == true) {
    read.innerText = `read: yes`;
  } else {
    read.innerText = `read: no`;
  }
}

// DELETE BTN INITIALISATION
function deleteIniti() {
  delBtn.innerText = `Delete`;
  cardBody.addEventListener('click', (e) => {
    deleteCard(e.target);
  });
}

// FUNCTION THAT LOOPS THROUGH THE LIBRARY AND DISPLAYS TO THE WINDOW
function displayBook(obj) {
  createCard();
  insertIntoCard(obj);
  deleteIniti();
}

function displayAllBooks() {
  for (const book in myLibrary) {
    createCard();
    insertIntoCard(book);
    deleteIniti();
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  bkRead = document.getElementById('checkbox').checked;
  //   radioLoop();
  //console.log(bkRead.value);

  if (
    bkTitle.value !== '' &&
    bkAuthor.value !== '' &&
    bkGenre.value !== '' &&
    bkPages.value !== ''
  ) {
    const aBook = new Book(
      bkTitle.value,
      bkAuthor.value,
      bkGenre.value,
      bkPages.value,
      bkRead
    );
    console.log(bkAuthor.value);
    Library.push(aBook);
    document.forms[0].reset();
    formHolder.style.display = 'none';

    //   DISPLAY BOOKS
    console.log(aBook);
    displayBook(aBook);
  }
}

// THIS FUNCTION RUNS WHEN START OF THE PAGE #IT'S AN IIFYM
(function startProgram() {
  clickAddBook();
  document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', addBookToLibrary);
  });
  // displayBooks();
})();
