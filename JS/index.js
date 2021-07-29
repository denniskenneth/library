/**
 * VARIABLE AND CONST DECLARATIONS
 */ 
// LIBRARY ARRAY
let myLibrary = [
    {
        title: 'all alone',
        author: 'dave'
    },
    {
        title: 'CLB',
        author: 'Drake'
    }
];

//BOOK HOLDER
const bkHolder = document.querySelector(".bk-holder");

// ADDBTN ON PAGE
const addBtn = document.querySelector('#addBtn'); 

// FORM HOLDER VARIABLE
const formHolder = document.querySelector('.form-holder')

// FUNCTION TO CLOSE FORM POPUP
function closeFormPopup() {
    window.addEventListener('click', (e) => {
        if (e.target == formHolder){
            formHolder.style.display = 'none';
        }
    })
}

// FUNCTION CALLED TO ADD BOOK
function clickAddBook() {

    // DISPLAYS FORM POPUP
    addBtn.addEventListener('click', ()=>{
        formHolder.style.display = 'flex';
    });

    // CALLS THE FUNCTION TO CLOSE THE FORM POPUP
    closeFormPopup();
};

// FUNCTION THAT LOOPS THROUGH THE LIBRARY AND DISPLAYS TO THE WINDOW
function displayBooks(){
    myLibrary.forEach((book) => {
        // CREATING CARD ELEMENTS
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("h3");
        const genre = document.createElement("h3");
        const pages = document.createElement("h3");
        const read = document.createElement("h3")
        // 
        author.classList.add("card-subtitle");
        title.classList.add("card-subtitle");
        cardBody.classList.add("card-body");
        card.classList.add("card", "col-md-3", "flex-row");
        bkHolder.classList.add("row");

        cardBody.append(title, author);
        card.append(cardBody);
        bkHolder.append(card);

        title.innerText = `Title: ${book.title}`;
        author.innerText = `Author: ${book.author}`;
    })
}

// THIS FUNCTION RUNS WHEN START OF THE PAGE #IT'S AN IIFYM
(function startProgram() {
    clickAddBook();
    displayBooks();
})();