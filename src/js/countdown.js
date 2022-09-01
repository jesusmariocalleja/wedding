countdown();

function countdown() {
  const targetTime = moment("2022-11-05 13:00");

  printTime(targetTime);
  setInterval(function () {
    printTime(targetTime);
  }, 1000);
}

function printTime(targetTime) {
  const timeBetween = moment.duration(targetTime.diff(moment()));

  document.getElementById("countdown-days").innerText = parseInt(
    timeBetween.asDays()
  );
  document.getElementById("countdown-hours").innerText = timeBetween.hours();
  document.getElementById("countdown-minutes").innerText =
    timeBetween.minutes();
  document.getElementById("countdown-seconds").innerText =
    timeBetween.seconds();
}
