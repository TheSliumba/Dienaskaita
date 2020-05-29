var slider = document.getElementById("dayScore");
var output = document.getElementById("dayValue");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value and text (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  //Now change text according to slider value
  if (this.value < 25){
    document.getElementById("sampletext_bad").style.display = "block";
    document.getElementById("sampletext_good").style.display = "none";
    document.getElementById("sampletext_ok").style.display = "none"
  } else if (this.value > 75){
    document.getElementById("sampletext_bad").style.display = "none";
    document.getElementById("sampletext_good").style.display = "block";
    document.getElementById("sampletext_ok").style.display = "none"
  } else {
    document.getElementById("sampletext_bad").style.display = "none";
    document.getElementById("sampletext_good").style.display = "none";
    document.getElementById("sampletext_ok").style.display = "block"
  } // There's probably a much better and compact way to write this up, but it'll do for now
}


//Trying to put in current date into text so I don't have to change manually
var today = new Date()
var weekdays = ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"]
document.getElementById("today").innerHTML = weekdays[today.getDay()]


//So now Imma try to make a button press dish out a (hopefully) random string in index
//To start, I need to figure out how to make the submit action activate the script to print
function randomise_text(){
  var possibilities = ["Pavalgyt skaniai", "Parašyt kų tais toke lengvai", "Pakodint kokią valandžikę",
  "Pageimint", "Prasieit rajone", "Pasikrapštyt prie mašinos", "Paieškot pen-pal'ų",
  "Pridėt dar kokį elementą prie skripto", "Sugalvot, kur applyint į darbą"]
  var choice = Math.floor(Math.random() * possibilities.length)
  document.getElementById("doables").innerHTML = possibilities[choice]
}