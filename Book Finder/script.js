// Click handler for search button
const captureSearchValue = () => {
    const searchInput = document.querySelector("#search-bar");
    const value = searchInput ? searchInput.value.trim() : "";
    console.log("Captured Search Value:", value); // Debugging statement
    return value;
};

// Filter books based on search input
const filterBooks = (searchString, books) => {
    console.log("Filtering books with:", searchString); // Debugging statement
    const searchLower = searchString.toLowerCase();
    return books.filter(book => 
        book.title.toLowerCase().includes(searchLower) || 
        book.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBooks) => {
    console.log("Structuring books as HTML:", filteredBooks); // Debugging statement
    return filteredBooks.map(book => structureBookAsHtml(book));
};

// Display a "No results found" message
const displayNoResultsMessage = () => {
    const bookListContainer = document.querySelector("#bookList");
    bookListContainer.innerHTML = "<p>No results found</p>";
};

// Handler triggered when a user clicks the "Search" button
const searchBtnClickHandler = (books) => {
    console.log("Search button clicked"); // Debugging statement

    const searchString = captureSearchValue();
    console.log("Search String:", searchString); // Debugging statement

    const filteredBooks = filterBooks(searchString, books);
    console.log("Filtered Books:", filteredBooks); // Debugging statement

    if (filteredBooks.length === 0) {
        displayNoResultsMessage();
    } else {
        const bookElements = structureBooksAsHtml(filteredBooks);
        console.log("Book Elements:", bookElements); // Debugging statement

        renderBooksToDom(bookElements);
    }
};

// Ensure bookList is available
console.log("Books Data:", books); 

// Grab search button from the DOM
const searchBtn = document.querySelector("#search-btn");

// Ensure search button is found and has event listener
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        searchBtnClickHandler(books);
    });
} else {
    console.error("Search button not found"); 
}
