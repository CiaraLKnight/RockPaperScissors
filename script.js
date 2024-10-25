document.getElementById('rock-btn').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper-btn').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playGame('scissors');
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}