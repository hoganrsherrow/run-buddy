var playerName = prompt("What is your robot's name?");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;

// Logging variables
console.log(playerName, playerHealth, playerAttack);

var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

// enemy names array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var fight = function(enemyName) {
    // Alert players that they are starting the round
    alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player chooses to fight, then fight
    if(promptFight === "fight" || promptFight === "FIGHT") {
        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth -= playerAttack;
        console.log(playerName + " atacked " + enemyName + ". " + enemyName + " now has " 
        + enemyHealth + " health remaining.");


        // Check enemy's health
        if(enemyHealth <= 0) {
            alert(enemyName + " has died!");
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Remove Player's health by subtracting the amount set in the enemyAttack variable
        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + 
        playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // Check player's health
        // Check player's health
        if(playerHealth <= 0) {
            alert(playerName + " has died!");
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
        // If player chooses to skip
    } else if(promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        // if yes(true), leave fight
        if (confirmSkip) {
            alert(playerName + " has chosen to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney -= 2;

            // if no(false), ask question again by running fight() again
        } else {
            fight();
        }
    } else {
        alert("You need to choose a valid option. Try again!");
    }
};
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
