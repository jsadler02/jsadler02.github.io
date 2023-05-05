function Counter(elem, delay) {
  var value = parseInt(elem.getAttribute("value"), 10);
  var interval;

  var titles = [
    "\"you aim you attack you lose\"",
    "\"this is the dawning of the season\"",
    "\"wicked love will leave me blind\""
  ];

  function updateDisplay(value) {
    elem.innerHTML = value;
  }

  function run() {
    value += 1;
    if (value == titles.length) value = 0;

    elem.setAttribute("value", value);
    updateDisplay(titles[value]);
  }

  function start() {
    interval = window.setInterval(run, delay);
  }

  // exports
  // This actually creates a function that our counter can call
  // you'll see it used below.
  //
  // The other functions above cannot be accessed from outside
  // this function.
  this.start = start;
}
var elem = document.getElementById("title-switcher");

counter = new Counter(elem, 10000);
counter.start();

