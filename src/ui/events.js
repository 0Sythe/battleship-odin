export class Events {
    init() {
        this.cacheDom()
        this.boardClicks();
    }

    cacheDom() {
        this.hBoard = document.querySelector(".h-board")
        this.cBoard = document.querySelector(".c-board")
    }

    boardClicks() {
        this.hBoard.addEventListener("click", (e) => {
            let tgt = e.target
            if (tgt.className == "row") {
                return [tgt.id, tgt.parentNode.id]
            }
        })

        this.cBoard.addEventListener("click", (e) => {
            let tgt = e.target;
            if (tgt.className == "row") {
                return [tgt.id, tgt.parentNode.id]
            }
        })
    }
}
