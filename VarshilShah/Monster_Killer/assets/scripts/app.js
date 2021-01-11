const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 27;
const PLAYER_HEAL = 20;

let value = prompt("Please Enter a Value", "100");
let chosenMaxLife = parseInt(value);
let log = [];

if (isNaN(value) || value <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonus = true;
let cnt = 0;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  cnt = 0;
  resetGame(chosenMaxLife);
}

function writeLog(event) {
  let logobj = {
    eventName: event,
    monsterHealth: currentMonsterHealth,
    playerHealth: currentPlayerHealth,
  };
  if (event === "HEAL") {
    logobj.heal = "YES";
   };
  log.push(logobj);
}

function printLog() {
  console.log(log);
}

function result() {
  if (currentPlayerHealth <= 0 && bonus) {
    bonus = false;
    currentPlayerHealth += 30;
    removeBonusLife();
    alert("You got bonus!");
    setPlayerHealth(30);
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Won!");
    reset();
  } else if (
    currentMonsterHealth <= 0 &&
    currentPlayerHealth <= 0 &&
    cnt != 0
  ) {
    alert("Draw!");
    reset();
  }
}
function AllAttackHandler(attackValue) {
  const monsterDamage = dealMonsterDamage(attackValue);
  const playerDamage = dealPlayerDamage(attackValue);

  currentMonsterHealth -= monsterDamage;
  currentPlayerHealth -= playerDamage;

  result();
  cnt++;
}

function AttackHandler() {
  AllAttackHandler(ATTACK_VALUE);
  writeLog("ATTACK");
}

function StrongAttackHandler() {
  AllAttackHandler(STRONG_ATTACK_VALUE);
  writeLog("STRONG_ATTACK");
}

function HealPlayer() {
  let playerHeal;
  if (currentPlayerHealth > chosenMaxLife - PLAYER_HEAL) {
    playerHeal = chosenMaxLife - currentPlayerHealth;
  } else {
    playerHeal = PLAYER_HEAL;
  }
  increasePlayerHealth(playerHeal);
  currentPlayerHealth += playerHeal;
  const playerDamage = dealPlayerDamage(ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  result();
  writeLog("HEAL");
}

attackBtn.addEventListener("click", AttackHandler);
strongAttackBtn.addEventListener("click", StrongAttackHandler);
healBtn.addEventListener("click", HealPlayer);
logBtn.addEventListener("click", printLog);
