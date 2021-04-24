const BaseService = require("./base-service.js");
const appointmentService = require('./appointment-service');
const nutritionistService = require("./nutritionist-service");
const Patient = require("../models/patient");

class PatientService extends BaseService {
    async appointment(patientId, nutritionistId, date) {       
        const patient = await this.findById(patientId);
        const nutritionist = await nutritionistService.findById(nutritionistId);
   
        const appointment = await appointmentService.insert({patient, nutritionist, date});

        patient.appointments.push(appointment);

        await patient.save();
    
        return appointment;
    }
}

module.exports = new PatientService(Patient);