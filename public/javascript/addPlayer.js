document.addEventListener("DOMContentLoaded", function () {
// Get references to the button and modal
const addPlayerButton = document.getElementById("addPlayerButton");
const playerModal = document.getElementById("playerModal");
const closePlayerModalButton = document.getElementById("closePlayerModalButton");

// Event listener to show the modal when the button is clicked
addPlayerButton.addEventListener("click", () => {
    playerModal.classList.remove("hidden");
});


// Event listener to hide the modal when the close button is clicked
closePlayerModalButton.addEventListener("click", () => {
    playerModal.classList.add("hidden");
});

const submitPlayerButton = document.getElementById("submitPlayerButton");

submitPlayerButton.addEventListener("click", () => {

    });
});