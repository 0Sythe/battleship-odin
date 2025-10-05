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

        while(player.fleet.length < 5) {
            let pos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

            if (player.validPlacement(pos)) {
                player.placeShip(new Ship(player.fleet.length + 1), pos, "v")
            }
        }
    }
}
