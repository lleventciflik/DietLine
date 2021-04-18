const DailyPlan = require("./daily-plan");

class DietPlan {
    constructor(doctor, patient, mealCount, startDate, endDate) {
        this.doctor = doctor;
        this.patient = patient;
        this.mealCount = mealCount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.dailyPlans = [];
    }

    addDailyPlan(date) {
        const dailyPlan = new DailyPlan(this, date);

        this.dailyPlans.push(dailyPlan);

        return dailyPlan;
    }
}

module.exports = DietPlan;