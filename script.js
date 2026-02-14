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
    alert("Yayyyy 💖 I Love You!");
});
