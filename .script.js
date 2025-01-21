// Function to show the message
function showMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Thank you, you will be contacted within the next 24-48 hours."; // Set custom message
    messageDiv.style.display = "block"; // Make the message visible
}

// Function for customizing cake
function customizeCake() {
    showMessage(); // Call the function to show the message when this button is clicked
}

// Function for sending message
function contactUs() {
    showMessage(); // Call the function to show the message when this button is clicked
}