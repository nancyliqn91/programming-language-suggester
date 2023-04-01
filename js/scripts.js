// Business Logic
const python = "You should study Python. Python is easy to learn,versatile, and growing in popularity.";
const javaScript = " You should study JavaScript. JS is used for web development, easy to integrate with HTML and CSS. Also, it's widely used.";
const java = "You shuld study Java. Java is object-oriented, platform-indepedent, and used in enterprise applications.";
const csharp = "You should definitely study C#!"
const ruby = "You should definitely study Ruby!"
const random = "Just pick the language you're interested. All of the above languages are popular programming languages used for a wide range of applications.";

// User Interface Logic
function handleQestion(event) {
  // For input of question section
  let conclusion1 = document.getElementById("conclusion1");
  conclusion1.removeAttribute("class");
  event.preventDefault();
  const name = document.getElementById("name").value;
  const answer2 = document.getElementById("input2").value;
  const answer3 = document.getElementById("input3").value;
  const answer4 = document.getElementById("input4").value;
  const answer5 = document.getElementById("input5").value;
  // For result
  let result;
  if (answer2 === "yes") {
    result = python;
  } else if (answer3 === "yes") {
    result = ruby;
  } else if (answer4 === "yes") {
    result = javaScript;
  } else if (answer5 ==="yes") {
    result = csharp;
  } else if (answer2 === "no" || answer4 === "no") {
    result = java;
  } else if (answer3 === "no" || answer5 === "no") {
    result = random;
  } else { result = "Plese answer at least one question by type yes or no."
  }

  document.getElementById("output1").innerText = name +" "+ result;
}

window.addEventListener("load", function() {
  // For question section
  const form1 = document.getElementById("suggester1");
  let resetBtn1 = document.getElementById("reset1");
  form1.addEventListener("submit", handleQestion);
  form1.addEventListener("submit", function() {
    resetBtn1.removeAttribute("class");
  }); 
  resetBtn1.addEventListener("click", function() {
    conclusion1.setAttribute("class", "hidden");
    document.getElementById("name").value = null;
    document.getElementById("input2").value = null;
    document.getElementById("input3").value = null;
    document.getElementById("input4").value = null;
    document.getElementById("input5").value = null;
  });
});
