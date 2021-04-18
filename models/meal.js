const Food = require('./food');

class Meal {
    constructor(dailyPlan, name) {
        this.dailyPlan = dailyPlan;
        this.name = name;
        this.foods = [];
    }

    addFood(name, unit) {
        const food = new Food(this, name, unit);

        this.foods.push(food);

        return food;
    }
}

module.exports = Meal;