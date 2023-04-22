import { Board } from "../Board.js";
import { Ship } from '../Ship.js';

const board = Board();
board.createBoard();
const ship = Ship(4);

test('valid tile check', () => {
    expect(board.isValid(ship, 0, 0)).toBe(true);
    expect(board.isValid(ship, 4, 0)).toBe(false);
});

test('attack', () => {
    expect(board.board[0][0]).toBeNull;
    board.placeShip(ship, 0, 0);
    expect(board.board[3][0]).not.toBeNull;
    expect(board.board[1][0].hitCount).toBe(0);
    board.receiveAttack(2,0);
    expect(board.board[1][0].hitCount).toBe(1);
    board.receiveAttack(2,0);
    board.receiveAttack(2,0);
    expect(board.board[0][0].isSunk()).toBe(false);
    board.receiveAttack(2,0);
    expect(board.board[0][0].isSunk()).toBe(true);
});