import { Ship } from '../Ship.js';

test("ship initialization", ()=>{
    expect(Ship(2).length).toBe(2);
    expect(Ship(2).hitCount).toBe(0);
    expect(Ship(2).isSunk()).toBe(false);
});

test("ship damage and sink", () => {
    let temp = Ship(2);
    temp.hit();
    expect(temp.hitCount).toBe(1);
    expect(temp.isSunk()).toBe(false);
    temp.hit();
    expect(temp.hitCount).toBe(2);
    expect(temp.isSunk()).toBe(true);
});