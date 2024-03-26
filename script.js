document.getElementById("lookupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var code = document.getElementById("codeInput").value;
    // Here, you would perform a lookup based on the code entered
    // For demonstration purposes, let's assume the location is hardcoded
    var location = "Linex (Row x and column x)"; // Replace with actual location

    document.getElementById("locationResult").innerText = location;
});
