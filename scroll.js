
    document.addEventListener("DOMContentLoaded", function() {

        const roomsLink = document.querySelector('header .nav a[href="#rooms"]');

        roomsLink.addEventListener("click", function(event) {
            event.preventDefault(); 

            const roomsSection = document.getElementById('rooms');

            const offsetTop = roomsSection.offsetTop;

        
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        
        const pricesLink = document.querySelector('header .nav a[href="#prices"]');


        pricesLink.addEventListener("click", function(event) {
            event.preventDefault(); 

            const pricesSection = document.getElementById('prices');

            const offsetTop = pricesSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });

