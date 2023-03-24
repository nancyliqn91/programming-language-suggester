// Business Logic

// User Interface Logic
function handleChoice(event) {
  // For input
  event.preventDefault();
  const name = document.getElementById("name").value;
  const answer2 = document.getElementById("input2").value;
  const answer3 = document.getElementById("input3").value;
  const answer4 = document.getElementById("input4").value;
  const answer5 = document.getElementById("input5").value;
  // For result
  let result;
  if (answer2 === "yes" ||answer3 ==="yes") {
    result = "you should study Python";
  } else if (answer4 === "yes" ||answer5 ==="yes") {
    result = " you should study JavaScript";
  } else if (answer2 === "no" ||answer4 === "no") {
    result = "you shuld study Java";
  } else if (answer3 === "no" ||answer5 === "no") {
    result = "just pick the language you're interested.";
  } else { result = "plese answer questions by type yes or no."
  }

  document.getElementById("output").innerText = name +" "+ result;
}
 

 // For reset

window.addEventListener("load", function() {
  const form = document.getElementById("suggester");
  let resetBtn = document.getElementById("reset");
  form.addEventListener("submit", handleChoice);
  resetBtn.addEventListener("click", function() {
    // story.setAttribute("class", "hidden");
    document.getElementById("name").value = null;
    document.getElementById("input2").value = null;
    document.getElementById("input3").value = null;
    document.getElementById("input4").value = null;
    document.getElementById("input5").value = null;
  });
});