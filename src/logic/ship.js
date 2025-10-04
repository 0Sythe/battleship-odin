export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.hits >= this.length) return false;

        this.hits++;
    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
            return this.sunk;
        }

        return this.sunk;
    }
}

