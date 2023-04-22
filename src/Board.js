export const Board = () => {
  let board = [];
  let tileData = new Map();
    
  function createBoard(){
    for(let i=0; i<7; i++){
      board.push([]);
      for(let j=0; j<7; j++){
        board[i].push(null);
        tileData.set((i*10)+j, false);
      }
    }
  }
       
  // Only for vertical placement
  function isValid(ship, row, col){
    for(let i=0; i<ship.length; i++){
      if(row+i > 6 || col > 6){
        return false; 
      }
      if(board[row+i][col] != null){
        return false;
      }
    }
    return true;
  }
       
  function placeShip(ship, row, col){
    if(isValid(ship, row, col) == false){return false;}
    for(let i=0; i<ship.length; i++){
      board[row+i][col] = ship;
    }
  }
       
  function receiveAttack(row, col){
    if(board[row][col] != null && typeof(board[row][col]) == "object"){
      board[row][col].hit();
      tileData.set((row*10)+col, true);
      return true;
    }
    tileData.set((row*10)+col, true);
    return false;
  }

  function getData(row, col){
    if(row > 6 || row < 0 || col > 6 || col < 0){return;}
    return board[row][col];
  }

  function print(){console.log(board);}
  
  return{
    createBoard,
    isValid,
    placeShip,
    print,
    receiveAttack,
    getData,
    get board(){return board;},
    get tileData(){return tileData;}
  }    
};
    
