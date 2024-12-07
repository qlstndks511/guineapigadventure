// Function to pause the animation
function pauseAnimation(element) {
    element.style.animationPlayState = 'paused';
}

// Function to resume the animation
function resumeAnimation(element) {
    element.style.animationPlayState = 'running';
}

// Modified drag logic
let dragValue = null;
let offsetX = 0;
let offsetY = 0;

function move(id) {
    const element = document.getElementById(id);
    element.style.position = "absolute"; // Ensure absolute positioning

    element.onmousedown = function (e) {
        dragValue = element; // Set the current draggable element
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;

        pauseAnimation(element); // Pause the animation
    };
}

document.onmouseup = function () {
    if (dragValue) {
        resumeAnimation(dragValue); // Resume the animation
    }
    dragValue = null; // Reset dragValue when mouse button is released
};

document.onmousemove = function (e) {
    if (dragValue) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        dragValue.style.left = x + "px";
        dragValue.style.top = y + "px";
    }
};

// Initialize drag functionality for 'helmet' and 'chunky'
window.onload = function () {
    move('helmet');
    move('chunky');
};
// Get the elements by their IDs
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');

// Add a scroll event listener
window.addEventListener('scroll', function() {
    let value = window.scrollY;

    // Parallax effects
    stars.style.left = value * 0.25 + 'px';          // Stars move slightly to the left
    moon.style.top = value * 0.5 + 'px';            // Moon moves vertically
    mountains_behind.style.top = value * 0.3 + 'px'; // Background mountains move slightly
    text.style.marginRight = value * 3 + 'px';      // Text slides to the right
    btn.style.marginTop = value * 0.5 + 'px';       // Button moves vertically
    mountains_front.style.top = value * 0 + 'px';   // Front mountains remain stationary
});
