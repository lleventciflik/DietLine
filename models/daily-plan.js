const Meal = require("./meal");

class DailyPlan {
    constructor(dietPlan, date) {
        this.dietPlan = dietPlan;
        this.date = date;
        this.meals = [];
    }

    addMeal(name) {
        const meal = new Meal(this, name);

        this.meals.push(meal);

        return meal;
    }
}

module.exports = DailyPlan;