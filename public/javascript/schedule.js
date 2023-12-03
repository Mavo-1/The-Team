document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const addGameButton = document.getElementById('addGameButton');
  const addGameModal = document.getElementById('addGameModal');
  const closeAddGameModal = document.getElementById('closeAddGameModal');
  const editButtons = document.querySelectorAll('[id^="editGameButton_"]');
  const editGameModal = document.getElementById('editGameModal');
  const closeEditModal = document.getElementById('closeEditModal');

  addGameButton.addEventListener("click", function () {
    addGameModal.classList.remove("hidden");
  });

  // Event listener for each edit button
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      const gameId = event.currentTarget.dataset.id;
      const editForm = document.getElementById('addGameForm');
      // Set the form action dynamically based on the selected game's ID
      editForm.action = `/schedules/update/${gameId}`;
      // Add logic to pre-fill form fields with existing data if needed
      // (e.g., using an AJAX request to fetch game details)
      // Show the modal
      editGameModal.classList.remove('hidden');
    });
  });

  // Close button click action for the add game modal
  closeAddGameModal.addEventListener("click", function () {
    addGameModal.classList.add("hidden");
  });

  // Close button click action for the edit game modal
  closeEditModal.addEventListener("click", function () {
    editGameModal.classList.add("hidden");
  });

  const updateGameButton = document.getElementById("updateGame");

  updateGameButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Add logic to gather form data and perform the necessary actions
    // (e.g., updating scores via AJAX)

    // Close the modal
    editGameModal.classList.add("hidden");
  });
});
