
const table = document.querySelector("tbody");
const form = document.querySelector("form");



table.addEventListener("click", (e) => {
    if (e.target.classList.contains("action"))
    {
        (e.target.closest("tr")).remove();
    }
})

Book.count = 0;
function Book(title, author, pages, status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = '';

    Book.count++;
}


let bookCollection = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);


        const book = new Book
        (
            formData.get("title"), 
            formData.get("author"), 
            formData.get("pages"), 
            formData.get("status")
        );

        book.id = crypto.randomUUID();

    bookCollection.push(book);


    const row = table.insertRow(-1);
    const values = Object.values(book);
    
    row.insertCell(0).innerText = `${Book.count}`;
    for (let i = 1; i < 6; i++)
        {
            row.insertCell(i).innerText = values[i - 1];
        } 

    const actioncell = row.insertCell(-1);
    actioncell.innerHTML = '<button class="action">Remove</button>';

    form.reset();
})



