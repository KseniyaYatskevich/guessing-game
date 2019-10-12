class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessMiddle = Math.ceil((this.max + this.min)/2);
        return this.guessMiddle;
    }

    lower() {
        this.min = this.min;
        this.max = this.guessMiddle;
    }

    greater() {
        this.min = this.guessMiddle;
        this.max = this.max;
    }
}

module.exports = GuessingGame;
