
let message = document.getElementById("message"); // Getting our msg 
let originalText = message.textContent; // remembers the original msg
let fontSize = 20; //default font size
let isAllCaps = false;//tracks whether text is in caps or not
//change text
document.getElementById("btn1").addEventListener("click", function() {
  message.textContent = "You clicked button 1!";
});
//change text color
document.getElementById("btn2").addEventListener("click", function() {
  message.style.color = "red";
});
//make text big and small
document.getElementById("btn3").addEventListener("click", function() {
  fontSize = fontSize + 2;
  message.style.fontSize = fontSize + "px";
});
document.getElementById("btn4").addEventListener("click", function() {
  fontSize = fontSize - 2;
  message.style.fontSize = fontSize + "px";
});
//hide text
document.getElementById("btn5").addEventListener("click", function() {
  message.style.display = "none";
});
//show text
document.getElementById("btn6").addEventListener("click", function() {
  message.style.display = "block";
});
//change background 
document.getElementById("btn7").addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});
//add emoji 
document.getElementById("btn8").addEventListener("click", function() {
  message.textContent = message.textContent + "😊";
});
//reset text
document.getElementById("btn9").addEventListener("click", function() {
  message.textContent = originalText;
  message.style.color = "black";
  fontSize = 20;
  message.style.fontSize = fontSize + "px"; 
  document.body.style.backgroundColor = "white";
  message.style.display = "block";
  isAllCaps = false;
});
//toggle caps
document.getElementById("btn10").addEventListener("click", function() {
  if (!isAllCaps) {
    message.textContent = message.textContent.toUpperCase();
    isAllCaps = true;
  } else {
    message.textContent = message.textContent.toLowerCase();
    isAllCaps = false;
  }
});
