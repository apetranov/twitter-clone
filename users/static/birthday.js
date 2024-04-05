document.addEventListener("DOMContentLoaded", function() {
  // Function to populate the options for months
  function populateMonths() {
      var months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      var select = document.getElementById("month");
      for (var i = 0; i < months.length; i++) {
          var option = document.createElement("option");
          option.text = months[i];
          option.value = i + 1; // Month numbers start from 1
          select.appendChild(option);
      }
  }

  // Function to populate the options for days
  function populateDays(month) {
      var select = document.getElementById("day");
      select.innerHTML = ""; // Clear existing options

      var daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
      for (var i = 1; i <= daysInMonth; i++) {
          var option = document.createElement("option");
          option.text = i;
          option.value = i;
          select.appendChild(option);
      }
  }

  // Function to populate the options for years
  function populateYears() {
      var currentYear = new Date().getFullYear();
      var select = document.getElementById("year");
      for (var i = currentYear; i >= currentYear - 100; i--) {
          var option = document.createElement("option");
          option.text = i;
          option.value = i;
          select.appendChild(option);
      }
  }

  // Populate options for months, days, and years when the page loads
  populateMonths();
  populateDays(1); // Default to January
  populateYears();
});
