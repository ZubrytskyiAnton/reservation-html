$(document).ready(function() {
    // open filters
    document.querySelector(".btn.filter").addEventListener("click", function() {
        showFullScreenModal("mobile-filtering");
        // TODO: If filters set, make filters button active
        document.querySelector(".btn.filter").classList.toggle("active");
    });

    // close filters
    document.querySelector(".close-filter").addEventListener("click", function() {
        closeFullScreenModal("mobile-filtering");
    });

    // open sorting
    document.querySelector(".btn.sorting").addEventListener("click", function() {
        showFullScreenModal("mobile-sorting", true);
        // TODO: If sort set, make sort button active
        document.querySelector(".btn.sorting").classList.toggle("active");
    });

    // close sorting
    document.querySelector(".common-overlay").addEventListener("click", function() {
        closeFullScreenModal("mobile-sorting", true);
    });

    // price ranger
    $("#price_ranger").slider({
        range: true,
    });

    $("#price_ranger_mobile").slider({
        range: true,
    });

    // Image slider

    $(".hotel-list-item__img .slider").slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
    });
});

function showFullScreenModal(elementCLass, isOverlay = false) {
    document.querySelector("body").scroll({ behavior: "instant", top: 0 });
    document.querySelector(`.${elementCLass}`).style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";

    if (isOverlay) {
        document.querySelector(".common-overlay").style.display = "block";
    }
}

function closeFullScreenModal(elementCLass, isOverlay = false) {
    document.querySelector("body").style.overflowY = "auto";
    document.querySelector(`.${elementCLass}`).style.display = "none";

    if (isOverlay) {
        document.querySelector(".common-overlay").style.display = "none";
    }
}