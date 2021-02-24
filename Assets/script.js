// var currentDay = new Date();

// $("#date").append("Today's is " + currentDay.toLocaleDateString());

//Get the button:

$("#Phone").click(function(){
  if(true){
    $("#number").append(" (925) 699-3988");
  }
  
});

function myFunction() {
  var x = document.getElementById("number");
  if (x.innerHTML === " Contact number") {
    x.innerHTML = " Contact number: (925) 699-3988";
  } else {
    x.innerHTML = " Contact number";
  }
}