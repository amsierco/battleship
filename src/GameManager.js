import { AI, Player } from './internal';

export const GameManager = (() => {
    
    let gameOver = false;

    // Player attack event
    let AIB = document.getElementById('2');
    for(let div of AIB.children){
        div.addEventListener('click', (tile) => {
            takeTurn(tile);
        });
    }

    //function checkGame(){

    //}

    function takeTurn(tile){
        if(gameOver == true){return;}
        if(Player.turn == true){
            if(tile.target.id == ""){
                tile = tile.target.parentElement.id;
            } else {
                tile = tile.target.id;
            }
            let row = Math.floor(Math.floor(tile/10)%10);
            let col = Math.floor(tile%10);

            if(AI.AIBoard.tileData.get(`${row}${col}`) == true){
                alert("duplicate");
                return;
            }
            Player.play(row, col);
            Player.endTurn();
        }
        //checkGame();
        if(gameOver == true){return;}
        AI.play();
        Player.beginTurn();
        //checkGame();
    }

    return {
        takeTurn
    }
})();
