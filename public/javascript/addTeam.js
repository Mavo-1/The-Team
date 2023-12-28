document.addEventListener("DOMContentLoaded", function () {
    const addTeamButton = document.getElementById("addTeamButton");
    const teamModal = document.getElementById("teamModal");
    const closeModalButton = document.getElementById("closeModalButton");
  
    addTeamButton.addEventListener("click", function () {
      // Show the modal when the "Add Team" button is clicked
      teamModal.classList.remove("hidden");
    });
  
    closeModalButton.addEventListener("click", function (event) {
      event.preventDefault();
      teamModal.classList.add("hidden");
    });
  
    const submitTeamButton = document.getElementById("submitTeamButton");
    // Add an event listener for your form submission if you want to handle it separately
    submitTeamButton.addEventListener("click", function () {
      // Handle form submission logic here
      // You can send the form data to your server, for example
    });
  });