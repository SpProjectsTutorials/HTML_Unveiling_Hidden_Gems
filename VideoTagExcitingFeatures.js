// Select the video element from the DOM
const video = document.querySelector("video");

// Function to start the video preview
function startPreview() {
  // Mute the video
  video.muted = true;
  // Set the current time of the video to 1 second
  video.currentTime = 1;
  // Slow down the video playback rate for a smooth preview
  video.playbackRate = 0.5;
  // Start playing the video
  video.play();
}

// Function to stop the video preview
function stopPreview() {
  // Reset the current time of the video to the beginning
  video.currentTime = 0;
  // Reset the video playback rate to normal speed
  video.playbackRate = 1;
  // Pause the video
  video.pause();
}

// Initialize a variable to hold the timeout function
let previewTimeout = null;

// Add an event listener for the mouseenter event on the video element
video.addEventListener("mouseenter", () => {
  // Start the video preview when the mouse enters the video element
  startPreview();
  // Set a timeout to stop the preview after 4 seconds
  previewTimeout = setTimeout(stopPreview, 4000);
});

// Add an event listener for the mouseleave event on the video element
video.addEventListener("mouseleave", () => {
  // Clear the timeout when the mouse leaves the video element
  clearTimeout(previewTimeout);
  // Reset the timeout variable
  previewTimeout = null;
  // Stop the video preview
  stopPreview();
});
