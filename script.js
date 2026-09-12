// This tells the browser to look for the button and the empty paragraph in the HTML
const button = document.getElementById('factButton');
const displayArea = document.getElementById('factDisplay');

// This adds an action that waits for the user to click the button
button.addEventListener('click', function() {
    // When clicked, it inserts this text into the HTML page
    displayArea.innerText = "Fact: Kautilya advocated that taxes should be collected similarly to how a bee collects honey from a flower—without destroying the source!";
    
    // It also hides the button after clicking
    button.style.display = 'none';
});