function status() {
  var today = new Date(),
      open = "We're currently open!",
      closed = "Sorry, we're currently closed.",
      display = document.getElementById('currentStatus'),
      time = today.getHours();
  if (today.getDay() == 0) {
      display.innerHTML = closed;
  } else if (today.getDay() == 1 && time >= 8 && time < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 2 && time >= 8 && time < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 3 && time >= 8 && time < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 4 && time >= 8 && time < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 5 && time >= 8 && time < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 6 && time >= 8 && time < 18) {
      display.innerHTML = open;
  }
  else {
      display.innerHTML = closed;
  }
}
