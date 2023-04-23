import { Player } from "../internal";
import { AI } from "../internal";

test('Player attacking', ()=> {
    expect(AI.AIBoard.tileData.get(1)).toBeFalsy;
    Player.play(0,1);
    expect(AI.AIBoard.tileData.get(1)).toBeTruthy;
});