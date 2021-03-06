const Policlinic = require('./policlinic');
const BloodAnalysis = require('./blood-analysis');
const DietPlan = require('./diet-plan');
const Meal = require('./meal');
const mongoose = require('mongoose');

const NutritionistSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: String,
    phone: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Nutritionist', NutritionistSchema);


// class Nutritionist {
//     constructor(id = uuidv4(), name, surname, gender, phone, email, password, policlinic = null,dietPlans = []) {
//         id = id;
//         this.name = name;
//         this.surname = surname;
//         this.gender = gender;
//         this.phone = phone;
//         this.email = email;
//         this.password = password;
//         this.policlinic = policlinic;
//         this.dietPlans = dietPlans;
//     }

//     addPoliclinic(name, location, taxId) {
//         let policlinic = new Policlinic(name, this, location, taxId);

//         this.policlinic = policlinic;

//         return policlinic;
//     }

//     addPatientBloodAnalys(patient, hdl, tsh) {
//         let bloodAnalysis = new BloodAnalysis(patient, hdl, tsh);

//         return bloodAnalysis;
//     }

//     addDietPlan(patient, mealCount, startDate, endDate) {
//         const dietPlan = new DietPlan(this, patient, mealCount, startDate, endDate);

//         this.dietPlans.push(dietPlan);

//         return dietPlan;
//     }

//     static create({
//         id,
//         name,
//         surname,
//         gender,
//         phone,
//         email,
//         password,
//         policlinic,
//         dietPlans
//     }) {
//         return new Nutritionist(id, name, surname, gender, phone, email, password,policlinic, dietPlans);
//     }
// }

// module.exports = Nutritionist;