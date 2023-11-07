document.addEventListener('DOMContentLoaded', function(){
  // Reference to elements
  const gameList = document.getElementById('gameList');
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('search');
  const addGameButton = document.getElementById('addGameButton');
  const addGameModal = document.getElementById('addGameModal');
  const closeGameModalButton = document.getElementById('closeGameModalButton');

  // Function to toggle the visibility of the Add Game form
  addGameButton.addEventListener('click', function () {
    addGameModal.classList.remove('hidden');
  });

  closeGameModalButton.addEventListener('click', function () {
    addGameModal.classList.add('hidden');
  });

  // Search for games
  searchButton.addEventListener('click', async () => {
    const searchValue = searchInput.value;

    // Implement your game search logic here.
    // You can make an AJAX request to the server and update the gameList.

    // Example: Fetch games by location
    const response = await fetch(`/games?location=${searchValue}`);
    const games = await response.json();

    updateGameList(games);
  });

  // Helper function to update the game list
  function updateGameList(games) {
    gameList.innerHTML = ''; // Clear the current list

    games.forEach((game) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${game.date} - ${game.time}</strong>
        <p class="mt-2">Location: ${game.location}</p>
        <p>Home Team: ${game.homeTeam}</p>
        <p>Away Team: ${game.awayTeam}</p>
        <div class="mt-2 space-x-2">
          <button class="edit bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded" data
          <button class="edit bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded" data-id="${game._id}">Edit</button>
          <button class="delete bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded" data-id="${game._id}">Delete</button>
        </div>
      `;
      gameList.appendChild(listItem);
    });
  }

  // Add more event listeners and functions to handle editing and deleting games.
});
