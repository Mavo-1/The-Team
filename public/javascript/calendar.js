document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth", // You can change the initial view as needed
      events: [
        // Add your events here (you can use an array of event objects)
        // Example event object:
        // {
        //   title: "Event Title",
        //   start: "2023-11-15", // Date in ISO format (YYYY-MM-DD)
        //   allDay: true, // Set to true for all-day events
        // },
      ],
    });
    calendar.render();
  });