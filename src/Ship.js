export const Ship = (len) => {
    const length = len;
    let hitCount = 0;
    let sunk = false;

    function isSunk(){
        return sunk;
    }

    function hit(){
        hitCount++;
        if(hitCount >= length){
            sunk = true;
        }
    }

    return {
        length,
        get hitCount(){return hitCount;},
        isSunk,
        hit
    }
}