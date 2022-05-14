var playerName = prompt("What is your robot's name?");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;
console.log("hello");
// Logging variables
console.log(playerName, playerHealth, playerAttack);

var enemyHealth = 10;
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
            enemyHealth = 10;

            fight(pickedEnemyName);


            // if we're not at the last enemy in the array
            if(playerHealth > 0 && i < enemyNames.length -1) {
                // ask if player wants to use the store before the next round
                var storeConfirm = confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if(storeConfirm) {
                    shop();
                }
            }
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
var shop = function() {
    // ask the player what they would like to do
    var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerMoney >= 7) {
                alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth += 20;
                playerMoney -= 7;
            } else {
                alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7) {
                alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack += 6;
                playerMoney -= 7;
            } else {
                alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            alert("Leaving the store.");

            // do nothing, so the function will end
            break;
        default:
            alert("You did not pick a valid option. Try again.");

            // call shop() again to force the player to pick a valid option
            shop();
            break;
    }
};
startGame();