import { AI, Player } from './internal';

export const GameManager = (() => {
    
    // Player attack event
    let AIB = document.getElementById('2');
    for(let div of AIB.children){
        div.addEventListener('click', (tile) => {
            if(Player.turn == true){
                if(tile.target.id == ""){
                    tile = tile.target.parentElement.id;
                    takeTurn(tile);
                } else {
                    takeTurn(tile.target.id);
                }
            }
        });
    }

    function takeTurn(id=null){
        Player.play(Math.floor(Math.floor(id/10)%10), Math.floor(id%10));
        Player.endTurn();
        AI.play();
        Player.beginTurn();
    }

    return {
        takeTurn
    }
})();
