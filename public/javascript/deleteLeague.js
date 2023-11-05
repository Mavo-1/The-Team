document.querySelectorAll('.delete-button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this league?')
    
   if (isConfirmed) {
            const form = event.target.closest('form');
            const leagueId = form.getAttribute('data-id');
            
            fetch(`/leagues/${leagueId}`, {
                method: 'DELETE',
            })
            .then(() => {
                // Reload the page or update the league list without reloading
                window.location.reload(); // This refreshes the page
            })
            .catch((error) => {
                console.error('Error deleting league:', error);
            });
        } else {
            // If the user cancels, prevent the default form submission
            event.preventDefault();
        }
    });
});