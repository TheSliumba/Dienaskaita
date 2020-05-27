var slider = document.getElementById("dayScore");
var output = document.getElementById("dayValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  //Now change text color according to slider value
  if (this.value < 25){
    document.getElementById("sampletext").style.color = "red"
  } else if (this.value > 75){
    document.getElementById("sampletext").style.color = "green"
  } else {
    document.getElementById("sampletext").style.color = "cornflowerblue"
  }
}
//Trying to put in current date into text so i donthave to change manually
var today = new Date()
var weekdays = ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"]
document.getElementById("today").innerHTML = weekdays[today.getDay()]