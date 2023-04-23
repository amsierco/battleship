const createBoards=(()=>{
    let gameSpace = document.createElement('div');
    gameSpace.setAttribute('class', 'gameSpace');
    for(let k=1; k<3; k++){
        let board = document.createElement('div');
        board.setAttribute('class', 'gameBoard');
        board.setAttribute('id', `${k}`);

        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                let tile = document.createElement('div');
                tile.setAttribute('id', `${k}${i}${j}`); // board#,row,col
                board.appendChild(tile);
            }
        }
        gameSpace.appendChild(board);
    }
    document.body.appendChild(gameSpace);
})();

export const DOM = (() => {

    function addShip(ship, rot=0, brd=1, row, col){
        let start = document.getElementById(`${brd}${row}${col}`);
        if(rot == 0){
          for(let i=0; i<ship.length; i++){
            document.getElementById(`${brd}${row+i}${col}`).innerHTML = `<div>${ship.length}</div>`;
          }
        } else {
          for(let i=0; i<ship.length; i++){
            document.getElementById(`${brd}${row}${col+i}`).innerHTML = `<div>${ship.length}</div>`;
          }
        }
    }

    function miss(brd, row, col){
        document.getElementById(`${brd}${row}${col}`).setAttribute('class', 'miss');
    }

    function hit(brd, row, col){
        document.getElementById(`${brd}${row}${col}`).setAttribute('class', 'hit');
    }

    return{
        addShip,
        miss,
        hit
    }

})();