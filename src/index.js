//As you press the button
function Submit() {
  var pluralNoun = document.getElementById("pluralN").value;
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var song = document.getElementById("song").value;
  var verb = document.getElementById("verb").value;
  //The result of pressing Next
  document.getElementById("textBox").value =
    "Hey!" +
    noun1 +
    " are a kind " +
    noun2 +
    " and always " +
    verb +
    " presents. You sing " +
    song +
    " and you also give me " +
    pluralNoun +
    "You are very special to me!";

  document.getElementById("result").style.display = "block";
  document.getElementById("fill").style.display = "none";
}

function Reset() {
  document.getElementById("result").style.display = "none";
  document.getElementById("fill").style.display = "block";
}

document.getElementById("nextButton").addEventListener("click", Submit);
document.getElementById("tryAgainButton").addEventListener("click", Reset);
