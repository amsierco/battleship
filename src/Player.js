import { GameManager } from "./GameManager";

export const Player = (() =>{
    let turn = false;
    function beginTurn(){ turn = true;}
    function endTurn(){ turn = false;}

    return {
        beginTurn,
        endTurn,
        get turn(){return turn;}
    }
})();

export const AI = (() => {
    //let AI = Player;
    function randTile(){
        let randRow = Math.floor(Math.random() * 6 + 0);
        let randCol = Math.floor(Math.random() * 6 + 0);

        // Valid check
        while(GameManager.playerBoard.tileData.get((randRow*10)+randCol) == true){
            randRow = Math.floor(Math.random() * 6 + 0);
            randCol = Math.floor(Math.random() * 6 + 0);
        }

        return [randRow, randCol];
    }

    function play(){
        let tile = randTile();
        GameManager.playerBoard.attack(tile[0], tile[1]);
        
        // For testing
        console.log(tile[0]+', '+tile[1]);
        return tile;
    }

    return {
        //get AI(){return AI;},
        play
    }
})();

AI.play();AI.play();AI.play();AI.play();AI.play();AI.play();AI.play();