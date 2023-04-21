export const Ship = (len) => {
    const length = len;
    let hits = 0;
    let sunk = false;

    function isSunk(){
        return sunk;
    }

    return {
        length,
        get hits(){return hits;},
        isSunk
    }
}