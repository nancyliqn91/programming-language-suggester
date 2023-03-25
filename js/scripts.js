// Business Logic
const python = "You should study Python. Python is easy to learn,versatile, and growing in popularity.";
const javaScript = " You should study JavaScript. JS is used for web development, easy to integrate with HTML and CSS. Also, it's widely used.";
const java = "You shuld study Java. Java is object-oriented, platform-indepedent, and used in enterprise applications.";
const random = "Just pick the language you're interested. All of the above languages are popular programming languages used for a wide range of applications.";
const csharp = "You chose mostly c's, you should definitely study C#!"
const ruby = "You chose mostly b's, you should definitely study Ruby!"
// For calculate checked box
function number(id){
  const num = document.getElementById(id);
  if (num.checked) {
    const check = 1;
    return check;
  } else {
    const uncheck = 0;
    return uncheck;
  }
}
// User Interface Logic
function handleQestion(event) {
  // For input of question section
  conclusion1.removeAttribute("class");
  event.preventDefault();
  const name = document.getElementById("name").value;
  const answer2 = document.getElementById("input2").value;
  const answer3 = document.getElementById("input3").value;
  const answer4 = document.getElementById("input4").value;
  const answer5 = document.getElementById("input5").value;
  // For result
  let result;
  if (answer2 === "yes" ||answer3 ==="yes") {
    result = python;
  } else if (answer4 === "yes" ||answer5 ==="yes") {
    result = javaScript;
  } else if (answer2 === "no" ||answer4 === "no") {
    result = java;
  } else if (answer3 === "no" ||answer5 === "no") {
    result = random;
  } else { result = "Plese answer at least one question by type yes or no."
  }

  document.getElementById("output1").innerText = name +" "+ result;
}
 
function handleInterests(event) {
  // For input of interests section
  conclusion2.removeAttribute("class");
  event.preventDefault();
  const name = document.getElementById("name").value;
  const int1 = number("coding");
  const int2 = number("calculation");
  const int3 = number("color");
  const int4 = number("book");
  const int5 = number("bot");
  const int6 = number("art");
  const a = int1 + int2 + int3;
  const b = int4 + int5;
  const c = int6;
  // For result
  let interests;
  if (a > b > 0) {
    interests = csharp;
  } else if (0 < a < b) {
    interests = ruby;
  } else { interests = random;
  }

  document.getElementById("output2").innerText = name +" "+ interests;
}

window.addEventListener("load", function() {
  // For question section
  const form1 = document.getElementById("suggester1");
  let resetBtn1 = document.getElementById("reset1");
  let conclusion1 = document.getElementById("conclusion1");
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

  // For interests section
  const form2 = document.getElementById("suggester2");
  let resetBtn2 = document.getElementById("reset2");
  let conclusion2 = document.getElementById("conclusion2");
  form2.addEventListener("submit", handleInterests);
  form2.addEventListener("submit", function() {
    resetBtn2.removeAttribute("class");
  }); 
  resetBtn2.addEventListener("click", function() {
    conclusion2.setAttribute("class", "hidden");
    document.getElementById("coding").value = null;
    document.getElementById("calculation").value = null;
    document.getElementById("color").value = null;
    document.getElementById("book").value = null;
    document.getElementById("bot").value = null;
    document.getElementById("art").value = null;
  });

});
