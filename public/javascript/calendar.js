// Import flatpickr library
import 'https://cdn.jsdelivr.net/npm/flatpickr';


document.addEventListener('DOMContentLoaded', function () {
	 // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [], // You can load events from your MongoDB here
        selectable: true,
        select: function (start, end) {
            // Open modal when a date is selected
            openEventModal(start, end);
        },
        eventClick: function (event) {
            // Open modal when an event is clicked
            openEventModal(event.start, event.end, event.title, event.description);
        }
    });

	flatpickr('#event-date', {
		enableTime: true,
		dateFormat: "Y-m-d H:i:S",
		appendTo: document.getElementById('calendar-container') // Specify the container element
	});
	

    // Handle form submission for adding events
    $('#add-event-form').submit(function (event) {
        event.preventDefault();

        // Get form data
        var formData = {
            title: $('#event-title').val(),
            start: $('#event-date').val(),
            description: $('#event-description').val()
            // Add more fields as needed
        };

        // Add the event to FullCalendar
        $('#calendar').fullCalendar('renderEvent', formData, true);

        // Close the modal
        closeEventModal();
    });

    // Close modal when close button is clicked
    $('.modal-close').click(function () {
        closeEventModal();
    });

    // Open the event modal with optional pre-filled data
    function openEventModal(start, end, title = '', description = '') {
        $('#event-date').val(start.format('YYYY-MM-DD HH:mm:ss'));
        $('#event-title').val(title);
        $('#event-description').val(description);
        
        // Update the modal display property directly
        document.getElementById('event-modal').classList.remove('hidden');
    }

    // Close the event modal
    function closeEventModal() {
        // Update the modal display property directly
        document.getElementById('event-modal').classList.add('hidden');

        // Clear form fields
        $('#add-event-form')[0].reset();
    }
});
