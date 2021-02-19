// BTN QUERY
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

// LIBRARTY ARRAY
let myLibrary = [
  {
    title: "Certified LoverBoy",
    author: "Drake",
    genre: "R&B and Hip-Hop",
    Pages: "20",
    read: false,
  },
];

// BOOK OBJECT CONSTRUCTOR
function book(title, author, genre, pages, read) {
  this.titile = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

//LOOPING FUNCTION
myLibrary.forEach((book) => {});
