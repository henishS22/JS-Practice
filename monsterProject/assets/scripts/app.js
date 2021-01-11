const  ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 10;
let choosenMaxLife = 100;
let currentMosterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function resetAll(){
    currentMosterHealth = choosenMaxLife;
    currentPlayerHealth = choosenMaxLife;
    resetGame(choosenMaxLife);
}
function attackHandler(attackMode){
    if(attackMode === 0){
        const damage = dealMonsterDamage(ATTACK_VALUE);
        currentMosterHealth -= damage;
    }
    else if(attackMode === 1){
        const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
        currentMosterHealth -= damage;
    }
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMosterHealth<=0 && currentPlayerHealth>0){
        alert("You win :)");
        resetAll();
    }
    else if(currentPlayerHealth<=0 && currentMosterHealth>0){
        alert("You lost :|");
        resetAll();
    }
    else if(currentMosterHealth<=0 && currentMosterHealth<=0){
        alert("Its a draw !!");
        resetAll();
    }
}

function healHandler(){
    if(currentPlayerHealth<choosenMaxLife-HEAL_VALUE){
        increasePlayerHealth(HEAL_VALUE );
        currentPlayerHealth += HEAL_VALUE;
    }
    else{
        alert("You already have enough life");
    }
}

attackBtn.addEventListener('click', function(){
    attackHandler(0);
});
strongAttackBtn.addEventListener('click', function(){
    attackHandler(1);
});//1 for strong attack
healBtn .addEventListener('click', healHandler);