$(document).ready(function() {
    // open filters
    document.querySelector(".btn.filter").addEventListener("click", function() {
        document.querySelector("body").scroll({ behavior: "instant", top: 0 });
        document.querySelector(".mobile-filtering").style.display = "block";
        document.querySelector("body").style.overflowY = "hidden";

        // TODO: If filters set, make filters button active
        document.querySelector(".btn.filter").classList.toggle("active");
    });

    // close filters
    document.querySelector(".close-filter").addEventListener("click", function() {
        document.querySelector(".mobile-filtering").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    });

    // open sorting
    document.querySelector(".btn.sorting").addEventListener("click", function() {
        document.querySelector("body").scroll({ behavior: "instant", top: 0 });
        document.querySelector(".mobile-sorting").style.display = "block";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".common-overlay").style.display = "block";

        // TODO: If sort set, make sort button active
        document.querySelector(".btn.sorting").classList.toggle("active");
    });

    // close sorting
    document.querySelector(".common-overlay").addEventListener("click", function() {
        console.log("click common-overlay")
        document.querySelector(".common-overlay").style.display = "none";
        document.querySelector(".mobile-sorting").style.display = "none";
    });

    // price ranger
    $("#price_ranger").slider({
        range: true,
    });

    $("#price_ranger_mobile").slider({
        range: true,
    });
});