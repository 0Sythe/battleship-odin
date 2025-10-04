import { Gameboard } from './gameboard.js'
import { Ship } from './ship.js'
export class Player {
    constructor() {
        this.board = new Gameboard();
    }

    getBoard() {
        return this.board.board;
    }

    getMissed() {
        return this.board.missed;
    }

    getFleet() {
        return this.board.fleet;
    }
}

const p = new Player()
console.log(p)

// p.placeShip(new Ship(2), [3, 3], "v");
console.log(p.board);
