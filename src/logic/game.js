import { Gameboard } from './gameboard.js'
import { Ship } from './ship.js'
import { Player } from './player.js'

export class Game {
    constructor() {
        this.h = new Player()
        this.c = new Player()
    }

    getPlayers() {
        return [this.h, this.c]
    } 
}


export class Render {
    init() {
        this.hBoard = document.querySelector(".h-board");
        this.cBoard = document.querySelector(".c-board");
        this.loadBoard(this.hBoard)
        this.loadBoard(this.cBoard)
    }

    loadBoard(board) {
        for(let i = 0; i < 10; i++) {
            const col = document.createElement("div")
            col.className = "col"
            col.id = i
            for (let j = 0; j < 10; j++) {
                const row = document.createElement("div");
                row.className = "row"
                row.id = j
                col.appendChild(row)
            }
            board.appendChild(col);
        }
    }
}
