import { Gameboard } from './gameboard.js'
export class Player {
    constructor() {
        this.board = new Gameboard();
    }
    
    getBoard() {
        return this.board;
    }

    getFleet() {
        return this.board.getFleet();
    }

    getMissed() {
        return this.board.getMissed();
    }
}
