const policlinic = require('./policlinic');
const bloodAnalysis = require('./bloodAnalysis');
const dietPlan = require('./dietPlan');

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
        return new policlinic(name, this, location, taxId);
    }

    addPatientBloodAnalys(patient, hdl, TSH) {
        return new bloodAnalysis(patient, hdl, TSH);;
    }

    addDietPlan(patient, startDate, endDate) {
        return new dietPlan(this, patient, startDate, endDate);;
    }

    static create({name,surname,gender,phone,email,password}) {
        return new Nutritionist(name, surname, gender, phone, email, password);
    }
}

module.exports = Nutritionist;