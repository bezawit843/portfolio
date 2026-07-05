const text = "Cybersecurity Student | Ethical Hacker";
let i = 0;

function typeEffect() {
const typing = document.querySelector(".typing");

if (i < text.length) {
typing.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, 80);
}
}

window.onload = () => {
document.querySelector(".typing").innerHTML = "";
typeEffect();
};