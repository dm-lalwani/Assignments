const container = document.getElementById("container");
const ratingsContainer = document.getElementById("ratings-container");
const btn = document.getElementById("btn");

let selectedRating = "";

// Event delegation for handling clicks on ratings
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".rating")) {
    // Remove 'selected' class from all ratings
    document.querySelectorAll(".rating").forEach((rating) => {
      rating.classList.remove("selected");
    });

    // Add 'selected' class to the clicked rating
    const clickedRating = e.target.closest(".rating");
    clickedRating.classList.add("selected");

    // Update the selected rating text
    selectedRating = clickedRating.querySelector("small").innerText;
  }
});

// Button click event
btn.addEventListener("click", () => {
  if (selectedRating === "") {
    alert("Please select a rating before submitting.");
    return;
  }

  // Update the UI with the feedback message
  container.innerHTML = `
        <div class="feedback-message">
            <h1>Thank you!</h1>
            <p>Feedback: <strong>${selectedRating}</strong></p>
            <p>We'll use your feedback to improve our customer support.</p>
        </div>
    `;
});
