import { Board, Ship } from './internal';

export const Player = (() =>{
    let turn = true;
    function beginTurn(){ turn = true;}
    function endTurn(){ turn = false;}

    // Init random Player board
    const playerBoard = Board(1);
    for(let i=1; i<6; i++){
        let randRow = Math.floor(Math.random() * 10 + 0);
        let randCol = Math.floor(Math.random() * 10 + 0);
        let randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        let ship = Ship(i);
        while(playerBoard.placeShip(ship, randRot, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 10 + 0);
            randCol = Math.floor(Math.random() * 10 + 0);
            randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        }
        playerBoard.placeShip(ship, randRot, randRow, randCol);
    }

    // Player play turn
    function play(row, col){
        AI.AIBoard.attack(row, col);
    }

    return {
        beginTurn,
        endTurn,
        play,
        get turn(){return turn;},
        playerBoard
    }
})();

export const AI = (() => {

    // Init random AI board
    const AIBoard = Board(2);
    for(let i=1; i<6; i++){
        let randRow = Math.floor(Math.random() * 10 + 0);
        let randCol = Math.floor(Math.random() * 10 + 0);
        let randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        let ship = Ship(i);
        while(AIBoard.placeShip(ship, randRot, randRow, randCol) == false){
            randRow = Math.floor(Math.random() * 10 + 0);
            randCol = Math.floor(Math.random() * 10 + 0);
            randRot = Math.floor(Math.random() * 2 + 0) > 0 ? 90 : 0;
        }
        AIBoard.placeShip(ship, randRot, randRow, randCol);
    }


    // Attacking rand tile selection
    function randTile(){
        let randRow = Math.floor(Math.random() * 10 + 0);
        let randCol = Math.floor(Math.random() * 10 + 0);

        // Valid check
        while(Player.playerBoard.tileData.get(`${randRow}${randCol}`) == true){
            randRow = Math.floor(Math.random() * 10 + 0);
            randCol = Math.floor(Math.random() * 10 + 0);
        }

        return [randRow, randCol];
    }

    // AI play turn
    function play(){
        let tile = randTile();
        let result = Player.playerBoard.attack(tile[0], tile[1]);
        // Add more sophisticated attacking
        if(result == true){
            console.log('AI Hit');
        }

        return tile;
    }

    return {
        play,
        AIBoard
    }
})();