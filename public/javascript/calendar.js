document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "auto", // Set the height to auto to make it full size

    // Add your other configuration options here

    // Event Mouse Enter and Leave
    eventMouseEnter: function (info) {
      info.el.classList.add('hovered'); // Add a class on hover
    },

    eventMouseLeave: function (info) {
      info.el.classList.remove('hovered'); // Remove the class on leave
    },

    // ...
  });

  calendar.render();
});
