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
    // TODO: Should be a list of initializing sliders
    $(".multi-hotel-results__hotel-list .hotel-list-item .hotel-list-item__img .slider").slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
    });

    // map

    const map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13,
    });
    // to revalidate map size in modal
    $('#mapModal').on('show.bs.modal', function(){
        setTimeout(function() {
            map.invalidateSize();
            $(".map-modal .hotel-list-item.short .hotel-list-item__img .slider").slick({
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                arrows: true,
                prevArrow: $(".prev"),
                nextArrow: $(".next"),
            });
        }, 1000);
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const mapMarker = L.divIcon({
        className: "custom-map-marker",
        html: `<div class="custom-map-marker-content">$202</div>`
    });
    L.marker([51.505, -0.09], { icon: mapMarker }).addTo(map).on('click', function(e) {
        // TODO: Change center of map and hotel card when click on it
    })

});

function showFullScreenModal(elementCLass, isOverlay = false) {
    document.querySelector("body").scroll({ behavior: "instant", top: 0 });
    document.querySelector(`.${elementCLass}`).style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("html").style.overflow = "hidden";

    if (isOverlay) {
        document.querySelector(".common-overlay").style.display = "block";
    }
}

function closeFullScreenModal(elementCLass, isOverlay = false) {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("html").style.overflow = "auto";
    document.querySelector(`.${elementCLass}`).style.display = "none";

    if (isOverlay) {
        document.querySelector(".common-overlay").style.display = "none";
    }
}