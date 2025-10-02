
let text = "I am a Frontend Developer"; // الكلام اللي هيظهر
let i = 0;
let speed = 100; // سرعة الكتابة (ms)

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
