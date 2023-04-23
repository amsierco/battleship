import { AI, Player } from './internal';

export const GameManager = (() => {
    
    // Player attack event
    let AIB = document.getElementById('2');
    for(let div of AIB.children){
        div.addEventListener('click', (tile) => {
            takeTurn(tile);
        });
    }

    function takeTurn(tile){
        if(Player.turn == true){
            if(tile.target.id == ""){
                tile = tile.target.parentElement.id;
            } else {
                tile = tile.target.id;
            }
            let row = Math.floor(Math.floor(tile/10)%10);
            let col = Math.floor(tile%10);

            if(AI.AIBoard.tileData.get((row*10)+col) == true){
                alert("duplicate");
                return;
            }
            Player.play(row, col);
            Player.endTurn();
        }
        AI.play();
        Player.beginTurn();
    }

    return {
        takeTurn
    }
})();
