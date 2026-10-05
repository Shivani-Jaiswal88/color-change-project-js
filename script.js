const buttons = document.querySelectorAll(".color-btn")
const code = document.getElementById("color-text")

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        const color = event.currentTarget.dataset.color;
        document.body.style.backgroundColor = color
        
        code.textContent = color;
    });
});



// - **DOM Querying:** Selecting node collections with `document.querySelectorAll()` and individual elements with `document.getElementById()`.
// - **Node List Iteration:** Using `Array.prototype.forEach()` to assign event listeners efficiently across multiple controls.
// - **Event Handling:** Capturing click triggers and accessing event context (`event.currentTarget`).
// - **Dataset Access:** Reading values from HTML5 custom attributes via the DOM `dataset` property (`element.dataset.color`).
// - **Dynamic Inline Styles:** Modifying document properties programmatically using `document.body.style.backgroundColor`.