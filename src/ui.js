import { Game } from './logic/game.js'

const newGame = new Game();
const [h, c] = newGame.getPlayers();
export class Ui {
    init() {
        this.domElem();
        this.loadBoard(this.cBoard); 
        this.loadBoard(this.hBoard);
    }

    domElem() {
        this.cBoard = document.querySelector(".c-board");
        this.hBoard = document.querySelector(".h-board");
    }

    loadBoard(board) {
        for (let i = 0; i < 10; i++) {
            const col = document.createElement("div")
            col.className = "col";
            for (let j = 0; j < 10; j++) { 
                const row = document.createElement("div")
                row.className = "row";
                row.style.border = "0.1px solid black";
                col.appendChild(row)
            }
            board.appendChild(col);
        }
    }
}
