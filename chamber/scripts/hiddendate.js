document.getElementById("joinform").addEventListener("submit", function(event) {
    // Prevent the form from submitting to the server
    event.preventDefault();

    let today = Date.now();
;
    console.log(today);

    document.getElementById("subdate").value = today;

    document.getElementById("joinform").submit();
});