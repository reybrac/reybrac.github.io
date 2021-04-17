// var currentDay = new Date();

// $("#date").append("Today's is " + currentDay.toLocaleDateString());

//Get the button:

function myFunction() {
  var x = document.getElementById("number");
  if (x.innerHTML === " ") {
    x.innerHTML = " (925) 699-3988";
  } else {
    x.innerHTML = " ";
  }
}

$(".carousel").carousel({
  interval: 6000,
  pause: "false",
});
