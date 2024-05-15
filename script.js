document.addEventListener("DOMContentLoaded", function() {
    const roomTabs = document.querySelectorAll(".room-tab");
    const roomDetails = document.querySelectorAll(".room-details");

    roomTabs[0].classList.add("active");
    roomDetails[0].classList.add("active");

    roomTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            const roomId = this.getAttribute("data-room");

            roomTabs.forEach(function(tab) {
                tab.classList.remove("active");
            });
            roomDetails.forEach(function(detail) {
                detail.classList.remove("active");
            });

            this.classList.add("active");
            document.getElementById(roomId).classList.add("active");
        });
    });
});
