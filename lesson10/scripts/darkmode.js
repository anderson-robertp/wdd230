// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox element
    var darkModeToggle = document.getElementById("darkModeToggle");

    // Add event listener for change event
    darkModeToggle.addEventListener("change", function() {
        // Toggle dark mode by toggling a class on the body
        document.body.classList.toggle("dark-mode");

        // Toggle sun and moon icons
        var sunIcon = document.querySelector('.sun-icon');
        var moonIcon = document.querySelector('.moon-icon');
        sunIcon.style.display = darkModeToggle.checked ? 'none' : 'inline-block';
        moonIcon.style.display = darkModeToggle.checked ? 'inline-block' : 'none';

        // Save the user's preference in local storage
        localStorage.setItem("darkMode", darkModeToggle.checked);
    });

    // Check if dark mode preference is stored in local storage
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    // Set initial state based on stored preference
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
});