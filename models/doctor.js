const user = require('./user');
const policlinic = require('./policlinic');
const bloodAnalysis = require('./bloodAnalysis');
const dietPlan = require('./dietPlan');

class doctor extends user {
    constructor(name, surname, gender, phone, email, password) {
        super(name, surname, gender, phone, email, password);

        this.policlinic = null;
    }

    addPoliclinic(name, location, taxId) {
        const _policlinic = new policlinic(name, this, location, taxId);

        this.policlinic = _policlinic;

        return _policlinic;
    }

    addPatientBloodAnalys(patient, HDL_LDL, TSH) {
        const _patientBloodAnalys = new bloodAnalysis(patient, HDL_LDL, TSH);

        return _patientBloodAnalys;
    }

    addDietPlan(patient, startDate, endDate) {
        const _dietPlan = new dietPlan(patient, startDate, endDate);

        return _dietPlan;
    }
}

module.exports = doctor;