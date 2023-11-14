document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const addGameButton = document.getElementById('addGameButton');
  const addGameModal = document.getElementById('addGameModal');
  const closeAddGameModal = document.getElementById('closeAddGameModal');
  const editButtons = document.querySelectorAll('[id^="editGameButton_"]');
  const editGameModal = document.getElementById('editGameModal');
  const closeEditModal = document.getElementById('closeEditModal');
  // const gameList = document.getElementById('gameList');
 

  addGameButton.addEventListener("click", function (){
    addGameModal.classList.remove("hidden");
  })

  // Close button click action for the add game modal
closeAddGameModal.addEventListener("click", function () {
  addGameModal.classList.add("hidden");
});

//Edit button click action

editButtons.forEach(function (editButton) {
  editButton.addEventListener("click", function (){
    const gameId = editButton.getAttribute('data-id');
    console.log('Edit button clicked for game with ID:', gameId);
     //Add code to use gameId for any specific actions here
     
     //shows editGameModal
     editGameModal.classList.remove("hidden")
  })
})



closeEditModal.addEventListener("click", function () {
  editGameModal.classList.add("hidden")
});

const submitGameButton = document.getElementById("submitGameButton")


 submitGameButton.addEventListener("click",function (){

 })
});
