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

    function checkGame(){
        // Check AI board
        let sunkCounter = 0;
        for(let s of AI.AIBoard.ships){
            if(s.isSunk() == true){
                sunkCounter++;
                if(sunkCounter >= 5){
                    gameOver=true;
                    return true;
                }
            }
        }
        // Check Player board
        sunkCounter=0;
        for(let s of Player.playerBoard.ships){
            if(s.isSunk() == true){
                sunkCounter++;
                if(sunkCounter >= 5){
                    gameOver=true;
                    return true;
                }
            }
        }
        return false;
    }

    function takeTurn(tile){
        
        if(checkGame() == true){alert('GAME OVER!');return;}

        if(Player.turn == true){
            if(tile.target.id == ""){
                tile = tile.target.parentElement.id;
            } else {
                tile = tile.target.id;
            }
            let row = Math.floor(Math.floor(tile/10)%10);
            let col = Math.floor(tile%10);

            if(AI.AIBoard.tileData.get(`${row}${col}`) == true){
                return;
            }
            Player.play(row, col);
            Player.endTurn();
        }

        if(checkGame() == true){alert('PLAYER WINS!');return;}

        AI.play();

        if(checkGame() == true){alert('AI WINS!');return;}

        Player.beginTurn();
    }

    return {
        takeTurn
    }
})();
