// script.js

// Function to set the countdown timer
function setCountdown() {
  var countdownDateInput = document.getElementById("countdownDate");
  var countdownDateValue = new Date(countdownDateInput.value).getTime();

  // Update countdown every second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDateValue - now;

    // Calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown with animation
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    countdownElement.classList.add("fade-in");

    // If the countdown is over, display message and stop the countdown
    if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "EXPIRED";
    }
  }, 1000);
}
