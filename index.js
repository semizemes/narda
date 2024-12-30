var score1 = Math.random()*6;
score1 = Math.floor(score1) + 1;

var score2 = Math.random()*6;
score2 = Math.floor(score2) + 1;

// document.querySelector(".forScore1").textContent = score1;
// document.querySelector(".forScore2").textContent = score2;

if (score1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (score1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (score1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (score1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (score1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (score1 === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (score2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (score2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (score2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (score2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (score2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (score2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (score1 === score2) {
    document.querySelector(".won1").textContent = "=️⃣";
    document.querySelector(".won2").textContent = "=️⃣";
    document.querySelector(".board").textContent = "Abed";
} else if (score1 > score2) {
    document.querySelector(".won1").textContent = "🚩";
    document.querySelector(".won2").textContent = "";
    document.querySelector(".board").textContent = "Chap tomon yutdi";
} if (score1 < score2) {
    document.querySelector(".won1").textContent = "";
    document.querySelector(".won2").textContent = "🚩";
    document.querySelector(".board").textContent = "O'ng tomon yutdi";
}