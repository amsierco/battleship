import { Player } from "../Player";
import { AI } from "../Player";
import { GameManager } from "../GameManager";

test('AI attack Player', ()=> {
    let temp = AI.play();
    if(GameManager.playerBoard.getData(temp[0],temp[1]) != null){
        expect(GameManager.playerBoard.getData(temp[0],temp[1]).hitCount).toBe(1);
    } else {
        expect(GameManager.playerBoard.getData(temp[0],temp[1])).toBeNull;
    }
});