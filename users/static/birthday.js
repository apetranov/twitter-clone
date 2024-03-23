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
function populateDays() {
    var select = document.getElementById("day");
    for (var i = 1; i <= 31; i++) {
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
  document.addEventListener("DOMContentLoaded", function() {
    populateMonths();
    populateDays(1); // Default to January
    populateYears();
  });
  
  // Event listener to update days when a month is selected
  document.getElementById("month").addEventListener("change", function() {
    var selectedMonth = parseInt(this.value);
    populateDays(selectedMonth);
  });
  