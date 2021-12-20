var character = document.getElementById('character');
var block = document.getElementById('block');
let counter = 0;

function jump() {
    if (character.classList != "animate") {
        counter++;
        document.getElementById('score').innerHTML=counter;
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500)
}


var check = setInterval(function () {
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
        block.style.animation = "none";
        document.getElementById('over').innerHTML="Game Over, bobo...";
        // block.style.display = "none";
        // alert("Game Over");
    }
}, 10);