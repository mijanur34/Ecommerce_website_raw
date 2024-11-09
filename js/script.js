function showDateTime() {
    var now = new Date();
    var dateTime = now.toLocaleString();
    document.getElementById("dateTimeDisplay").innerHTML = dateTime;
}
// Update the time every second
setInterval(showDateTime, 1000);
function toggleDropdown(element) {
    // Close other dropdowns
    const dropdowns = document.querySelectorAll('.block1 > ul > li');
    dropdowns.forEach((dropdown) => {
      if (dropdown !== element) {
        dropdown.classList.remove('active');
      }
    });

    // Toggle the clicked dropdown
    element.classList.toggle('active');
  }