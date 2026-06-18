// Add the signature Amazon focus glow to the search bar
const searchInput = document.querySelector('.search-input');
const navSearchContainer = document.querySelector('.nav-search');

searchInput.addEventListener('focus', () => {
    // When input is clicked, add the orange box-shadow
    navSearchContainer.style.boxShadow = '0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5)';
});

searchInput.addEventListener('blur', () => {
    // Remove the glow when the user clicks away
    navSearchContainer.style.boxShadow = 'none';
});

// Simple logic to handle dropdown selection width
const searchDropdown = document.querySelector('.search-dropdown');
searchDropdown.addEventListener('change', (e) => {
    // In a full build, this adjusts the width of the dropdown based on text length
    console.log(`Search category changed to: ${e.target.value}`);
});