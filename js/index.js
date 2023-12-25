
    // Sample data (replace this with your own data)
    const data = [
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Mango",
        // Add more items as needed
    ];

    // Get references to HTML elements
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Function to perform the search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResults = data.filter(item => item.toLowerCase().includes(searchTerm));

        // Display search results
        searchResults.innerHTML = "";
        filteredResults.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.textContent = result;
            searchResults.appendChild(resultItem);
        });
    }

    // Event listener for the input field
    searchInput.addEventListener("input", performSearch);
