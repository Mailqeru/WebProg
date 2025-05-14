// Add future interactivity here
console.log("Welcome to our portfolio site!");


// Show popup on first page load
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcome-popup");
  const closeBtn = document.getElementById("close-popup");

  if (popup && closeBtn) {
    popup.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });

    // Optional: auto-close after 10 seconds
    // setTimeout(() => popup.classList.add("hidden"), 10000);
  }
});
