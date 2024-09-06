$(document).ready(function() {
    // Open menu click event
    document.querySelector("#open-header-menu").addEventListener("click", function() {
        // Hide the open menu icon
        document.getElementById("open-header-menu").classList.add("d-none");
        // Show the close menu icon
        document.getElementById("close-header-menu").classList.remove("d-none");
        // Show the mobile menu
        document.getElementById("mobile-menu").classList.remove("d-none");
    });

    // Close menu click event
    document.querySelector("#close-header-menu").addEventListener("click", function() {
        // Hide the close menu icon
        document.getElementById("close-header-menu").classList.add("d-none");
        // Show the open menu icon
        document.getElementById("open-header-menu").classList.remove("d-none");
        // Hide the mobile menu
        document.getElementById("mobile-menu").classList.add("d-none");
    });

});



