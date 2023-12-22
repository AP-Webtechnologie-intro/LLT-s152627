function performSearch(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the search input value
  var searchInput = document.getElementById('searchInput').value;

  // Perform the search (replace this with your actual search logic)
  alert('Searching for: ' + searchInput);
}