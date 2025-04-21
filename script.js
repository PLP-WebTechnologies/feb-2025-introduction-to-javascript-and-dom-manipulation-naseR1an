// Change text content dynamically and modify CSS styles
document.getElementById("change-text-btn").addEventListener("click", function() {
    let textElement = document.getElementById("dynamic-text");
     textElement.style.fontSize = "20px";
    textElement.style.color = "violet";
    textElement.style.fontWeight = "bold";
    textElement.textContent = "DOM Manipulation";
    textElement.classList.toggle("highlight");
});

// Add or remove an element
document.getElementById("toggle-element-btn").addEventListener("click", function() {
    let container = document.getElementById("element-container");
    let existingElement = document.getElementById("new-element");

    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        let newElement = document.createElement("p");
        newElement.id = "new-element";
        newElement.textContent = "JavaScript is awesome!";
        newElement.style.fontSize = "18px";
        newElement.style.fontWeight = "bold";
        newElement.style.color = "green";
        container.appendChild(newElement);
    }
});


// Click event listener
document.getElementById("click-btn").addEventListener("click", function() {
    alert("Button clicked!");
});

// Keydown event listener
document.getElementById("text-input").addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

// Form submit event listener
document.getElementById("sample-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    alert("Form submitted successfully!");
});
