function showDateTime() {
    var now = new Date();
    var dateTime = now.toLocaleString();
    document.getElementById("dateTimeDisplay").innerHTML = dateTime;
}
// Update the time every second
setInterval(showDateTime, 1000);
