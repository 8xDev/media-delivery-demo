
// Grab elements
const playBtn = document.getElementById("playBtn");
const demoToggle = document.getElementById("demoToggle");

// Handle playback simulation
playBtn.addEventListener("click", () => {
    if (demoToggle.checked) {
        // Demo Mode active — redirect to the Rickroll
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ)";
    } else {
        // Simulated media playback
        alert("Simulating progressive media playback...");
    }
});
