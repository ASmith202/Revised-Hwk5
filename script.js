

let myButton=document.getElementById("myButton")

// Function to show the message
function showMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Thank you, you will be contacted within the next 24-48 hours."; // Set custom message
    messageDiv.style.display = "block"; // Make the message visible
}

myButton.addEventListener("click", function(){
    document.getElementById('message').style.display = 'none';
    document.getElementById('message').textContent = 'Customize your dream cake with us!';

    //your code logic goes here
    });

// Function for sending message
function contactUs() {
    showMessage(); // Call the function to show the message when this button is clicked
}


function contactUs() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').textContent = 'Thank You ! I will contact you within the next 24 hours';
}