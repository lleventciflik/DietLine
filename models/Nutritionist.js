const Policlinic = require('./policlinic');
const BloodAnalysis = require('./blood-analysis');
const DietPlan = require('./diet-plan');

class Nutritionist {
    constructor(name, surname, gender, phone, email, password) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.policlinic = null;
    }

    addPoliclinic(name, location, taxId) {
        return new Policlinic(name, this, location, taxId);
    }

    addPatientBloodAnalys(patient, hdl, TSH) {
        return new BloodAnalysis(patient, hdl, TSH);;
    }

    addDietPlan(patient, startDate, endDate) {
        return new DietPlan(this, patient, startDate, endDate);
    }

    static create({name,surname,gender,phone,email,password}) {
        return new Nutritionist(name, surname, gender, phone, email, password);
    }
}

module.exports = Nutritionist;