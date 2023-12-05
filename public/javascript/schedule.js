document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const addGameButton = document.getElementById("addGameButton");
  const addGameModal = document.getElementById("addGameModal");
  const closeAddGameModal = document.getElementById("closeAddGameModal");
  const editButtons = document.querySelectorAll('[id^="editGameButton_"]');
  const editGameModal = document.getElementById("editGameModal");
  const closeEditModal = document.getElementById("closeEditModal");
  const updateGameButton = document.getElementById("updateGame");

  let gameId;

  addGameButton.addEventListener("click", function () {
    addGameModal.classList.remove("hidden");
  });

  // Event listener for each edit button
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", function (event) {
      event.preventDefault();
      gameId = event.currentTarget.dataset.id;
      const editForm = document.getElementById("editGameForm");
      // Set the form action dynamically based on the selected game's ID
      editForm.action = `/schedules/update/${gameId}`;
      // Add logic to pre-fill form fields with existing data if needed
      // (e.g., using an AJAX request to fetch game details)
      // Show the modal
      editGameModal.classList.remove("hidden");
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

  // Event listener for the update button in the edit modal
  updateGameButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather form data
    const homeScore = document.getElementById('homeScore').value;
    const awayScore = document.getElementById('awayScore').value;

    // Use fetch to send a PUT request to the update route
    fetch(`/schedules/update/${gameId}`, {
      method: 'PUT',
      //aimed at ensuring that the data sent from the client-side JavaScript is properly formatted and interpreted on the server side.
      //server wasnt processing form data correctly, this helps align the client-server coms
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({ homeScore, awayScore }), // Convert data to JSON format
    })
    
      .then(response => response.json())
      .then(updatedGame => {
        // Log after successful fetch
        console.log('Update successful:', updatedGame);

        // If needed, update the UI with the new scores
        // For simplicity, you can update the scores directly in the existing UI
        const homeScoreInput = document.getElementById('homeScore');
        const awayScoreInput = document.getElementById('awayScore');

        homeScoreInput.value = updatedGame.homeScore;
        awayScoreInput.value = updatedGame.awayScore;

        // Close the modal
        editGameModal.classList.add('hidden');
        location.reload();
      })
      .catch(error => {
        // Log errors
        console.error('Error:', error);
      });
  });
});
