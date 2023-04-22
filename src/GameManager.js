import { Board } from "./Board"
import { Ship } from "./Ship";
import { DOM } from "./DOM";
import { AI } from "./Player.js";

export const GameManager = (() => {

    // Initialize variables
    let playerBoard = Board();
    let AIBoard = Board();
    playerBoard.createBoard(1);
    AIBoard.createBoard(2);

    // Temporarily place ships randomly
    for(let i=1; i<6; i++){
        let randRow = Math.floor(Math.random() * 6 + 0);
        let randCol = Math.floor(Math.random() * 6 + 0);
        let randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        let ship = Ship(i);
        while(playerBoard.placeShip(ship, randRot, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 6 + 0);
            randCol = Math.floor(Math.random() * 6 + 0);
            randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        }
        playerBoard.placeShip(ship, randRot, randRow, randCol);
        randRow = Math.floor(Math.random() * 6 + 0);
        randCol = Math.floor(Math.random() * 6 + 0);
        randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        while(AIBoard.placeShip(ship, randRot, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 6 + 0);
            randCol = Math.floor(Math.random() * 6 + 0);
            randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        }
        AIBoard.placeShip(ship, randRot, randRow, randCol);
    }
    
    //ERROR
    function takeTurn(){
       AI.play();
    }

    return {
        get playerBoard(){return playerBoard;},
        get AIBoard(){return AIBoard;},
        takeTurn
    }
})();

// GameManager.takeTurn();