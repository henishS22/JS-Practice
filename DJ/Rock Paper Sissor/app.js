const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SISSORS = 'SISSORS';
const DEFAULT_SELECTION = ROCK;

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

const result = (pV, cV) => {
    console.log(`Your choice: ${pV}\nComputer Choice: ${cV}\n`)
    if (pV === cV) {
        console.log(`Draw!`);
    } else if (pV === ROCK) {
        if (cV == PAPER) {
            console.log(`Computer Won!`);
        } else {
            console.log(`Player Won!`);
        }
    } else if (pV === PAPER) {
        if (cV === ROCK) {
            console.log(`Player Won!`);
        } else {
            console.log(`Computer Won!`);
        }
    } else {
        if (cV === PAPER) {
            console.log(`Player Won!`);
        } else {
            console.log(`Computer Won!`);
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
    result(playerChoice,computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
});