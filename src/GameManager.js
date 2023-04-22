import { Board } from "./Board"
import { Player } from "./Player"
import { AI } from "./Player"
import { Ship } from "./Ship";

export const GameManager = (() => {

    // Initialize variables
    let playerBoard = Board();
    let AIBoard = Board();
    playerBoard.createBoard();
    AIBoard.createBoard();

    // Temporarily place ships randomly
    for(let i=1; i<6; i++){
        let randRow = Math.floor(Math.random() * 6 + 0);
        let randCol = Math.floor(Math.random() * 6 + 0);
        let randRot = Math.floor(Math.random() * 1) != 0 ? 90 : 0;
        let ship = Ship(i);
        while(playerBoard.placeShip(ship, randRot, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 6 + 0);
            randCol = Math.floor(Math.random() * 6 + 0);
        }
        playerBoard.placeShip(ship, randRot, randRow, randCol);
        AIBoard.placeShip(ship, randRot, randRow, randCol);
    }


    return {
        get playerBoard(){return playerBoard;},
        get AIBoard(){return AIBoard;}
    }
})();