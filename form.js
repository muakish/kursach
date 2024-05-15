document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Here, you can perform form validation if needed

    // Simulate successful submission (you can replace this with your actual submission process)
    setTimeout(function() {
        document.getElementById("notification").style.display = "block"; // Show notification
        setTimeout(function() {
            document.getElementById("notification").style.display = "none"; // Hide notification after 3 seconds
        }, 3000);
        document.getElementById("bookingForm").reset(); // Clear form
    }, 1000); // Change 1000 to your desired delay in milliseconds
});
