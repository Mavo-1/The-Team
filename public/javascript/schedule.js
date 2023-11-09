document.addEventListener('DOMContentLoaded', function () {
  const gameList = document.getElementById('gameList');
  const addGameButton = document.getElementById('addGameButton');
  const addGameModal = document.getElementById('addGameModal');
  const editGameModal = document.getElementById('editGameModal');
  
  // Function to toggle the visibility of the Add Game form
  addGameButton.addEventListener('click', function () {
    addGameModal.classList.remove('hidden');
  });

  // Function to show the edit modal
  function showEditModal(gameId) {
    editGameModal.classList.remove('hidden');

  // Fetch the game data and populate the form fields
  fetch(`/games/${gameId}`)
    .then((response) => response.json())
    .then((game) => {
      document.getElementById('editGameId').value = game._id;
      document.getElementById('editDate').value = game.date;
      document.getElementById('editLocation').value = game.location;
      document.getElementById('editTime').value = game.time;
      document.getElementById('editHomeTeam').value = game.homeTeam;
      document.getElementById('editAwayTeam').value = game.awayTeam;
      document.getElementById('editHomeScore').value = game.homeScore;
      document.getElementById('editAwayScore').value = game.awayScore;
    });
  }

  // Add event listener for the Edit button
  gameList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('edit')) {
      const gameId = event.target.getAttribute('data-id');
      showEditModal(gameId);
    }
  });

  // Close the "Add Game" modal
  document.getElementById('closeGameModalButton').addEventListener('click', function () {
    addGameModal.classList.add('hidden');
  });

  // Close the "Edit Game" modal
  document.getElementById('closeEditGameModalButton').addEventListener('click', function () {
    editGameModal.classList.add('hidden');
  });
});
