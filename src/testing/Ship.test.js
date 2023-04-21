import { Ship } from '../Ship.js';

test("ship initialization", ()=>{
    expect(Ship(2).length).toBe(2);
    expect(Ship(2).hits).toBe(0);
    expect(Ship(2).isSunk()).toBeFalsy;
});