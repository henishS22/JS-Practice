const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SISSORS = 'SISSORS';
const DEFAULT_SELECTION = ROCK;

const PLAYER_WON = 'PLAYER WON';
const COMPUTER_WON = 'COMPUTER WON';
const DRAW = 'IT WAS A DRAW';

const gameIsRunning = true;

const getComputerValue = () => {
    const computerValue = Math.random();
    if (computerValue < 0.35) {
        return ROCK;
    } else if (computerValue < 0.6 && computerValue > 0.35) {
        return PAPER;
    } else if (computerValue > 0.6) {
        return SISSORS;
    }
}

const getPlayerChoice = () => {
    let selection = prompt(`Enter either ${ROCK}, ${PAPER} or ${SISSORS}`, '').toUpperCase();
    if(selection !== ROCK &&selection !== PAPER &&selection !== SISSORS){
        alert(`We've by default selected ${DEFAULT_SELECTION} for you`); 
        selection = DEFAULT_SELECTION;
    }
    
    return selection;
}

const finalResult = (pV, cV) => {    
    if (pV === cV) {
        return DRAW
    } else if (pV === ROCK) {
        if (cV == PAPER) {            
            return COMPUTER_WON;
        } else {
            return PLAYER_WON;
        }
    } else if (pV === PAPER) {
        if (cV === ROCK) {
            return PLAYER_WON;
        } else {
            return COMPUTER_WON;
        }
    } else {
        if (cV === PAPER) {
            return PLAYER_WON;
        } else {
            return COMPUTER_WON;
        }
    }
}

startGameBtn.addEventListener('click', () => {
    // if(gameIsRunning){
    //     return;
    // }
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerValue();
    let msg = `Your choice: ${playerChoice}\nComputer Choice: ${computerChoice}\n and `;
    const result = finalResult(playerChoice,computerChoice);
    msg = msg+result;
    console.log(msg);
    alert(msg);
});