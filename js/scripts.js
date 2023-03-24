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
    result = "study Python";
  } else if (answer4 === "yes" ||answer5 ==="yes") {
    result = " study JavaScript";
  } else if (answer2 === "no" ||answer4 === "no") {
    result = "study Java";
  } else if (answer3 === "no" ||answer5 === "no") {
    result = "Just pick the language you're interested.";
  } else {
    return result = "Plese answer questions by type yes or no."
  }

  document.getElementById("output").innerText = name +" you shold " + result;
}
 // For reset
 let resetBtn = document.getElementById("reset");
//  resetBtn.addEventListener("click", function() {
  // story.setAttribute("class", "hidden");
  // document.getElementById("input2").value = null;
  // document.getElementById("input3").value = null;
  // document.getElementById("input4").value = null;
  // document.getElementById("input5").value = null;
// });
window.addEventListener("load", function() {
  const form = document.getElementById("suggester");
  form.addEventListener("submit", handleChoice);
});