document.addEventListener("DOMContentLoaded", function() {
    var darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
        var sunIcon = document.querySelector('.sun-icon');
        var moonIcon = document.querySelector('.moon-icon');
        sunIcon.style.display = darkModeToggle.checked ? 'none' : 'inline-block';
        moonIcon.style.display = darkModeToggle.checked ? 'inline-block' : 'none';
    
        localStorage.setItem("darkMode", darkModeToggle.checked);
    });

    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        var sunIcon = document.querySelector('.sun-icon');
        var moonIcon = document.querySelector('.moon-icon');
        sunIcon.style.display = darkModeToggle.checked ? 'none' : 'inline-block';
        moonIcon.style.display = darkModeToggle.checked ? 'inline-block' : 'none';
    }
});