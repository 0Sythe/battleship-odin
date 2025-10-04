export class Gameboard {
    constructor() {
        this.board = []
        this.fleet = [];
        this.missed = [];
    
        if (this.board.length <= 0) this.init()
    }

    getFleet() {
        return this.fleet;
    }

    getMissed() {
        return this.missed;
    }

    init() {
        for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push(null)
            }
        }
        return this.board
    }

    placeShip(ship, pos, dir) {
        let [x, y] = pos;

        if (this.validPlacement(pos)) {
            let placedShip = { ship, "pos": []};
            if (dir == "v") {
                this.board[x][y] = ship;
                placedShip.pos.push([x, y])
                for (let i = 1; i <= ship.length - 1; i++) {
                    if (this.validPos([x, y + i])) {
                        this.board[x][y + i] = ship;
                        placedShip.pos.push([x, y + i]);
                    }
                }
            } else if (dir == "h") {
                placedShip.pos.push([x, y])
                this.board[x][y] = ship;
                for (let i = 1; i <= ship.length - 1; i++) {
                    if (this.validPos([x + i, y])) {
                        placedShip.pos.push([x + i, y]);
                        this.board[x + i][y] = ship;
                    }
                }
            }
            this.fleet.push(placedShip);
        }
    }

    receiveAttack(pos) {
        if (this.validPos(pos)) {
            let [x, y] = pos;
            if (this.board[x][y] != null) {
                this.board[x][y].hit();
                return this.board[x][y].isSunk();
            } else if (this.board[x][y] == null){
                this.board[x][y] = "hit";
                this.missed.push([x, y])
            }
        }
   }

    allSunk() {
        return this.fleet.every((arr) => arr.ship.sunk == true)
    }

    validPos(pos) {
        let [x, y] = pos;
        if ((x <= 10 && x >= 0) && (y <= 10 && y>= 0)) return true;

        return false;
    }

    validPlacement(pos) {
        let [x, y] = pos;
        if (this.validPos(pos) && (this.board[x][y] == null)) return true;

        return false;
    }
}

