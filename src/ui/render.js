import { Game } from '../logic/game.js'
const g = new Game();
let [h, c] = g.getPlayers()
export class Render {
    init() {
        this.cacheDom();
        this.loadBoards(this.hBoard);
        this.loadBoards(this.cBoard);
        this.populateBoard(this.cBoard);
    }

    cacheDom() {
        this.hBoard = document.querySelector(".h-board")
        this.cBoard = document.querySelector(".c-board")
    }

    loadBoards(board) {
        for (let i = 0; i <= 9; i++) {
            const col = document.createElement("div")
            col.className = 'col'
            col.id = i;
            for (let j = 0; j <= 9; j++) {
                const row = document.createElement("div")
                row.className = 'row'
                row.id = j
                col.appendChild(row)
            }
            board.appendChild(col)
        }
        return board;
    }

    populateBoard(board) {
        let squares = Array.from(board.childNodes);
        if (board.className == "h-board") {
            let fleet = h.getFleet();
            console.log(fleet);
        } else {
            let fleet = c.getFleet();
            for (let i = 0; i < fleet.length; i++) {
                let pos = fleet[i].pos;
                for (let j = 0; j < pos.length; j++) {
                    let [x, y] = pos[j]
                    console.log(pos[j])
                    const col = squares.find((square) => square.id == x);
                    const rows = Array.from(col.childNodes)
                    const square = rows.find((square) => square.id == y)
                    square.style.backgroundColor = "black";
                }
            }
        }
    }
}
