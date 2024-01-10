const girl = document.getElementById("girl");
const heartGif = document.getElementById("heart");
const noButton = document.getElementById("button-2");
const yesButton = document.getElementById("button-1");
const question = document.getElementById("question");
const yay = document.getElementById("yay");

function heart(){
    girl.style.display = 'none';
    heartGif.style.display = 'block';
    question.style.display = 'none';
    yay.style.display = 'block';
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
}
function moveButton(){
    var x = Math.random() * ((window.innerWidth) - noButton.offsetWidth);
    var y = Math.random() * ((window.innerHeight) - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
