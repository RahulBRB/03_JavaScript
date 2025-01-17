const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
let activeCategory = document.querySelector('.category-btn.active')?.dataset.category || "all"; 

// filter products based on search input and active category
function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item'); // Get all product items

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category; // Get the product category

        // Check if product matches the search and active category
        if ((title.includes(searchValue) || searchValue === "") && (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block"; // Show item if match
        } else {
            item.style.display = "none"; // Hide item if no match
        }
    });
}

//Handle category button click and update the active category
function setCategory(e) {
    // Remove active class from all category buttons
    categoryBtns.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    e.target.classList.add('active');

    // Update the active category
    activeCategory = e.target.dataset.category;

    // Call to apply the new category filter
    filterProducts();
}

searchBtn.addEventListener('click', filterProducts);
searchInput.addEventListener('keyup', filterProducts);
categoryBtns.forEach(btn => btn.addEventListener('click', setCategory));

// Initial call to filter products
filterProducts();
