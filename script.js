$(document).ready(function () {
    let currentPlayer = "X";
    let moves = 0;
    $('#resetButton').click(function () {
        restartGame();
    })
    $("#ticTacToeGrid .grid-cell").click(function () {
        if ($(this).text() === "" && !gameOver()) {
            $(this).text(currentPlayer);
            moves++;
            if (checkWinner(currentPlayer)) {
                showAlert(currentPlayer + " " + "Wins! You Rock!");
                return;
            } else if (moves === 9) {
                showAlert("You are both losers!");
                return;
            }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $("#turnIndicator").text(currentPlayer + "'s Turn"); } 
    });
    });
    function checkWinner(player){
        const winPatterns = [
            [0,1,2], // across the top
            [3,4,5], // across the middle
            [6,7,8], // across the bottom
            [0,3,6], // down the left side
            [1,4,7], // down the middle
            [2,5,8], // down the right side
            [0,4,8], //diagonal from top-left to
            //bottom-right
            [2,4,6] // diagonal from top-right to
            //bottom-left
        ]
        return winPatterns.some((pattern) => {
            return pattern.every((index) => {
                return $('#ticTacToeGrid .grid-cell').eq(index).text() === player;
            })
        })
    }
    function restartGame() {
        $("#ticTacToeGrid .grid-cell").text("");
        currentPlayer = "X";
        $('#turnIndicator').text("X's Turn");
        moves = 0;
        $('.alert').remove();
    }
    function showAlert(message) {
        const alertHTML = `<div class="alert alert-success" role="alert"> ${message}</div>`;
        $('.container').prepend(alertHTML);
    }
    function gameOver() {
        return $('.alert').length > 0;
    }
