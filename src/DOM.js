const createBoards=(()=>{
    let gameSpace = document.createElement('div');
    gameSpace.setAttribute('class', 'gameSpace');
    for(let k=1; k<3; k++){
        let board = document.createElement('div');
        board.setAttribute('class', 'gameBoard');

        for(let i=0; i<7; i++){
            for(let j=0; j<7; j++){
                let tile = document.createElement('div');
                //if(i==0){
                //    tile.setAttribute('id', `${k}${j}`);
                //} else {
                tile.setAttribute('id', `${k}${i}${j}`); // board#,row,col
                //}
                board.appendChild(tile);
            }
        }
        gameSpace.appendChild(board);
    }
    document.body.appendChild(gameSpace);
})();

export const DOM = (() => {

})();