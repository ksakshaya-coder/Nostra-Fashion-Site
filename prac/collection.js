document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.querySelector(".product-search input[type='text']"); // Selecting the search input
    var productSections = document.querySelectorAll(".product-sections .items"); // Selecting all items within product-sections

    searchInput.addEventListener("keyup", function(event) {
        var enteredValue = event.target.value.trim().toUpperCase(); // Trimmed and converted to uppercase
        productSections.forEach(function(item) {
            var productName = item.querySelector("p").textContent.toUpperCase(); // Get item's text content
            
            // Check if enteredValue is found in productName
            if (productName.indexOf(enteredValue) > -1) {
                item.style.display = "block"; // Show matching items
            } else {
                item.style.display = "none"; // Hide non-matching items
            }
        });
    });
});
