export default class Input {
    constructor() {

        this.downkeys = []
        this.enter = []

        document.onkeydown = (e) => {
            this.downkeys[e.code] = true
        }
        document.onkeyup = (e) => {
            this.downkeys[e.code] = false
        }
    }

    isKeyDown(keyCode) {
        return this.downkeys[keyCode]
    }

    isEnter(keyCode) {
        return this.enter[keyCode]
    }
}