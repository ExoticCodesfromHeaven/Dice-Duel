let winner = document.querySelector('h1');
let p1 = document.querySelector('.img1');
let p2 = document.querySelector('.img2');
let refresh = document.querySelector('#refresh');
let p1score;
let p2score;

p1.addEventListener("click", function() {
    p1score = diceRoll();
    p2score = diceRoll();
    let roll = new Audio('sounds/dice.mp3');
    roll.play();
    game();
    generateImg1();
    generateImg2();
})

p2.addEventListener("click", function() {
    p1score = diceRoll();
    p2score = diceRoll();
    let roll = new Audio('sounds/dice.mp3');
    roll.play();
    game();
    generateImg1();
    generateImg2();
})

refresh.addEventListener("click", function() {
    refreshGame();
})

function diceRoll() {
   return Math.floor((Math.random() * 6) + 1);
}

function game() {
    // Add shake class to both dice
    p1.classList.add("shake");
    p2.classList.add("shake");

    setTimeout(() => {
        // Remove shake class after animation completes
        p1.classList.remove("shake");
        p2.classList.remove("shake");

        // Remove previous animation so it can replay
        winner.classList.remove("winner-text");
        void winner.offsetWidth; // Trick to restart animation

        // Decide winner
        if (p1score > p2score) {
            winner.textContent = 'Player 1 Wins 🚩';
            p1.classList.add("winner");
            //remove winner class incase it was still applied
            p2.classList.remove("winner");
            // Apply animation to the winner text
            winner.classList.add("winner-text");
        } else if (p2score > p1score) {
            winner.textContent = 'Player 2 Wins 🚩';
            p2.classList.add("winner");
            //remove winner class incase it was still applied
            p1.classList.remove("winner");
            // Apply animation to the winner text
            winner.classList.add("winner-text");
        } else {
            winner.textContent = 'DRAW';
            p1.classList.remove("winner");
            p2.classList.remove("winner");
        }
        
    }, 500); // Wait for shake animation to finish
}

function generateImg1() {
    if (p1score === 1) {
        p1.setAttribute("src", "./images/dice1.png")
    } else if (p1score === 2) {
        p1.setAttribute("src", "./images/dice2.png")
    } else if (p1score === 3) {
        p1.setAttribute("src", "./images/dice3.png")
    } else if (p1score === 4) {
        p1.setAttribute("src", "./images/dice4.png")
    } else if (p1score === 5) {
        p1.setAttribute("src", "./images/dice5.png")
    } else if (p1score === 6) {
        p1.setAttribute("src", "./images/dice6.png")
    }
}

function generateImg2() {
    if (p2score === 1) {
        p2.setAttribute("src", "./images/dice1.png")
    } else if (p2score === 2) {
        p2.setAttribute("src", "./images/dice2.png")
    } else if (p2score === 3) {
        p2.setAttribute("src", "./images/dice3.png")
    } else if (p2score === 4) {
        p2.setAttribute("src", "./images/dice4.png")
    } else if (p2score === 5) {
        p2.setAttribute("src", "./images/dice5.png")
    } else if (p2score === 6) {
        p2.setAttribute("src", "./images/dice6.png")
    }
}

function refreshGame() {
    winner.textContent = 'Click the Dice';
    p1.setAttribute("src", "./images/dice6.png");
    p2.setAttribute("src", "./images/dice6.png");
    // Reset winner effect
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    p1score;
    p2score;
}