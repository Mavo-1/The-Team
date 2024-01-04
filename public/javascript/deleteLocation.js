document.querySelectorAll('.delete-button').forEach((button) => {
    button.addEventListener('click', (event) => {
        // Prevent the default click behavior (which is a GET request)
        event.preventDefault();

        const form = event.target.closest('form');
        const locationId = form.getAttribute('data-id')
        const leagueId = form.getAttribute('data-id');

        // Show the confirmation modal
        const confirmationModal = document.getElementById('confirmationModal');
        confirmationModal.classList.remove('hidden');

        // Handle "Confirm" button click
        document.getElementById('confirmButton').addEventListener('click', () => {
            fetch(`/locations/${leagueId}/locations/${locationId}`, {
                method: 'DELETE',
            })
            .then(() => {
                // Close the modal
                confirmationModal.classList.add('hidden');
                // Reload the page or update the league list without reloading
                window.location.reload(); // This refreshes the page
            })
            .catch((error) => {
                console.error('Error deleting location:', error);
            });
        });

        // Handle "Cancel" button click
        document.getElementById('cancelButton').addEventListener('click', () => {
            // Close the modal without making a DELETE request
            confirmationModal.classList.add('hidden');
        });
    });
});