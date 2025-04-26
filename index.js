const CHARSET = "ABCDEGHILMNPRST".split("");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChar() {
  return CHARSET[random(0, CHARSET.length - 1)];
}

$(document).ready(() => {
  if(location.hostname == "dunejp.github.io") {
    alert("For better and fixed layout, please download this repository and run it locally.");
  }
  const amount = prompt("Amount") + ".00";
  $("#text-amount").text(amount);
  $("#amount").html(`<span id="amount-currency">P</span>${amount}`);
  $("#title").html(`${randomChar()}${"&bull;".repeat(random(3, 5))}${randomChar()} ${randomChar()}.`);
  $("#subtitle small").text(`09${random(10, 99)} ${random(100, 999)} ${random(1000, 9999)}`);
  $("#ref").html(`<span>Ref No.</span> ${random(1000, 9999)} ${random(100, 999)} ${random(100000, 999999)}`);
  const d = new Date();
  let hours = d.getHours();
  const period = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = d.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  $("#date").text(`${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}  ${hours}:${minutes} ${period}`);
});
