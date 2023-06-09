import { DOM } from './internal';

export const Board = (id) => {
  let board = [];
  let tileData = new Map();
  let ID = id;
  let ships = [];
    
  for(let i=0; i<10; i++){
    board.push([]);
    for(let j=0; j<10; j++){
      board[i].push(null);
      tileData.set(`${(i)}${j}`, false);
    }
  }
       
  /*
    @param rot -> 0 || 90
  */
  function isValid(ship, rot=0, row, col){
    // Vertical rotation
    if(rot == 0){
      for(let i=0; i<ship.length; i++){
        if(row+i > 9 || col > 9){
          return false; 
        }
        if(board[row+i][col] != null){
          return false;
        }
      }
    } 
    // Horizontal rotation
    else {
      for(let i=0; i<ship.length; i++){
        if(row > 9 || col+i > 9){
          return false; 
        }
        if(board[row][col+i] != null){
          return false;
        }
      }
    }
    return true;
  }

  /*
    @param rot -> 0 || 90
  */
  function placeShip(ship, rot=0, row, col){
    if(isValid(ship, rot, row, col) == false){return false;}
    if(rot == 0){
      for(let i=0; i<ship.length; i++){
        board[row+i][col] = ship;
      }
    } else {
      for(let i=0; i<ship.length; i++){
        board[row][col+i] = ship;
      }
    }
    DOM.addShip(ship, rot, ID, row, col);
    ships.push(ship);
  }
       
  function attack(row, col){
    if(board[row][col] != null && typeof(board[row][col]) == "object"){
      board[row][col].hit();
      tileData.set(`${(row)}${col}`, true);
      DOM.hit(ID, row, col);
      return true;
    }
    tileData.set(`${(row*1)}${col}`, true);
    DOM.miss(ID, row, col);
    return false;
  }

  function getData(row, col){
    if(row > 9 || row < 0 || col > 9 || col < 0){return;}
    return board[row][col];
  }
  
  return{
    isValid,
    placeShip,
    attack,
    getData,
    get board(){return board;},
    get tileData(){return tileData;},
    get ships(){return ships;}
  }    
};
    
