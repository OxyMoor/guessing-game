class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.num = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.num;
        this.guess();
    }

    greater() {
        this.min = this.num;
        this.guess();
    }
}

module.exports = GuessingGame;
