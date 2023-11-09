document.addEventListener('DOMContentLoaded', function () {
  const addGameButton = document.getElementById('addGameButton');
  const addGameModal = document.getElementById('addGameModal');
  const editGameModal = document.getElementById('editGameModal');
  const gameList = document.getElementById('gameList');

  const showModal = (modal) => modal.classList.remove('hidden');
  const hideModal = (modal) => modal.classList.add('hidden');

  // Function to toggle the visibility of the Add Game form
  addGameButton.addEventListener('click', () => showModal(addGameModal));

  // Function to show the edit modal
  const showEditModal = (gameId) => showModal(editGameModal);

  // Add event listener for the Edit button
 
  gameList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-button')) {
      const gameId = event.target.getAttribute('data-id');
      showEditModal(gameId);
    }
  });

// Save button click action
window.updateGame = () => {
  // Add logic to handle updating the game
  console.log('Update Game logic goes here');

  // Close the edit modal after updating
  closeEditModal();
};

// Close button click action
window.closeEditModal = () => {
  // Add logic to handle closing the edit modal
  console.log('Close Edit Modal logic goes here');
  hideModal(editGameModal);
};

  // Close the "Add Game" modal
  document.getElementById('closeGameModalButton').addEventListener('click', () => hideModal(addGameModal));

  // Close the "Edit Game" modal
  document.getElementById('closeEditGameModalButton').addEventListener('click', () => hideModal(editGameModal));
});
