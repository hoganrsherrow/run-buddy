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

var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            // if yes(true), leave fight
            if (confirmSkip) {
                alert(playerName + " has chosen to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney -= 2;
                console.log("playerMoney", playerMoney);
                break;

                // if no(false), ask question again by running fight() again
            }
        }

        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth -= playerAttack;
        console.log(playerName + " atacked " + enemyName + ". " + enemyName + " now has " +
            enemyHealth + " health remaining.");


        // Check enemy's health
        if (enemyHealth <= 0) {
            alert(enemyName + " has died!");
            break;
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Remove Player's health by subtracting the amount set in the enemyAttack variable
        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " +
            playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // Check player's health
        if (playerHealth <= 0) {
            alert(playerName + " has died!");
            break;
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {

        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if(playerHealth > 0) {
            // let player know what round they are in
            alert("Welcome to Robot Gladiators! Round " + (i+1));

            // set enemy name
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting a new fight
            enemyHealth = 50;

            fight(pickedEnemyName);
        } else {
            alert("You have lost your robot in battle! Game Over!");
        }
    }

    // play again
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if(playerHealth > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = confirm("Would you like to play again?");

    if(playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();