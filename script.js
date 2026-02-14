const message = "Will You Be My Valentine? 💕";
let i = 0;

function typeEffect() {
    if (i < message.length) {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", function() {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yes").addEventListener("click", function() {

    document.getElementById("intro").style.display = "none";
    document.getElementById("scene").style.display = "block";

    const container = document.getElementById("balloons");

    for (let i = 0; i < 25; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
        balloon.style.animationDuration = (4 + Math.random()*4) + "s";
        container.appendChild(balloon);
    }
});
