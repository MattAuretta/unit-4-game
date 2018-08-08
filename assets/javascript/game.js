//Generate random number on reset between 19-120
//Give random hidden value to each crystal between 1-12
//When player clicks a crystal, its assigned value is added to their score
//Users score is updated accordingly


$(document).ready(function () {

    //Define global variables
    var targetNumber;

    var userScore = 0;

    var num1 = "";
    var num2 = "";
    var num3 = "";
    var num4 = "";

    var wins = 0;
    var losses = 0;

    //Create reset function
    function resetGame() {
        //Generate random number to guess from 19-120
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $(".target-number").text("Your Target Is: " + targetNumber);

        //Create 4 random numbers 1-12
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        num3 = Math.floor(Math.random() * 12) + 1;
        num4 = Math.floor(Math.random() * 12) + 1;

        //Set user's score to 0 at start
        userScore = 0;
        $(".score").text("Your Score: " + userScore);

    }

    //Reset game on initial load
    resetGame();

    //Define on-click event to start game
    $(".crystal1").on("click", function () {
        userScore += num1
        $(".score").text("Your Score: " + userScore);
        if (userScore === targetNumber) {
            wins++
            $(".wins").text("Wins: " + wins);
            resetGame();
        }

        if (userScore > targetNumber) {
            losses++
            $(".losses").text("Losses: " + losses);
            resetGame();
        }
    });
    $(".crystal2").on("click", function () {
        userScore += num2
        $(".score").text("Your Score: " + userScore);
        if (userScore === targetNumber) {
            wins++
            $(".wins").text("Wins: " + wins);
            resetGame();
        }

        if (userScore > targetNumber) {
            losses++
            $(".losses").text("Losses: " + losses);
            resetGame();
        }
    });
    $(".crystal3").on("click", function () {
        userScore += num3
        $(".score").text("Your Score: " + userScore);
        if (userScore === targetNumber) {
            wins++
            $(".wins").text("Wins: " + wins);
            resetGame();
        }

        if (userScore > targetNumber) {
            losses++
            $(".losses").text("Losses: " + losses);
            resetGame();
        }
    });
    $(".crystal4").on("click", function () {
        userScore += num4
        $(".score").text("Your Score: " + userScore);
        if (userScore === targetNumber) {
            wins++
            $(".wins").text("Wins: " + wins);
            resetGame();
        }

        if (userScore > targetNumber) {
            losses++
            $(".losses").text("Losses: " + losses);
            resetGame();
        }
    });

});