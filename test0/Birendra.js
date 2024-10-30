class Birendra {

    constructor(moneyAccumulated) {
        this.moneyAccumulated = moneyAccumulated
    }

    getTotalMoney() {
        console.log(`Total money earned so far ${this.moneyAccumulated}`);
    }
}

module.exports = Birendra
