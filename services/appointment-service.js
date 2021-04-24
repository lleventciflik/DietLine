const BaseService = require("./base-service");
const Appointment = require("../models/appointment");
const nutritionistService = require('./nutritionist-service')

class AppointmentService extends BaseService {
    async findByNutritionistId (nutritionistId) {
        return nutritionistService.findById(nutritionistId);
    }
}

module.exports = new AppointmentService(Appointment);