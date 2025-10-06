import { Gameboard } from './gameboard.js'
import { Ship } from './ship.js'
import { Player } from './player.js'

export class Game {
    constructor() {
        this.h = new Player()
        this.c = new Player()
        this.placeCShips();
    }

    getPlayers() {
        return [this.h, this.c]
    } 

    placeCShips() {
        let player = this.c.getBoard();

        player.placeShip(new Ship(2), [1, 7], "v")
        player.placeShip(new Ship(3), [3, 7], "v");
        player.placeShip(new Ship(3), [5, 9], "h");
        player.placeShip(new Ship(4), [2, 2], "h");
        player.placeShip(new Ship(5), [8, 3], "v"); 
        
        console.log(player)
    }
}
