import { Game } from './logic/game'
const newGame = new Game();
const [h, c] = newGame.getPlayers();
export class Ui {
    init() {
        this.cacheDom();
        this.createBoard(this.hBoard)
        this.createBoard(this.cBoard)
        this.createBoard(this.modalBoard);
    }

    cacheDom() {
        this.body = document.querySelector("body")
        this.container = document.querySelector(".board");
        this.hBoard = document.querySelector(".h-board");
        this.cBoard = document.querySelector(".c-board");
        this.modalBoard = document.querySelector(".modal-board")
    }

    createBoard(board) {
        for (let i = 0; i < 10; i++) {
            const col = document.createElement("div")
            col.className = "col";
            for (let j = 0; j < 10; j++) {
                const row = document.createElement("div");
                row.className = "row";
                row.style.border = "1px solid black";
                col.append(row);
            }
            board.append(col);
        }
    }
}