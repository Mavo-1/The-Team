document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const addLocationButton = document.getElementById("addLocationButton");
    const addLocationModal = document.getElementById("addLocationModal");
    const closeAddLocationModal = document.getElementById("closeAddLocationModal");
    const editButtons = document.querySelectorAll('[id^="editLocationButton_"]');
    const editLocationModal = document.getElementById("editLocationModal");
    const closeEditModal = document.getElementById("closeEditModal");
    const updateLocationButton = document.getElementById("updateLocation");

    let locationId;

    addLocationButton.addEventListener("click", function () {
        addLocationModal.classList.remove("hidden");
    });

    // Event listener for each edit button
    editButtons.forEach((editButton) => {
        editButton.addEventListener("click", function (event) {
            event.preventDefault();
            locationId = event.currentTarget.dataset.id;
            const editForm = document.getElementById("editLocationForm");
            // Set the form action dynamically based on the selected location's ID
            editForm.action = `/locations/update/${locationId}`;
            // Add logic to pre-fill form fields with existing data if needed
            // (e.g., using an AJAX request to fetch location details)
            // Show the modal
            editLocationModal.classList.remove("hidden");
        });
    });

    // Close button click action for the add location modal
    closeAddLocationModal.addEventListener("click", function () {
        addLocationModal.classList.add("hidden");
    });

    // Close button click action for the edit location modal
    closeEditModal.addEventListener("click", function () {
        editLocationModal.classList.add("hidden");
    });

    // Event listener for the update button in the edit modal
    updateLocationButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Gather form data
        const name = document.getElementById('locationName').value;
        const address = document.getElementById('locationAddress').value;
        const city = document.getElementById('locationCity').value;
        const state = document.getElementById('locationState').value;
        const zipCode = document.getElementById('locationZipCode').value;

        // Use fetch to send a PUT request to the update route
        fetch(`/locations/update/${locationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, address, city, state, zipCode }),
        })
        .then(response => response.json())
        .then(updatedLocation => {
            // Log after successful fetch
            console.log('Update successful:', updatedLocation);

            // If needed, update the UI with the new location details
            // For simplicity, you can update the details directly in the existing UI
            const locationNameInput = document.getElementById('locationName');
            const locationAddressInput = document.getElementById('locationAddress');
            const locationCityInput = document.getElementById('locationCity');
            const locationStateInput = document.getElementById('locationState');
            const locationZipCodeInput = document.getElementById('locationZipCode');

            locationNameInput.value = updatedLocation.name;
            locationAddressInput.value = updatedLocation.address;
            locationCityInput.value = updatedLocation.city;
            locationStateInput.value = updatedLocation.state;
            locationZipCodeInput.value = updatedLocation.zipCode;

            // Close the modal
            editLocationModal.classList.add('hidden');

            window.location.reload();
        })
        .catch(error => {
            // Log errors
            console.error('Error:', error);
        });
    });
});
