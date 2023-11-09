document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "auto", // Set the height to auto to make it full size

    // Add your other configuration options here

    // ...
  });

  calendar.render();
});
