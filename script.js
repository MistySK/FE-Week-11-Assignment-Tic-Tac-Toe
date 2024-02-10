$(document).ready(()=>{
    const currentPlayer = "X";
    const moves = 0;
    $("#ticTacToeGrid").click(() => {
        
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
                return $('#ticTacToeGrid .grid-cell').eq(index).txt() === player;
            })

        })
    function restartGame() {

    }
    function showAlert() {

    }
    function gameOver() {

    }
})