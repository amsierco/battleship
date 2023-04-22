import { Board } from "./Board"
import { Player } from "./Player"
import { AI } from "./Player"
import { Ship } from "./Ship";

export const GameManager = (() => {
    let playerBoard = Board();
    let AIBoard = Board();
    playerBoard.createBoard();
    AIBoard.createBoard();

    // Temporarily place random ships
    for(let i=1; i<6; i++){
        let randRow = Math.floor(Math.random() * 6 + 0);
        let randCol = Math.floor(Math.random() * 6 + 0);
        let ship = Ship(i);
        while(playerBoard.placeShip(ship, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 6 + 0);
            randCol = Math.floor(Math.random() * 6 + 0);
        }
        playerBoard.placeShip(ship, randRow, randCol);
        AIBoard.placeShip(ship, randRow, randCol);
    }


    return {
        get playerBoard(){return playerBoard;},
        get AIBoard(){return AIBoard;}
    }
})();