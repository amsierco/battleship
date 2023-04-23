import { Player } from "../internal";
import { AI } from "../internal";



 

test('Player attacking', ()=> {
    expect(AI.AIBoard.tileData.get(0,0)).toBeFalsy;
    Player.play(0,0);
    expect(AI.AIBoard.tileData.get(0,0)).toBeTruthy;
});